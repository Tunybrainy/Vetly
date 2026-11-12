import Heading from "../components/Heading";

export default function SettingsPage() {
  return (
    <section>
      <Heading
        title="Settings"
        description="Practice details, team and preferences."
      />

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-muted">
          Settings content will go here.
        </p>
      </div>
    </section>
  );
}
