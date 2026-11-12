import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  accent: "primary" | "celadon" | "amber" | "sage";
  trendIcon?: LucideIcon;
};

const accentStyles = {
  primary: {
    border: "border-primary",
    background: "bg-celadon-light",
    icon: "text-primary",
    trend: "text-primary",
  },
  celadon: {
    border: "border-celadon-deep",
    background: "bg-celadon-light",
    icon: "text-primary",
    trend: "text-primary",
  },
  amber: {
    border: "border-tertiary",
    background: "bg-amber-light",
    icon: "text-tertiary",
    trend: "text-tertiary",
  },
  sage: {
    border: "border-primary-fixed",
    background: "bg-sage-light",
    icon: "text-primary",
    trend: "text-primary",
  },
};

export default function StatCard({
  label,
  value,
  trend,
  icon: Icon,
  accent,
  trendIcon: TrendIcon,
}: StatCardProps) {
  const styles = accentStyles[accent];

  return (
    <article
      className={`flex items-start justify-between gap-4 rounded-xl border-l-[3px] ${styles.border} bg-card p-5 shadow-sm transition-shadow hover:shadow-md`}
    >
      <div className="min-w-0">
        <p className="text-sm font-medium text-muted">{label}</p>

        <p className="mt-2 font-heading text-3xl font-bold text-on-surface">
          {value}
        </p>

        <p className={`mt-3 flex items-center gap-1 text-xs font-bold ${styles.trend}`}>
          {TrendIcon && <TrendIcon size={14} aria-hidden="true" />}
          {trend}
        </p>
      </div>

      <div
        className={`flex size-12 shrink-0 items-center justify-center rounded-full ${styles.background} ${styles.icon}`}
      >
        <Icon size={22} aria-hidden="true" />
      </div>
    </article>
  );
}