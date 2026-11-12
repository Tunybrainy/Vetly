import { Plus } from "lucide-react";

import type { MedicalHistoryEntry as Entry } from "../../data/patients";
import MedicalHistoryEntry from "./MedicalHistoryEntry";

type MedicalHistoryTimelineProps = {
  entries: Entry[];
};

export default function MedicalHistoryTimeline({
  entries,
}: MedicalHistoryTimelineProps) {
  return (
    <section
      aria-labelledby="medical-history-heading"
      className="rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-6"
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            id="medical-history-heading"
            className="font-heading text-xl font-bold text-on-surface sm:text-2xl"
          >
            Medical History
          </h2>
          <p className="mt-1 text-sm text-muted">
            Chronological log of all clinical events and interventions.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95"
        >
          <Plus size={18} aria-hidden="true" />
          Add Record
        </button>
      </div>

      {entries.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
          No clinical events recorded yet.
        </p>
      ) : (
        <ol className="space-y-4">
          {entries.map((entry, index) => (
            <MedicalHistoryEntry
              key={entry.id}
              entry={entry}
              isLast={index === entries.length - 1}
            />
          ))}
        </ol>
      )}

      {entries.length > 0 && (
        <div className="mt-6 border-t border-border pt-4 text-center">
          <button
            type="button"
            className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Load earlier records (2022 and prior)
          </button>
        </div>
      )}
    </section>
  );
}
