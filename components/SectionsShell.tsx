import type { ReactNode } from "react";

interface SectionsShellProps {
  children: ReactNode;
}

/** Shared background for post-hero sections: darker edges, lighter center. */
export default function SectionsShell({ children }: SectionsShellProps) {
  return <div className="site-sections-bg relative">{children}</div>;
}
