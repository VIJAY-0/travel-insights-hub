import { Button } from "@/components/dashboard/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/dashboard/ui/select";
import { useDashboard } from "@/contexts/DashboardContext";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";

export function FilterBar() {
  const { filters, updateFilter, showMoreFilters, setShowMoreFilters } = useDashboard();

  return (
    <div className="border-b border-border bg-card px-4 py-3 sm:px-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filters
        </div>

        <Select value={filters.dateRange.from} onValueChange={(v) => updateFilter("dateRange", { from: v, to: filters.dateRange.to })}>
          <SelectTrigger className="h-8 w-[140px] text-xs">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025-01-01">2025</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.department} onValueChange={(v) => updateFilter("department", v)}>
          <SelectTrigger className="h-8 w-[130px] text-xs">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Departments</SelectItem>
            <SelectItem value="Engineering">Engineering</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="HR">HR</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Operations">Operations</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.office} onValueChange={(v) => updateFilter("office", v)}>
          <SelectTrigger className="h-8 w-[130px] text-xs">
            <SelectValue placeholder="Office" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Offices</SelectItem>
            <SelectItem value="New York">New York</SelectItem>
            <SelectItem value="San Francisco">San Francisco</SelectItem>
            <SelectItem value="Chicago">Chicago</SelectItem>
            <SelectItem value="London">London</SelectItem>
          </SelectContent>
        </Select>

      </div>

    </div>
  );
}
