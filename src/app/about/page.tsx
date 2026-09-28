import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "History of the Kooperatiba para sa Kaunlaran ng Lagonoy, from the 1988 seminar to the Caramoan branch.",
};

const timeline = [
  {
    year: "1988",
    title: "The first members gather",
    text: "On August 26, 1988, fifty-eight employees of the Local Government Unit of Lagonoy attended a Pre-Membership Education Seminar. The seminar was held with the Department of Agriculture and the LGU of Lagonoy. Candido P. Olivares was elected the first chairman. The effort began through his initiative and the persuasion of Hon. Alfredo F. Rellora.",
  },
  {
    year: "1989",
    title: "First registration",
    text: "Members contributed five to ten pesos from their salaries as share capital. Early assistance worked like a paluwagan, with members taking turns receiving the collected shares. The cooperative was registered with the Bureau of Agricultural Cooperative Development under RV-FF223 on June 1, 1989, as the Kooperatiba ng mga Kawani ng Lagonoy, Inc.",
  },
  {
    year: "1991",
    title: "CDA registration",
    text: "KKLI registered with the Cooperative Development Authority on September 25, 1991 under CDA Reg. No. NG-743. The first board included Vicente B. Artiaga, Candido P. Olivares, Paulino F. Moreno, Virgilio L. Abiog, Lolita Pante, Celerino I. Beriso, and Leila M. Rivero. The principal office was at the Municipal Hall of Lagonoy.",
  },
  {
    year: "2001",
    title: "Member Savers Club",
    text: "The Member Savers Club was launched to encourage thrift. Landbank of the Philippines extended a credit line that began at half a million pesos and increased in later years.",
  },
  {
    year: "2007",
    title: "A wider membership",
    text: "An amendment changed the registered name to Kooperatiba para sa Kaunlaran ng Lagonoy. Membership opened to people beyond the LGU and agencies in Lagonoy. The cooperative had moved from borrowed space at the municipal hall into its own building on F. Pamor Street, San Isidro Sur, with a consumer store beside the office.",
  },
  {
    year: "2015",
    title: "Caramoan branch",
    text: "In June 2015, KKL opened its first branch in Caramoan.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About KKL" title="From a seminar of 58 employees to a community cooperative">
        The cooperative was organized so workers in Lagonoy could pool small
        savings and assist one another. That purpose still guides the offices
        in Lagonoy and Caramoan.
      </PageHeader>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <ol className="grid gap-4">
          {timeline.map((item) => (
            <li key={item.year} className="grid gap-2 rounded-2xl bg-paper p-5 md:grid-cols-[7rem_1fr] md:gap-6">
              <p className="font-serif text-2xl text-gold">{item.year}</p>
              <div>
                <h2 className="font-serif text-2xl text-forest">{item.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-12">
          <h2 className="font-serif text-3xl text-forest">Noted at the 38th anniversary</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            The fellowship program for the 38th Founding Anniversary names these
            officers and roles.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["Jonathan F. Bacares", "Chairman, Board of Directors"],
              ["Roweno M. Alvaran", "Vice-Chairman, Board of Directors"],
              ["Nene M. del Castillo", "Board member"],
              ["Michael Ian V. Panerio", "Manager"],
            ].map(([name, role]) => (
              <li key={name} className="rounded-2xl bg-paper px-5 py-4">
                <p className="font-semibold text-forest">{name}</p>
                <p className="text-sm text-muted">{role}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
