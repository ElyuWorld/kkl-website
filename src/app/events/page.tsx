import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Program of the KKL 38th Founding Anniversary and 5th KKLympics fellowship night.",
};

const program = [
  {
    title: "Opening program",
    items: [
      "Invocation, Philippine National Anthem, and Coop Pledge",
      "Opening remarks — Dir. Nene M. del Castillo, board member",
      "Inspirational message — Dir. Roweno M. Alvaran, vice-chairman",
      "Awarding of certificates of appreciation by the board and manager",
      "Coop Hymn — Mr. Jesus P. Ortinero, master of ceremony",
    ],
  },
  {
    title: "Program proper",
    items: [
      "Video presentation of KKLympics highlights",
      "Dinner and fellowship",
      "Awarding ceremony — Kgd. Marlon Prestosa, emcee",
      "Closing remarks — Mr. Michael Ian Panerio, KKL manager",
    ],
  },
];

const games = [
  "Scrabble",
  "Chess",
  "Dama",
  "Sungka",
  "Table tennis",
  "Games of the General",
  "Badminton",
  "Sangkayaw",
  "Kadang-kabdang",
  "Sack race",
  "Billiards",
  "Pickleball",
  "Volleyball",
  "Basketball",
];

export default function EventsPage() {
  return (
    <>
      <PageHeader eyebrow="Events" title="38th Founding Anniversary and KKLympics">
        The fellowship night was held on August 29, 2026, at 7:00 p.m. at the
        KKL Function Hall. Dir. Roweno M. Alvaran, vice-chairman of the board,
        was guest of honor.
      </PageHeader>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <Image
          src="/images/program.png"
          alt="Printed program of the 38th Founding Anniversary and 5th KKLympics"
          width={6250}
          height={4419}
          className="h-auto w-full rounded-2xl bg-paper"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {program.map((block) => (
            <section key={block.title} className="rounded-2xl bg-paper p-6">
              <h2 className="font-serif text-2xl text-forest">{block.title}</h2>
              <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-4 rounded-2xl bg-paper p-6">
          <h2 className="font-serif text-2xl text-forest">KKLympics games</h2>
          <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2 md:grid-cols-3">
            {games.map((game) => (
              <li key={game}>{game}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Special awards covered Best in Yell, Most Number of Attendance,
            Hoisting of Banner, and the overall tally. Volleyball and basketball
            also recognized an MVP.
          </p>
        </section>
      </div>
    </>
  );
}
