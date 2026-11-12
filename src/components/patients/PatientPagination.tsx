import { ChevronLeft, ChevronRight } from "lucide-react";

type PatientPaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export default function PatientPagination({
  page,
  pageCount,
  onPageChange,
}: PatientPaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Patient pagination"
      className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3 sm:flex-row sm:px-6"
    >
      <p className="text-sm font-medium text-muted">
        Page {page} of {pageCount}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded-xl border border-border p-2 text-muted transition-colors hover:bg-app hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            aria-label={`Page ${pageNumber}`}
            aria-current={pageNumber === page ? "page" : undefined}
            onClick={() => onPageChange(pageNumber)}
            className={`size-8 rounded-xl text-sm font-bold transition-colors ${
              pageNumber === page
                ? "bg-primary text-white"
                : "text-muted hover:bg-app hover:text-primary"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          type="button"
          aria-label="Next page"
          disabled={page === pageCount}
          onClick={() => onPageChange(page + 1)}
          className="rounded-xl border border-border p-2 text-muted transition-colors hover:bg-app hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
