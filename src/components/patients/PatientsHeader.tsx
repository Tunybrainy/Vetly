import { Plus } from "lucide-react";

export default function PatientsHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1
          id="patients-heading"
          className="font-heading text-2xl font-bold tracking-tight text-on-surface sm:text-3xl"
        >
          Patient Management
        </h1>
        <p className="mt-1 text-sm text-muted">
          Manage active patient profiles and clinical history.
        </p>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:brightness-110 active:scale-95 sm:w-auto"
      >
        <Plus size={18} aria-hidden="true" />
        Add Patient
      </button>
    </div>
  );
}
