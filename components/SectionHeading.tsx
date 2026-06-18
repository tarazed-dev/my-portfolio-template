import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

/** Reusable section heading with accent underline */
export default function SectionHeading({
  title,
  subtitle,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)} id={id}>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-px w-12 bg-gray-600" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
