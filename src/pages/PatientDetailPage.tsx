import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import MedicalHistoryTimeline from "../components/patients/MedicalHistoryTimeline";
import PatientAllergiesCard from "../components/patients/PatientAllergiesCard";
import PatientNextVisitCard from "../components/patients/PatientNextVisitCard";
import PatientStatusBadge from "../components/patients/PatientStatusBadge";
import { getPatientById } from "../data/patients";

export default function PatientDetailPage() {
  const { patientId } = useParams();
  const patient = getPatientById(patientId);

  if (!patient) {
    return (
      <section
        aria-labelledby="patient-not-found-heading"
        className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm"
      >
        <h1
          id="patient-not-found-heading"
          className="font-heading text-xl font-bold text-on-surface"
        >
          Patient not found
        </h1>
        <p className="mt-2 text-sm text-muted">
          We couldn't find a patient with the ID "{patientId}".
        </p>
        <Link
          to="/patients"
          className="mt-5 inline-flex items-center gap-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Back to patients
        </Link>
      </section>
    );
  }

  return (
    <section aria-labelledby="patient-detail-heading" className="space-y-6">
      <Link
        to="/patients"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-primary"
      >
        <ChevronLeft size={16} aria-hidden="true" />
        All patients
      </Link>

      <header className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-6">
        <img
          src={patient.image}
          alt={`Portrait of ${patient.name}`}
          width={72}
          height={72}
          className="size-16 shrink-0 rounded-2xl object-cover sm:size-[72px]"
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1
              id="patient-detail-heading"
              className="font-heading text-2xl font-bold tracking-tight text-on-surface"
            >
              {patient.name}
            </h1>
            <PatientStatusBadge status={patient.status} />
          </div>

          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <span>
              {patient.species} / {patient.breed}
            </span>
            <span aria-hidden="true">•</span>
            <span>{patient.age}</span>
            <span aria-hidden="true">•</span>
            <span>Owner: {patient.owner}</span>
            <span aria-hidden="true">•</span>
            <span>ID: #{patient.id}</span>
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 xl:col-span-9">
          <MedicalHistoryTimeline entries={patient.medicalHistory} />
        </div>

        <div className="space-y-6 lg:col-span-4 xl:col-span-3">
          <PatientAllergiesCard allergies={patient.allergies} />
          <PatientNextVisitCard nextVisit={patient.nextVisit} />
        </div>
      </div>
    </section>
  );
}
