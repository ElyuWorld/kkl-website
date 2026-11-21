"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/anniversary.png",
    alt: "Banner for the KKL 38th Founding Anniversary",
  },
  {
    src: "/images/coop-month.jpg",
    alt: "Cooperative Month 2026 poster, October 1 to 31",
  },
];

export function PhotoSwap() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (open) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [open]);

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
        aria-label={`View ${slide.alt}`}
        className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-2xl"
      >
        {slides.map((item, slideIndex) => (
          <Image
            key={item.src}
            src={item.src}
            alt={slideIndex === index ? item.alt : ""}
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            aria-hidden={slideIndex !== index}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={slide.alt}
          onClick={() => setOpen(false)}
        >
          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
