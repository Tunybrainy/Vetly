import {
  FileText,
  MessageCircle,
  CalendarClock,
  AlertTriangle,
  Package,
  Smartphone,
  ArrowRight,
} from "lucide-react";

type Activity = {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: typeof FileText;
  iconStyle: string;
};

const activities: Activity[] = [
  {
    id: 1,
    title: "New lab report uploaded",
    description: "Cooper (Beagle) - CBC Panel",
    time: "12 mins ago",
    icon: FileText,
    iconStyle: "bg-celadon-light text-primary",
  },
  {
    id: 2,
    title: "New message from Ms. Chen",
    description: '"Is the post-op swelling normal?"',
    time: "45 mins ago",
    icon: MessageCircle,
    iconStyle: "bg-sage-light text-celadon-deep",
  },
  {
    id: 3,
    title: "Appointment rescheduled",
    description: "Max (Husky) moved to tomorrow",
    time: "2 hours ago",
    icon: CalendarClock,
    iconStyle: "bg-amber-light text-tertiary",
  },
];

export function RecentActivity() {
  return (
    <section
      aria-labelledby="recent-activity-heading"
      className="rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <h2
        id="recent-activity-heading"
        className="mb-6 font-heading text-lg font-bold text-on-surface"
      >
        Recent Activity
      </h2>

      <ol className="relative space-y-6">
        <span
          aria-hidden="true"
          className="absolute bottom-5 left-4 top-5 w-px bg-border"
        />

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <li key={activity.id} className="relative flex gap-3">
              <span
                className={`z-10 flex size-8 shrink-0 items-center justify-center rounded-full ${activity.iconStyle}`}
              >
                <Icon size={16} aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="text-sm font-bold text-on-surface">
                  {activity.title}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {activity.description}
                </p>

                <time className="mt-2 block text-[10px] font-medium uppercase tracking-wide text-muted">
                  {activity.time}
                </time>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

type InventoryItem = {
  id: number;
  name: string;
  stock: number;
  action: string;
  critical?: boolean;
};

const inventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: "Amoxicillin 250mg",
    stock: 12,
    action: "Reorder",
    critical: true,
  },
  {
    id: 2,
    name: "Rabies Vac Pack (10)",
    stock: 3,
    action: "Order",
  },
  {
    id: 3,
    name: "Pet Bandages (Blue)",
    stock: 45,
    action: "Order",
  },
];

export function InventoryAlerts() {
  return (
    <section
      aria-labelledby="inventory-heading"
      className="rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between gap-2">
        <h2
          id="inventory-heading"
          className="font-heading text-lg font-bold text-on-surface"
        >
          Inventory Alerts
        </h2>

        <span className="rounded-full bg-coral-light px-2 py-1 text-[10px] font-bold text-coral">
          4 CRITICAL
        </span>
      </div>

      <ul className="space-y-3">
        {inventoryItems.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between gap-2 rounded-lg border p-3 ${
              item.critical
                ? "border-coral/20 bg-coral-light"
                : "border-border"
            }`}
          >
            <div className="flex min-w-0 items-center gap-2">
              {item.critical ? (
                <AlertTriangle
                  size={19}
                  className="shrink-0 text-coral"
                  aria-hidden="true"
                />
              ) : (
                <Package
                  size={19}
                  className="shrink-0 text-muted"
                  aria-hidden="true"
                />
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-on-surface">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Current Stock: {item.stock} units
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label={`${item.action} ${item.name}`}
              className={`shrink-0 rounded px-2 py-1 text-[11px] font-bold uppercase transition hover:bg-white/60 ${
                item.critical ? "text-coral" : "text-primary"
              }`}
            >
              {item.action}
            </button>
          </li>
        ))}
      </ul>

      <a
        href="/inventory"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-primary px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
      >
        Inventory Dashboard
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}

export function ProTip() {
  return (
    <article className="relative overflow-hidden rounded-xl bg-primary p-5 text-white shadow-md">
      <div className="relative z-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-fixed">
          Pro Tip
        </p>

        <h2 className="font-heading text-xl font-bold leading-tight">
          Sync your mobile device
        </h2>

        <p className="mb-5 mt-2 text-sm leading-6 text-primary-fixed/80">
          Access medical records and update prescriptions directly from your
          phone during house calls.
        </p>

        <a
          href="/mobile-app"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-sm transition hover:bg-surface"
        >
          Get App
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>

      <Smartphone
        aria-hidden="true"
        className="absolute -bottom-6 -right-5 size-32 rotate-12 text-white/10"
      />
    </article>
  );
}