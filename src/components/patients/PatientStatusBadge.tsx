import type { PatientStatus } from "../../data/patients";

const statusStyles: Record<PatientStatus, string> = {
  Wellness: "bg-primary-fixed/60 text-primary",
  Surgery: "bg-orange-100 text-orange-800",
  Checkup: "bg-amber-100 text-amber-800",
  Emergency: "bg-rose-100 text-rose-700",
};

type PatientStatusBadgeProps = {
  status: PatientStatus;
};

export default function PatientStatusBadge({
  status,
}: PatientStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
