import Image from "next/image";
import Link from "next/link";
import { PhotoSwap } from "@/components/PhotoSwap";
import { coop, forms } from "@/lib/site";

const newMemberFiles = new Set([
  "MEMBERSHIP FORM.pdf",
  "Member Profile Information.pdf",
]);
const newMemberForms = forms.filter((form) => newMemberFiles.has(form.file));
const otherForms = forms.filter((form) => !newMemberFiles.has(form.file));

const formGroups = [
  { title: "New members", items: newMemberForms },
  { title: "Deposit, loan, and re-subscription", items: otherForms },
];

const services = [
  {
    title: "Share capital and savings",
    text: "Members build ownership through share capital. The Member Savers Club, launched in 2001, encourages the habit of thrift.",
  },
  {
    title: "Credit assistance",
    text: "Members in good standing may apply for credit. Lending follows the cooperative’s current credit policy.",
  },
  {
    title: "Consumer store",
    text: "A store beside the main office on F. Pamor Street serves members and the wider community.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src="/images/building.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cream/40 backdrop-blur-md" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-forest">
              Lagonoy, Camarines Sur
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">
              {coop.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink">
              {coop.description} The main office stands on F. Pamor Street in
              San Isidro Sur, with a branch in Caramoan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/forms"
                className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-sand"
              >
                Download requirement forms
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-forest/30 bg-paper/70 px-5 py-2.5 text-sm font-semibold text-forest"
              >
                Read the history
              </Link>
            </div>
          </div>
          <PhotoSwap />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-10 sm:grid-cols-3">
        {[
          ["1988", "Year the first members organized the cooperative"],
          ["NG-743", "Registration number with the Cooperative Development Authority"],
          ["2 offices", "Main office in Lagonoy and a branch in Caramoan"],
        ].map(([value, label]) => (
          <div key={value} className="rounded-2xl bg-paper px-5 py-6">
            <p className="font-serif text-3xl text-forest">{value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <h2 className="font-serif text-3xl text-forest">What members can expect</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <article key={item.title} className="rounded-2xl bg-paper p-5">
              <h3 className="font-serif text-xl text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-5 inline-block text-sm font-semibold text-forest underline decoration-gold underline-offset-4"
        >
          See services
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl bg-forest px-6 py-8 text-sand md:px-10">
          <h2 className="font-serif text-3xl text-balance text-white">
            Download, print, and bring a valid ID
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/90">
            Take the form to F. Pamor St. or the Caramoan branch.
          </p>
          <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {formGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <h3 className="font-serif text-xl text-white">{group.title}</h3>
                <ul className="mt-3 grid gap-4">
                  {group.items.map((form) => (
                    <li key={form.file}>
                      <a
                        href={`/forms/${encodeURIComponent(form.file)}`}
                        download={form.file}
                        className="inline-block text-sm font-semibold text-white underline decoration-sand/70 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand"
                      >
                        {form.title}
                      </a>
                      <p className="mt-2 text-sm leading-relaxed text-sand/90">
                        {form.summary}
                      </p>
                      {"note" in form && form.note ? (
                        <p className="mt-1 text-sm leading-relaxed text-sand/90">
                          {form.note}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href="/forms"
            className="mt-6 inline-block rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-forest-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Open the forms section
          </Link>
        </div>
      </section>
    </>
  );
}
