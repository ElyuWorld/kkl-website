import type { Metadata } from "next";
import { ChecklistPreview } from "@/components/ChecklistPreview";
import { PageHeader } from "@/components/PageHeader";
import { forms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Requirement forms",
  description:
    "Download KKL membership, deposit, loan, and re-subscription forms.",
};

export default function FormsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Requirement forms"
        action={<ChecklistPreview />}
      >
        Print the form, fill it in, and submit it at the Lagonoy office or the
        Caramoan branch. Share capital amounts and loan approval follow the
        current policies of the board.
      </PageHeader>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <ol className="grid gap-4">
          {forms.map((form, index) => (
            <li
              key={form.file}
              className="flex flex-col gap-4 rounded-2xl bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                  Form {index + 1}
                </p>
                <h2 className="mt-1 font-serif text-2xl text-forest">{form.title}</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {form.summary}
                </p>
                {"note" in form && form.note ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted">{form.note}</p>
                ) : null}
                <p className="mt-2 text-xs text-muted">PDF · {form.file}</p>
              </div>
              <a
                href={`/forms/${encodeURIComponent(form.file)}`}
                download={form.file}
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-sand"
              >
                Download
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          Download the form you need, print it, and bring it to the Lagonoy
          office or the Caramoan branch. The office may ask for another
          document under the by-laws.
        </p>
      </div>
    </>
  );
}
