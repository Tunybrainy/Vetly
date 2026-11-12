import { MoreVertical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import type { Patient, PatientStatus } from "../../data/patients";
import PatientStatusBadge from "./PatientStatusBadge";

const stripeStyles: Record<PatientStatus, string> = {
  Wellness: "bg-primary",
  Surgery: "bg-orange-400",
  Checkup: "bg-amber-400",
  Emergency: "bg-rose-600",
};

type PatientTableProps = {
  patients: Patient[];
};

export default function PatientTable({ patients }: PatientTableProps) {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="patient-table-heading"
      className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
    >
      <h2 id="patient-table-heading" className="sr-only">
        Patient list
      </h2>

      <div className="overflow-x-auto">
        <table className="relative w-full min-w-[38rem] border-collapse text-left">
          <caption className="sr-only">
            Active patients with species, age, owner, last visit and status
          </caption>

          <thead>
            <tr className="border-b border-border bg-app">
              <th
                scope="col"
                className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted sm:px-6"
              >
                Patient Name
              </th>
              <th
                scope="col"
                className="hidden px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted sm:px-6 md:table-cell"
              >
                Species / Breed
              </th>
              <th
                scope="col"
                className="hidden px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted sm:px-6 lg:table-cell"
              >
                Age
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted sm:px-6"
              >
                Owner
              </th>
              <th
                scope="col"
                className="hidden px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted sm:px-6 lg:table-cell"
              >
                Last Visit
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted sm:px-6"
              >
                Status
              </th>
              <th scope="col" className="px-2 py-3 sm:px-4">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {patients.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-10 text-center text-sm text-muted sm:px-6"
                >
                  No patients match the selected filters.
                </td>
              </tr>
            ) : (
              patients.map((patient) => (
                <tr
                  key={patient.id}
                  onClick={() => navigate(`/patients/${patient.id}`)}
                  className="group relative cursor-pointer transition-colors hover:bg-app"
                >
                  <td className="relative px-4 py-3 sm:px-6">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-y-0 left-0 w-1 ${stripeStyles[patient.status]}`}
                    />

                    <div className="flex items-center gap-3">
                      <img
                        src={patient.image}
                        alt={`Portrait of ${patient.name}`}
                        width={48}
                        height={48}
                        loading="lazy"
                        className="size-10 shrink-0 rounded-xl object-cover sm:size-12"
                      />

                      <div className="min-w-0">
                        <Link
                          to={`/patients/${patient.id}`}
                          onClick={(event) => event.stopPropagation()}
                          className="block truncate font-heading text-sm font-semibold text-on-surface transition-colors hover:text-primary sm:text-base"
                        >
                          {patient.name}
                        </Link>
                        <p className="text-xs text-muted">
                          ID: #{patient.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="hidden px-4 py-3 text-sm text-muted sm:px-6 md:table-cell">
                    {patient.species} / {patient.breed}
                  </td>

                  <td className="hidden px-4 py-3 text-sm text-muted sm:px-6 lg:table-cell">
                    {patient.age}
                  </td>

                  <td className="px-4 py-3 text-sm text-muted sm:px-6">
                    {patient.owner}
                  </td>

                  <td className="hidden px-4 py-3 text-sm text-muted sm:px-6 lg:table-cell">
                    {patient.lastVisit}
                  </td>

                  <td className="px-4 py-3 sm:px-6">
                    <PatientStatusBadge status={patient.status} />
                  </td>

                  <td className="px-2 py-3 text-right sm:px-4">
                    <button
                      type="button"
                      aria-label={`More actions for ${patient.name}`}
                      onClick={(event) => event.stopPropagation()}
                      className="rounded-lg p-2 text-muted transition-colors hover:bg-white hover:text-primary"
                    >
                      <MoreVertical size={18} aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
