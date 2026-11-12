import { TriangleAlert } from "lucide-react";

type PatientAllergiesCardProps = {
  allergies: string[];
};

export default function PatientAllergiesCard({
  allergies,
}: PatientAllergiesCardProps) {
  return (
    <section
      aria-labelledby="allergies-heading"
      className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        <TriangleAlert size={18} aria-hidden="true" className="text-amber-700" />
        <h2
          id="allergies-heading"
          className="font-heading text-base font-bold text-amber-900"
        >
          Known Allergies
        </h2>
      </div>

      {allergies.length === 0 ? (
        <p className="text-sm font-medium text-amber-800">
          No known allergies recorded.
        </p>
      ) : (
        <ul className="space-y-2">
          {allergies.map((allergy) => (
            <li
              key={allergy}
              className="flex items-start gap-2 text-sm font-bold text-amber-800"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-600"
              />
              {allergy}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
