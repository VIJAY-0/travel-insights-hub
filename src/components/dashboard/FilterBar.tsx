import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
            <SelectItem value="2024-01-01">2024</SelectItem>
            <SelectItem value="2025-07-01">H2 2025</SelectItem>
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

        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-xs"
          onClick={() => setShowMoreFilters(!showMoreFilters)}
        >
          {showMoreFilters ? "Less" : "More"} Filters
          {showMoreFilters ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
        </Button>
      </div>

      {showMoreFilters && (
        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-border pt-3">
          <Select value={filters.employee} onValueChange={(v) => updateFilter("employee", v)}>
            <SelectTrigger className="h-8 w-[130px] text-xs">
              <SelectValue placeholder="Employee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Employees</SelectItem>
              <SelectItem value="John Smith">John Smith</SelectItem>
              <SelectItem value="Sarah Johnson">Sarah Johnson</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.route} onValueChange={(v) => updateFilter("route", v)}>
            <SelectTrigger className="h-8 w-[130px] text-xs">
              <SelectValue placeholder="Route" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Routes</SelectItem>
              <SelectItem value="NYC-LON">NYC → LON</SelectItem>
              <SelectItem value="SFO-TYO">SFO → TYO</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.bookingType} onValueChange={(v) => updateFilter("bookingType", v)}>
            <SelectTrigger className="h-8 w-[140px] text-xs">
              <SelectValue placeholder="Booking Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Types</SelectItem>
              <SelectItem value="advance">Advance</SelectItem>
              <SelectItem value="short-notice">Short Notice</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.flightType} onValueChange={(v) => updateFilter("flightType", v)}>
            <SelectTrigger className="h-8 w-[140px] text-xs">
              <SelectValue placeholder="Flight Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Flights</SelectItem>
              <SelectItem value="domestic">Domestic</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
