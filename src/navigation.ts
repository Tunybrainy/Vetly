import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  Pill,
  MessageCircle,
  ChartColumn,
  Settings,
  CircleHelp,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
};

export const workspaceNav: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Patients", href: "/patients", icon: Users },
  { label: "Schedule", href: "/schedule", icon: CalendarDays },
  { label: "Records", href: "/records", icon: FileText },
  { label: "Prescriptions", href: "/prescriptions", icon: Pill },
  { label: "Messages", href: "/messages", icon: MessageCircle },
  { label: "Analytics", href: "/analytics", icon: ChartColumn },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const generalNav: NavItem[] = [
  { label: "Support", href: "/support", icon: CircleHelp },
];

export const allNav: NavItem[] = [...workspaceNav, ...generalNav];
