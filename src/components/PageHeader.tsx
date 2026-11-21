export function PageHeader({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <header className="bg-forest text-sand">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sand/80">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {action ? <div className="mt-6">{action}</div> : null}
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sand/90">
          {children}
        </p>
      </div>
    </header>
  );
}
