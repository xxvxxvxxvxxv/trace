import type { SVGProps } from "react";
export function TraceMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6c11 4 29 4 40 0l-2 7H6L4 6Zm3 13h34v5H7v-5Zm6-6h5l-2 30h-5l2-30Zm17 0h5l2 30h-5l-2-30Zm-8 0h4v6h-4v-6Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function TraceWordmark() {
  return <span className="trace-wordmark">TRACE</span>;
}
export function TraceBrand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="trace-brand" aria-label="TRACE">
      <TraceMark />
      {!compact && <TraceWordmark />}
    </span>
  );
}
