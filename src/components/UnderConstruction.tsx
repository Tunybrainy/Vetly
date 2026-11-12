import { ArrowLeft, LayoutDashboard, PawPrint } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

type UnderConstructionProps = {
  label?: string;
  title?: string;
  description?: string;
};

export default function UnderConstruction({
  label = "WIP · In development",
  title = "Page Under Construction",
  description = "Page undergoing development, check back later, woof woof!",
}: UnderConstructionProps) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center py-8">
      <section
        aria-labelledby="under-construction-heading"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-white p-6 text-center shadow-sm sm:p-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-fixed/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-amber-200/40 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-primary-fixed/50 text-primary shadow-sm">
            <PawPrint size={36} aria-hidden="true" />
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-app px-3 py-1 font-mono text-xs text-primary">
            <span
              aria-hidden="true"
              className="size-2 animate-pulse rounded-full bg-primary"
            />
            {label}
          </p>

          <h1
            id="under-construction-heading"
            className="mb-3 font-heading text-2xl font-bold tracking-tight text-on-surface sm:text-3xl"
          >
            {title}
          </h1>

          <p className="mb-8 max-w-md text-sm leading-6 text-muted">
            {description}
          </p>

          <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            >
              <LayoutDashboard size={18} aria-hidden="true" />
              Return to Dashboard
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-app px-5 py-3 text-sm font-bold text-on-surface transition-all duration-200 hover:bg-primary-fixed/40"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Back to Previous Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
