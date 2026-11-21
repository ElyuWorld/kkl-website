import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Share capital, savings, credit assistance, the consumer store, and member education at KKL.",
};

const services = [
  {
    title: "Share capital",
    text: "Membership is tied to share capital. The first members started with small salary deductions. Today, the amount to subscribe is the amount set by the Board of Directors. Use the Re-subscription Agreement when you are ready to file.",
  },
  {
    title: "Savings",
    text: "In 2001 the cooperative launched the Member Savers Club so members of the community could practice thrift alongside their share capital.",
  },
  {
    title: "Credit assistance",
    text: "KKL extends credit to members in good standing. A loan is not automatic: the office checks membership records, income, and the current credit policy. Download the Loan Application Form before you visit.",
  },
  {
    title: "Consumer store",
    text: "The consumer store beside the main office on F. Pamor Street, San Isidro Sur, serves members and the community.",
  },
  {
    title: "Member education",
    text: "New members take the Pre-Membership Education Seminar. The original 58 cooperators followed that same step on August 26, 1988, before they elected officers.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Savings, credit, and a store for members">
        KKL is a primary multi-purpose cooperative. These are the services
        described in its own history. Ask the office for current terms before
        you transact.
      </PageHeader>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4">
          {services.map((item) => (
            <article key={item.title} className="rounded-2xl bg-paper p-6">
              <h2 className="font-serif text-2xl text-forest">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Requirement forms for membership, share capital, and loans are on the{" "}
          <Link href="/forms" className="font-semibold text-forest underline decoration-gold underline-offset-4">
            forms page
          </Link>
          .
        </p>
      </div>
    </>
  );
}
