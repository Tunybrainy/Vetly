import Heading from "../components/Heading";

export default function MessagesPage() {
  return (
    <section>
      <Heading
        title="Messages"
        description="Conversations with clients and the care team."
      />

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <p className="text-sm leading-6 text-muted">
          Messages content will go here.
        </p>
      </div>
    </section>
  );
}
