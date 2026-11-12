import { useCallback, useState } from "react";

import { Menu, Bell, Search } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";

import Aside from "./components/Aside";
import { allNav } from "./navigation";
import "./index.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((previous) => !previous);
  };

  const currentPage = allNav.find((item) =>
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  return (
    <div className="min-h-screen bg-app">
      <Aside isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* Main application */}
      <div className="min-h-screen md:ml-60">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-white/90 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Open navigation menu"
              aria-expanded={isSidebarOpen}
              aria-controls="primary-sidebar"
              className="rounded-lg p-2 text-on-surface transition hover:bg-app focus-visible:outline-primary md:hidden"
            >
              <Menu size={22} aria-hidden="true" />
            </button>

            

          </div>
          <div className="flex min-w-0 flex-1 items-center gap-3">
  

              <label className="flex w-full max-w-md items-center gap-3 rounded-full border border-border bg-app px-4 py-2 focus-within:ring-2 focus-within:ring-primary/20">
                <Search size={18} className="shrink-0 text-muted" aria-hidden="true" />

                <span className="sr-only">Search patients, records, or inventory</span>

                <input
                  type="search"
                  placeholder="Search patients, records, or inventory..."
                  className="w-full min-w-0 bg-transparent text-sm text-on-surface outline-none placeholder:text-muted"
                />
              </label>
            </div>

            <div className="flex shrink-0 items-center gap-3 sm:gap-5">
              <button
                type="button"
                aria-label="Notifications, 1 unread"
                className="relative rounded-full p-2 text-muted transition hover:bg-app hover:text-primary"
              >
                <Bell size={21} aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="absolute right-2 top-2 size-2 rounded-full bg-coral"
                />
              </button>

              <div className="flex items-center gap-3 border-l border-border pl-3 sm:pl-5">
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-bold text-on-surface">Dr. Nwosu</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted">
                    Senior Veterinarian
                  </p>
                </div>

                <div
                  role="img"
                  aria-label="Dr. Nwosu's profile"
                  className="flex size-10 items-center justify-center rounded-full border-2 border-primary bg-celadon-light font-heading font-bold text-primary"
                >
                  DN
                </div>
              </div>
            </div>

        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
