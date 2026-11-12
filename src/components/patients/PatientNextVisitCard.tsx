import type { NextVisit } from "../../data/patients";

type PatientNextVisitCardProps = {
  nextVisit: NextVisit;
};

const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" });
const dayFormatter = new Intl.DateTimeFormat("en-US", { day: "2-digit" });
const labelFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

export default function PatientNextVisitCard({
  nextVisit,
}: PatientNextVisitCardProps) {
  const date = new Date(nextVisit.date);

  return (
    <section
      aria-labelledby="next-visit-heading"
      className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:gap-6"
    >
      <div className="min-w-0 flex-1">
        <h2
          id="next-visit-heading"
          className="font-heading text-base font-bold text-on-surface"
        >
          Next Visit
        </h2>
        <p className="mt-1 text-sm text-muted">{nextVisit.reason}</p>

        <p className="mt-3 font-mono text-sm font-bold text-primary">
          <time dateTime={nextVisit.date}>{labelFormatter.format(date)}</time>
        </p>
      </div>

      <div
        aria-hidden="true"
        className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-app"
      >
        <span className="text-[10px] font-bold uppercase text-rose-600">
          {monthFormatter.format(date)}
        </span>
        <span className="font-heading text-2xl leading-none text-on-surface">
          {dayFormatter.format(date)}
        </span>
      </div>
    </section>
  );
}
