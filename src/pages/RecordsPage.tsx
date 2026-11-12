import Heading from "../components/Heading";

export default function RecordsPage() {
  return (
    <section>
      <Heading
        title="Records"
        description="Medical records, notes and treatment history."
      />

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-muted">
          Records content will go here.
        </p>
      </div>
    </section>
  );
}
