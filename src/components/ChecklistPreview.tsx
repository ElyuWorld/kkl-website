"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const src = "/images/loan-requirements-checklist.jpg";
const alt = "Loan requirements checklist for a new loan and a renewal";

export function ChecklistPreview() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-forest-deep"
      >
        View Loan Requirement Checklist
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <div className="relative h-[85vh] w-full max-w-3xl">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
