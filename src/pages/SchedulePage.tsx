import Heading from "../components/Heading";

export default function SchedulePage() {
  return (
    <section>
      <Heading
        title="Schedule"
        description="Appointments and the day's clinic schedule."
      />

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-muted">
          Schedule content will go here.
        </p>
      </div>
    </section>
  );
}
