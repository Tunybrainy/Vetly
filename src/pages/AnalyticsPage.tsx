import Heading from "../components/Heading";

export default function AnalyticsPage() {
  return (
    <section>
      <Heading
        title="Analytics"
        description="Practice performance and trends."
      />

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-muted">
          Analytics content will go here.
        </p>
      </div>
    </section>
  );
}
