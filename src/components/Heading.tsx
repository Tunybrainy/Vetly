import type { ReactNode } from "react";

type HeadingProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function Heading({ title, description, children }: HeadingProps) {
  return (
    <div className="mb-8">
      <h1 className="font-heading text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
