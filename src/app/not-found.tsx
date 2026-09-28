import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="font-serif text-4xl text-forest">Page not found</h1>
      <p className="mt-3 text-muted">That address is not part of this site.</p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-semibold text-forest underline decoration-gold underline-offset-4"
      >
        Back to home
      </Link>
    </div>
  );
}
