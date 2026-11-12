import Heading from "../components/Heading";

export default function SupportPage() {
  return (
    <section>
      <Heading
        title="Support"
        description="Get help with VetFlow."
      />

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-muted">
          Support content will go here.
        </p>
      </div>
    </section>
  );
}
