import { useEffect } from "react";

import { PawPrint, LogOut, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import { generalNav, workspaceNav } from "../navigation";

type AsideProps = {
  isOpen: boolean;
  onClose: () => void;
};

const linkClasses = (active: boolean) =>
  `
    group flex items-center gap-3
    rounded-xl px-3 py-3
    text-sm font-medium
    transition-colors duration-200
    ${
      active
        ? "bg-primary text-white shadow-sm"
        : "text-sidebar-muted hover:bg-white/10 hover:text-white"
    }
  `;

export default function Aside({ isOpen, onClose }: AsideProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      id="primary-sidebar"
      aria-label="Sidebar"
      className={`
        fixed inset-y-0 left-0 z-50
        flex w-60 flex-col
        border-r border-white/5
        bg-sidebar text-white
        transition-transform duration-300 ease-in-out
        md:visible md:translate-x-0
        ${
          isOpen
            ? "visible translate-x-0"
            : "invisible -translate-x-full"
        }
      `}
    >
      {/* Brand */}
      <div className="flex h-20 shrink-0 items-center justify-between px-6">
        <NavLink
          to="/"
          aria-label="VetFlow home"
          className="flex items-center gap-3 rounded-lg"
          onClick={onClose}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-white">
            <PawPrint size={21} aria-hidden="true" />
          </span>

          <span className="font-heading text-xl font-bold tracking-tight">
            Vetly
          </span>
        </NavLink>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="rounded-lg p-2 text-sidebar-muted transition hover:bg-white/10 hover:text-white md:hidden"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Main navigation */}
      <nav
        aria-label="Main navigation"
        className="no-scrollbar flex-1 overflow-y-auto px-4 py-5"
      >
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-sidebar-muted">
          Workspace
        </p>

        <ul className="space-y-1">
          {workspaceNav.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  onClick={onClose}
                  className={({ isActive }) => linkClasses(isActive)}
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="shrink-0"
                  />

                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom navigation */}
      <div className="shrink-0 border-t border-white/10 px-4 py-5">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-sidebar-muted">
          General
        </p>

        <ul className="space-y-1">
          {generalNav.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={onClose}
                  className={({ isActive }) => linkClasses(isActive)}
                >
                  <Icon size={19} aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}

          <li>
            <NavLink
              to="/logout"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-sidebar-muted transition-colors hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut size={19} aria-hidden="true" />
              <span>Sign Out</span>
            </NavLink>
          </li>
        </ul>

        <div className="mt-6 rounded-xl bg-white/5 p-3">
          <p className="text-xs font-medium text-white">
            Vetly Dashboard
          </p>
          <p className="mt-1 text-xs text-sidebar-muted">
            Veterinary management system
          </p>
        </div>
   
      </div>
    </aside>
  );
}
