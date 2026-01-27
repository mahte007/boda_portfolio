"use client";

import { useActionState, useCallback, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactActionState } from "./actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-b3 px-4 py-2 text-white text-[22px] font-medium disabled:opacity-60 w-48 h-12"
    >
      {pending ? "Küldés..." : "Küldés"}
    </button>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-sm text-red-600">{msg}</p>;
}

export default function ContactForm() {
  const { pending } = useFormStatus();

  const [state, formAction] = useActionState<ContactActionState, FormData>(
    submitContact,
    null,
  );

  useEffect(() => {
    if (!state) return;
    if (state.ok) {
      toast.success("Üzenetét sikeresen elküldtük!");
      console.log("success");
    } else if (state.errors?._form?.[0]) toast.error(state.errors._form[0]);
  }, [state]);

  return (
    <form action={formAction} className="space-y-4 text-white">
      {/* honeypot: bots fill it, humans won’t see it */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="space-y-1 w-full">
          <label className="block text-sm font-medium">Név</label>
          <input
            name="name"
            autoComplete="name"
            className="w-full px-3 py-2 bg-white/15 shadow-xl"
            placeholder="Kovács István"
          />
          <FieldError
            msg={state?.ok === false ? state.errors?.name?.[0] : undefined}
          />
        </div>

        <div className="space-y-1 w-full">
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="w-full px-3 py-2 bg-white/15 shadow-xl"
            placeholder="kovacs.istvan@példa.com"
          />
          <FieldError
            msg={state?.ok === false ? state.errors?.email?.[0] : undefined}
          />
        </div>

        <div className="space-y-1 w-full">
          <label className="block text-sm font-medium">Tárgy</label>
          <input
            name="subject"
            autoComplete="subject"
            className="w-full px-3 py-2 bg-white/15 shadow-xl"
            placeholder="Hitelügyintézés"
          />
          <FieldError
            msg={state?.ok === false ? state.errors?.subject?.[0] : undefined}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium">Üzenet</label>
        <textarea
          name="message"
          rows={6}
          className="w-full px-3 py-2 bg-white/15 shadow-xl"
          placeholder="Ide írd az üzeneted..."
        />
        <FieldError
          msg={state?.ok === false ? state.errors?.message?.[0] : undefined}
        />
      </div>

      <div className="flex items-center gap-3 justify-end">
        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-b3 px-4 py-2 text-white text-[22px] font-medium disabled:opacity-60 w-48 h-12"
        >
          {pending ? "Küldés..." : "Küldés"}
        </button>
      </div>
    </form>
  );
}
