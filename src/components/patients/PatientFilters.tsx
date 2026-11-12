import { Filter } from "lucide-react";

export const patientFilters = [
  "All Species",
  "Dogs",
  "Cats",
  "Exotics",
  "Critical Care",
] as const;

export type PatientFilter = (typeof patientFilters)[number];

type PatientFiltersProps = {
  value: PatientFilter;
  onChange: (filter: PatientFilter) => void;
  shownCount: number;
  totalCount: number;
};

export default function PatientFilters({
  value,
  onChange,
  shownCount,
  totalCount,
}: PatientFiltersProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
      <span className="flex items-center gap-2 pr-2 text-[10px] font-bold uppercase tracking-widest text-muted">
        <Filter size={14} aria-hidden="true" />
        Filter By
      </span>

      <div
        role="group"
        aria-label="Filter patients by species"
        className="flex flex-wrap gap-2"
      >
        {patientFilters.map((filter) => {
          const isActive = filter === value;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(filter)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                isActive
                  ? "bg-primary-fixed/60 text-primary"
                  : "bg-app text-muted hover:bg-primary-fixed/30 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p
        aria-live="polite"
        className="w-full text-sm text-muted sm:ml-auto sm:w-auto"
      >
        Showing {shownCount} of {totalCount} patients
      </p>
    </div>
  );
}
