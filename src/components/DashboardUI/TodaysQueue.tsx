import { MoreHorizontal } from "lucide-react";

type Appointment = {
  id: number;
  pet: string;
  breed: string;
  age: string;
  reason: string;
  owner: string;
  time: string;
  status: "Check-in" | "Emergency" | "In Lobby";
  image: string;
};

const appointments: Appointment[] = [
  {
    id: 1,
    pet: "Cooper",
    breed: "Beagle",
    age: "3yo",
    reason: "Wellness Check-up",
    owner: "Mr. Jenkins",
    time: "09:00 AM",
    status: "Check-in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW9G9g9TZv5N8dujknAvEhWMsLRQE2QNA5T6w3Q0lCgw1Waz4A5IiaV-HHtB_crHGspu3IQ3gSlPPt8z7tBfRvhFxBUCqScM9IaZuUMja5gaHMKMbZfoZRbXSnOt-zfRGzKmHwPq7qfrYvwU3lBm58GF3MoqrIvh9LcpR2zHFzfSx3b-AkGjNyHJHkg8lrgXKkvGaocsTNBjU2KQKbAv0Ydu6mZ1WVJsTHaA8UF2OJs7bY8hRYISVLjwZd3q52Aflsgt0LP2tyJ5o",
  },
  {
    id: 2,
    pet: "Luna",
    breed: "Siamese",
    age: "1yo",
    reason: "Post-Surgical Follow-up",
    owner: "Ms. Chen",
    time: "10:15 AM",
    status: "Emergency",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP3I8vOVzTGIm5NJjAl6XPag134AI5tuLGfTE1-MhHur6IBCWE0uKCKTNPDjkj_yLTeCII_jQZCXgpjnIsxbWAI4YpTCa88iiLDoqyoHg4IdFt4F_9MhOfGCJiJ6DTQM_ToLR8HXw_6aFgGVYNP9k0j8JE2g36YxEDVoSzf9ewsP4zxyzDtx-3LE5TqQXPYnUynxBM8c9aVKFvfCBdAm6p2ip7vyXPvq3LaCsBn4UJiD2r8WAsObbNeyFzERkWkZVeoO3favCW5hE",
  },
  {
    id: 3,
    pet: "Felix",
    breed: "Tabby",
    age: "5yo",
    reason: "Vaccinations",
    owner: "Dr. Miller (Referral)",
    time: "11:30 AM",
    status: "In Lobby",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM_y4AE7Kp7yyhSWJChy_uyytw-32hc9KAWs6k0f2LKB1PAKkvpqaZSooX97gcale-p3MdqpYcVMK5L2McmBgC90vrn4HdCeDQ4y4xEM4FCbg1g9oIgBz49BLRBZkrfoLNTtnxpxf-YWQxxKgwH_X9XN9irfOmy78U9yolLEoIu0qvAcS8QqwriaMJSCZEtDMjak3f14Y60iAZkazmkdHjrVo-TRyhJNi07PNCfd6OE6al2ZqD_iUnDs_77S9dZQ49Su40cZ8MVK0",
  },
];

const statusStyles: Record<Appointment["status"], string> = {
  "Check-in": "bg-sage-light text-celadon-deep",
  Emergency: "bg-coral-light text-coral",
  "In Lobby": "bg-amber-light text-tertiary",
};

export default function TodaysQueue() {
  return (
    <section
      aria-labelledby="todays-queue-heading"
      className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-border p-5">
        <h2
          id="todays-queue-heading"
          className="font-heading text-lg font-bold text-on-surface"
        >
          Today's Queue
        </h2>

        <a
          href="/schedule"
          className="rounded-lg text-sm font-bold text-primary hover:underline"
        >
          View All
        </a>
      </div>

      <ul className="divide-y divide-border">
        {appointments.map((appointment) => (
          <li
            key={appointment.id}
            className="relative flex flex-wrap items-center gap-3 p-4 transition-colors hover:bg-app sm:flex-nowrap sm:gap-4"
          >
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-0 top-0 w-[3px] ${
                appointment.status === "Emergency"
                  ? "bg-coral"
                  : appointment.status === "In Lobby"
                    ? "bg-tertiary"
                    : "bg-primary"
              }`}
            />

            <img
              src={appointment.image}
              alt={`${appointment.pet}, a ${appointment.breed}`}
              loading="lazy"
              className="size-12 shrink-0 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-on-surface">
                {appointment.pet}
                <span className="ml-1 font-normal text-muted">
                  / {appointment.age} {appointment.breed}
                </span>
              </p>

              <p className="mt-1 text-xs text-muted sm:text-sm">
                {appointment.reason} · {appointment.owner}
              </p>
            </div>

            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
              <div className="text-left sm:text-right">
                <p className="text-sm font-bold text-on-surface">
                  {appointment.time}
                </p>

                <span
                  className={`mt-1 inline-block rounded-full px-2 py-1 text-[10px] font-bold uppercase ${statusStyles[appointment.status]}`}
                >
                  {appointment.status}
                </span>
              </div>

              <button
                type="button"
                aria-label={`More options for ${appointment.pet}'s appointment`}
                className="rounded-full p-2 text-muted hover:bg-surface hover:text-primary"
              >
                <MoreHorizontal size={19} aria-hidden="true" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}