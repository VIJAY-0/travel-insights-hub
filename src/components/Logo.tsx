import { Plane } from "lucide-react";

/**
 * Logo Component
 * ──────────────
 * Replace the icon and text below with your own brand logo.
 * You can swap this for an <img> tag pointing to your logo file.
 */
export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <Plane className="h-5 w-5" />
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-tight text-sidebar-primary-foreground">
            TravelCorp
          </span>
          <span className="text-[10px] leading-tight text-sidebar-foreground/60">
            Analytics Portal
          </span>
        </div>
      )}
    </div>
  );
}
