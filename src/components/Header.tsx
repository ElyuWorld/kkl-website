import Image from "next/image";
import Link from "next/link";
import { coop, nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-forest/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/kkl-logo.jpg"
            alt=""
            width={1024}
            height={1024}
            priority
            className="h-14 w-14 shrink-0 rounded-full"
          />
          <span>
            <span className="block font-serif text-lg leading-none text-forest">
              {coop.shortName}
            </span>
            <span className="mt-1 block max-w-64 text-xs leading-snug text-muted">
              {coop.name}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-forest md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-1 hover:bg-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-forest/20 px-3 py-1.5 text-sm font-semibold text-forest">
            Menu
          </summary>
          <nav className="absolute right-0 z-30 mt-2 w-44 rounded-2xl border border-forest/10 bg-paper p-2 shadow-lg">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm font-semibold text-forest hover:bg-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
