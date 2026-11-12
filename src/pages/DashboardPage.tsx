import { useState } from "react";

import {
  CalendarDays,
  Users,
  ClipboardList,
  TrendingUp,
  UserPlus,
  PlusCircle,
  Plus,
} from "lucide-react";

import StatCard from "../components/DashboardUI/StatCard";
import AppointmentTrend from "../components/DashboardUI/AppointmentTrend";
import TodaysQueue from "../components/DashboardUI/TodaysQueue";

import {
  RecentActivity,
  InventoryAlerts,
  ProTip,
} from "../components/DashboardUI/DashboardWidgets";

type DashboardPageProps = {
  onOpenSidebar: () => void;
};

export default function DashboardPage({}: DashboardPageProps) {
    const [period, setPeriod] = useState("7");


  return (
    <>
     
      <main className="min-h-screen px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {/* Welcome section */}
        <section
          aria-labelledby="dashboard-heading"
          className="mb-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-end"
        >
          <div>
            <h1
              id="dashboard-heading"
              className="font-heading text-2xl font-bold tracking-tight text-on-surface sm:text-3xl"
            >
              Good morning, Dr. Nwosu 👋
            </h1>

            <p className="mt-2 text-sm leading-6 text-muted">
              You have 8 patients waiting and 3 urgent laboratory reviews.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/patients/new"
              className="inline-flex items-center gap-2 rounded-lg bg-celadon-light px-4 py-3 text-sm font-bold text-celadon-deep transition hover:bg-celadon-mid active:scale-95"
            >
              <UserPlus size={18} aria-hidden="true" />
              Add Patient
            </a>

            <a
              href="/schedule/new"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-celadon-deep active:scale-95"
            >
              <PlusCircle size={18} aria-hidden="true" />
              New Appointment
            </a>
          </div>
        </section>

        {/* Statistics */}
        <section aria-label="Practice statistics" className="mb-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="Today's Appointments"
              value="24"
              trend="+12% from avg"
              icon={CalendarDays}
              trendIcon={TrendingUp}
              accent="primary"
            />

            <StatCard
              label="Active Patients"
              value="1,240"
              trend="Stable growth"
              icon={Users}
              accent="celadon"
            />

            <StatCard
              label="Pending Rx"
              value="12"
              trend="4 Urgent"
              icon={ClipboardList}
              accent="amber"
            />

            <StatCard
              label="Revenue MTD"
              value="$48.2k"
              trend="On track"
              icon={TrendingUp}
              accent="sage"
            />
          </div>
        </section>

        {/* Dashboard content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main column */}
          <div className="space-y-6 lg:col-span-8">
            <AppointmentTrend
              period={period}
              onPeriodChange={setPeriod}
            />

            <TodaysQueue />
          </div>

          {/* Sidebar widgets */}
          <aside
            aria-label="Dashboard updates and alerts"
            className="space-y-6 lg:col-span-4"
          >
            <RecentActivity />
            <InventoryAlerts />
            <ProTip />
          </aside>
        </div>
      </main>

      {/* Floating action */}
      <a
        href="/schedule/new"
        aria-label="Create a new appointment"
        className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-celadon-deep text-white shadow-xl transition hover:scale-105 hover:bg-primary active:scale-95 sm:bottom-7 sm:right-7"
      >
        <Plus size={27} aria-hidden="true" />
      </a>
    </>
  );
}