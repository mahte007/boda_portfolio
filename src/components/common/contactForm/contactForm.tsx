"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactActionState } from "./actions";

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
  const [state, formAction] = useActionState<ContactActionState, FormData>(
    submitContact,
    null,
  );

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
            placeholder="Teszt Elek"
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
            placeholder="teszt.elek@példa.com"
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
        <SubmitButton />
        {state?.ok === true && (
          <p className="text-sm text-green-700">Elküldve!</p>
        )}
        {state?.ok === false && state.errors?._form?.[0] && (
          <p className="text-sm text-red-600">{state.errors._form[0]}</p>
        )}
      </div>
    </form>
  );
}
