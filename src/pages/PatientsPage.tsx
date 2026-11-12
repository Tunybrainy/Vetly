import { useMemo, useState } from "react";

import PatientFilters, {
  type PatientFilter,
} from "../components/patients/PatientFilters";
import PatientPagination from "../components/patients/PatientPagination";
import PatientTable from "../components/patients/PatientTable";
import PatientsHeader from "../components/patients/PatientsHeader";
import { patients } from "../data/patients";

const PAGE_SIZE = 5;

const matchesFilter = (filter: PatientFilter, species: string, critical: boolean) => {
  switch (filter) {
    case "Dogs":
      return species === "Dog";
    case "Cats":
      return species === "Cat";
    case "Exotics":
      return species === "Exotic";
    case "Critical Care":
      return critical;
    default:
      return true;
  }
};

export default function PatientsPage() {
  const [filter, setFilter] = useState<PatientFilter>("All Species");
  const [page, setPage] = useState(1);

  const filteredPatients = useMemo(
    () =>
      patients.filter((patient) =>
        matchesFilter(filter, patient.species, patient.critical),
      ),
    [filter],
  );

  const pageCount = Math.max(1, Math.ceil(filteredPatients.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visiblePatients = filteredPatients.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleFilterChange = (nextFilter: PatientFilter) => {
    setFilter(nextFilter);
    setPage(1);
  };

  return (
    <section aria-labelledby="patients-heading">
      <PatientsHeader />

      <PatientFilters
        value={filter}
        onChange={handleFilterChange}
        shownCount={filteredPatients.length}
        totalCount={patients.length}
      />

      <PatientTable patients={visiblePatients} />

      {pageCount > 1 && (
        <PatientPagination
          page={currentPage}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      )}
    </section>
  );
}
