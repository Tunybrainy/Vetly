import {
  AlertCircle,
  Download,
  Eye,
  FlaskConical,
  MoreVertical,
  Pencil,
  Paperclip,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

import type { HistoryType, MedicalHistoryEntry as Entry } from "../../data/patients";

const eventStyles: Record<
  HistoryType,
  { dot: string; icon: LucideIcon; stripe: string; text: string }
> = {
  Diagnosis: {
    dot: "bg-amber-100 text-amber-700",
    icon: AlertCircle,
    stripe: "bg-amber-400",
    text: "text-amber-700",
  },
  Surgery: {
    dot: "bg-orange-100 text-orange-700",
    icon: Stethoscope,
    stripe: "bg-orange-400",
    text: "text-orange-700",
  },
  Vaccination: {
    dot: "bg-primary-fixed text-primary",
    icon: Syringe,
    stripe: "bg-primary",
    text: "text-primary",
  },
  Laboratory: {
    dot: "bg-teal-50 text-teal-700",
    icon: FlaskConical,
    stripe: "bg-teal-400",
    text: "text-teal-700",
  },
};

const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

type MedicalHistoryEntryProps = {
  entry: Entry;
  isLast: boolean;
};

export default function MedicalHistoryEntry({
  entry,
  isLast,
}: MedicalHistoryEntryProps) {
  const style = eventStyles[entry.type];
  const Icon = style.icon;

  return (
    <li className="relative pl-12">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[18px] top-9 bottom-[-1rem] w-px bg-border"
        />
      )}

      <span
        aria-hidden="true"
        className={`absolute left-1 top-2 flex size-7 items-center justify-center rounded-full border-4 border-white ${style.dot}`}
      >
        <Icon size={12} />
      </span>

      <article className="relative overflow-hidden rounded-xl border border-border bg-app/60 p-4 transition-colors hover:bg-app">
        <span
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 w-1 ${style.stripe}`}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${style.text}`}
              >
                {entry.type}
              </span>
              <time
                dateTime={entry.date}
                className="font-mono text-xs text-muted"
              >
                {formatDate(entry.date)}
              </time>
            </div>

            <h3 className="font-heading text-base font-bold text-on-surface">
              {entry.title}
            </h3>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted">
              {entry.summary}
            </p>

            {entry.attachments && entry.attachments.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {entry.attachments.map((attachment) => (
                  <li
                    key={attachment}
                    className="rounded-full bg-app px-2.5 py-1 text-[10px] font-bold uppercase tracking-tight text-muted"
                  >
                    {attachment}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1 self-end sm:self-auto">
            {entry.attachments && entry.attachments.length > 0 && (
              <button
                type="button"
                aria-label={`Download attachments for ${entry.title}`}
                className="rounded-lg p-1.5 text-muted transition-colors hover:bg-white hover:text-primary"
              >
                <Download size={16} aria-hidden="true" />
              </button>
            )}

            <button
              type="button"
              aria-label={`Edit record: ${entry.title}`}
              className="rounded-lg p-1.5 text-muted transition-colors hover:bg-white hover:text-primary"
            >
              <Pencil size={16} aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label={`Attach a file to ${entry.title}`}
              className="rounded-lg p-1.5 text-muted transition-colors hover:bg-white hover:text-primary"
            >
              <Paperclip size={16} aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label={`View full record: ${entry.title}`}
              className="rounded-lg p-1.5 text-muted transition-colors hover:bg-white hover:text-primary"
            >
              <Eye size={16} aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label={`More actions for ${entry.title}`}
              className="rounded-lg p-1.5 text-muted transition-colors hover:bg-white hover:text-primary"
            >
              <MoreVertical size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}
