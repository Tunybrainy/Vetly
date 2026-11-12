import patientData from "./patients.json";

export type PatientStatus = "Wellness" | "Surgery" | "Checkup" | "Emergency";

export type HistoryType = "Diagnosis" | "Surgery" | "Vaccination" | "Laboratory";

export type MedicalHistoryEntry = {
  id: string;
  type: HistoryType;
  /** ISO date, e.g. 2023-11-12 */
  date: string;
  title: string;
  summary: string;
  attachments?: string[];
};

export type NextVisit = {
  reason: string;
  /** ISO date-time, e.g. 2024-05-15T10:30:00 */
  date: string;
};

export type Patient = {
  id: string;
  name: string;
  species: "Dog" | "Cat" | "Exotic";
  breed: string;
  age: string;
  owner: string;
  lastVisit: string;
  status: PatientStatus;
  critical: boolean;
  image: string;
  allergies: string[];
  nextVisit: NextVisit;
  medicalHistory: MedicalHistoryEntry[];
};

export const patients = patientData.patients as Patient[];

export const getPatientById = (id: string | undefined) =>
  patients.find((patient) => patient.id === id);
