import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { coop } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "KKL office locations in Lagonoy and Caramoan, Camarines Sur.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Visit an office to file your forms">
        Membership, savings, loans, and store questions are handled at the
        counter. Bring a valid ID with any form you downloaded from this site.
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-2">
        <article className="rounded-2xl bg-paper p-6">
          <h2 className="font-serif text-2xl text-forest">Main office</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{coop.address}</p>
          <p className="mt-3 text-sm text-muted">
            The consumer store is beside this office. The function hall used
            for the founding anniversary is on the KKL grounds.
          </p>
        </article>
        <article className="rounded-2xl bg-paper p-6">
          <h2 className="font-serif text-2xl text-forest">Caramoan branch</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{coop.branch}</p>
          <p className="mt-3 text-sm text-muted">
            The first branch opened in June 2015. Ask the branch which
            requirement forms they accept on site.
          </p>
        </article>
        <article className="rounded-2xl bg-forest p-6 text-sand md:col-span-2">
          <h2 className="font-serif text-2xl text-white">Before you go</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sand/90">
            Download the requirement forms, print them, and fill in every line
            you can. The cooperative is registered as {coop.registration}. This
            website does not publish a phone number or email, so inquire in
            person at either office.
          </p>
          <Link
            href="/forms"
            className="mt-5 inline-block rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-forest-deep"
          >
            Go to requirement forms
          </Link>
        </article>
      </div>
    </>
  );
}
