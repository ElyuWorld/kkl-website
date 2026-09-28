import Image from "next/image";
import Link from "next/link";
import { coop, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-forest-deep text-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <Image
            src="/images/kkl-logo.jpg"
            alt=""
            width={1024}
            height={1024}
            className="h-16 w-16 rounded-full bg-white"
          />
          <p className="mt-3 font-serif text-xl text-white">{coop.shortName}</p>
          <p className="mt-2 text-sm leading-relaxed text-sand/85">{coop.name}</p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="font-semibold text-white">Main office</p>
          <p className="mt-2 text-sand/85">{coop.address}</p>
          <p className="mt-3 font-semibold text-white">Branch</p>
          <p className="mt-2 text-sand/85">{coop.branch}</p>
          <p className="mt-3 text-sand/70">{coop.registration}</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-sand/70">
        {coop.name} ({coop.shortName})
      </div>
    </footer>
  );
}
