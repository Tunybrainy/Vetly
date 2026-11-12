import Heading from "../components/Heading";

export default function PrescriptionsPage() {
  return (
    <section>
      <Heading
        title="Prescriptions"
        description="Medication plans and prescription history."
      />

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-muted">
          Prescriptions content will go here.
        </p>
      </div>
    </section>
  );
}
