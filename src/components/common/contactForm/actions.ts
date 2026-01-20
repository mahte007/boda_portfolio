"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactRatelimit } from "@/lib/ratelimit";
import { getClientIp } from "@/utils/useGetIp";


const resend = new Resend(process.env.RESEND_API_KEY);

const Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subject: z.string().min(1, "Subject is required"),
  website: z.string().optional(), // honeypot
  formStartedAt: z.coerce.number().optional(), // time trap
});


export type ContactActionState =
  | null
  | { ok: true }
  | { ok: false; errors?: Record<string, string[]> };

  
export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    website: String(formData.get("website") ?? ""),
    formStartedAt: String(formData.get("formStartedAt") ?? ""),
  };


  const parsed = Schema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }


  // If bot filled honeypot, pretend success but do nothing.
  if (parsed.data.website) return { ok: true };


  // Time trap: if submitted too fast, pretend success
  const startedAt = parsed.data.formStartedAt;
  if (startedAt && Date.now() - startedAt < 2500) return { ok: true };


  const ip = await getClientIp();
  const { success, reset } = await contactRatelimit.limit(`ip:${ip}`);
  if (!success) {
    // For UX: return a real error to humans
    const seconds = Math.max(1, Math.round((reset - Date.now()) / 1000));
    return { ok: false, errors: { _form: [`Too many requests. Try again in ${seconds}s.`] } };
  }


  const { name, email, message, subject } = parsed.data;

  try {
    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: subject,
      html: 
      `
        <div>
            <p>Név: ${name}</p>
            <p>Email: ${email}</p>
            <p>${message}</p>
        </div>
      `,
    });

    if (result.error) {
      return { ok: false, errors: { _form: [result.error.message] } };
    }

    return { ok: true };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { ok: false, errors: { _form: [err?.message ?? "Unknown error"] } };
  }
}
