"use client";

import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";

type Props = {
  disabled?: boolean;
};

/** Submit button: uses server action pending state or external `disabled` prop. */
export default function SubmitButton({ disabled }: Props) {
  const { pending } = useFormStatus();
  const isDisabled = Boolean(disabled) || pending;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/20 px-6 py-3 font-semibold text-white hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isDisabled ? (
        "Sending..."
      ) : (
        <>
          <Send size={18} />
          Send Message
        </>
      )}
    </button>
  );
}
