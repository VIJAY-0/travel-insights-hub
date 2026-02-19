import React, { createContext, useContext, useState, ReactNode } from "react";

export type Role = "Executive" | "Finance" | "Travel Manager" | "Admin" | "Null";

interface Filters {
  dateRange: { from: string; to: string };
  department: string;
  office: string;
  employee: string;
  route: string;
  city: string;
  zone: string;
  bookingType: string;
  flightType: string;
}

interface DashboardContextType {
  role: Role;
  setRole: (role: Role) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  updateFilter: (key: keyof Filters, value: any) => void;
  showMoreFilters: boolean;
  setShowMoreFilters: (show: boolean) => void;
}

const defaultFilters: Filters = {
  dateRange: { from: "2025-01-01", to: "2025-12-31" },
  department: "All",
  office: "All",
  employee: "All",
  route: "All",
  city: "All",
  zone: "All",
  bookingType: "All",
  flightType: "All",
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("Null");
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <DashboardContext.Provider
      value={{ role, setRole, filters, setFilters, updateFilter, showMoreFilters, setShowMoreFilters }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}
