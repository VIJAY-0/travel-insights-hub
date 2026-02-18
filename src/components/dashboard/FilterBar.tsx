import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/dashboard/ui/select";
import { useDashboard } from "@/contexts/DashboardContext";
import { SlidersHorizontal } from "lucide-react";

export function FilterBar() {
  const { filters, updateFilter } = useDashboard();

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-card px-4 py-3 sm:px-6">
      {/* Container for header and dropdowns */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* Filters Header */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground flex-shrink-0">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filters
        </div>

        {/* Dropdowns container */}
<div className="flex items-start gap-3 w-full sm:w-auto overflow-hidden p-5">
          
          {/* Date Range */}
          <div className="flex-1 min-w-[80px] flex flex-col">
            <label className="text-xs font-semibold text-muted-foreground mb-1">Date Range</label>
            <Select
              value={filters.dateRange.from}
              onValueChange={(v) => updateFilter("dateRange", { from: v, to: filters.dateRange.to })}
            >
              <SelectTrigger className="h-8 w-full text-xs focus:outline-none focus:ring-0 focus:border-none">
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-01-01">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Department */}
          <div className="flex-1 min-w-[90px] flex flex-col">
            <label className="text-xs font-semibold text-muted-foreground mb-1">Department</label>
            <Select value={filters.department} onValueChange={(v) => updateFilter("department", v)}>
              <SelectTrigger className="h-8 w-full text-xs focus:outline-none focus:ring-0 focus:border-none">
                <SelectValue placeholder="Select department" />
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
          </div>

          {/* Office */}
          <div className="flex-1 min-w-[90px] flex flex-col">
            <label className="text-xs font-semibold text-muted-foreground mb-1">Office</label>
            <Select value={filters.office} onValueChange={(v) => updateFilter("office", v)}>
              <SelectTrigger className="h-8 w-full text-xs focus:outline-none focus:ring-0 focus:border-none">
                <SelectValue placeholder="Select office" />
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
      </div>
    </div>
  );
}
