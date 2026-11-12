const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type AppointmentTrendProps = {
  period: string;
  onPeriodChange: (period: string) => void;
};

export default function AppointmentTrend({
  period,
  onPeriodChange,
}: AppointmentTrendProps) {
  return (
    <section
      aria-labelledby="appointment-trend-heading"
      className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2
            id="appointment-trend-heading"
            className="font-heading text-lg font-bold text-on-surface"
          >
            Weekly Appointment Trend
          </h2>
          <p className="mt-1 text-sm text-muted">
            Performance monitoring for the current week
          </p>
        </div>

        <label>
          <span className="sr-only">Appointment trend period</span>
          <select
            value={period}
            onChange={(event) => onPeriodChange(event.target.value)}
            className="rounded-lg border border-border bg-app px-3 py-2 text-sm text-on-surface outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
          </select>
        </label>
      </div>

      <div className="w-full">
        <svg
          viewBox="0 0 800 240"
          preserveAspectRatio="none"
          role="img"
          aria-labelledby="trend-chart-title trend-chart-description"
          className="h-52 w-full sm:h-64"
        >
          <title id="trend-chart-title">Weekly appointment trend</title>
          <desc id="trend-chart-description">
            A sample line chart showing appointment activity across seven
            days, with higher activity toward the end of the week.
          </desc>

          <defs>
            <linearGradient id="appointment-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#006a60" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#006a60" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[40, 90, 140, 190].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="800"
              y2={y}
              stroke="#e5ebe7"
              strokeDasharray="5 5"
            />
          ))}

          <path
            d="M0,150 Q100,80 200,120 T400,60 T600,100 T800,40 V210 H0 Z"
            fill="url(#appointment-gradient)"
          />

          <path
            d="M0,150 Q100,80 200,120 T400,60 T600,100 T800,40"
            fill="none"
            stroke="#006a60"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div
          aria-hidden="true"
          className="mt-2 flex justify-between px-1 text-xs font-semibold uppercase text-muted"
        >
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>
    </section>
  );
}