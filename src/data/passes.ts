

export const passes=[
    { id: 1, name: "Flexi", value: 45, dept: "Engineering", office: "London", month: 3, fy: "2025" },
    { id: 2, name: "Standard", value: 30, dept: "Marketing", office: "Singapore", month: 3, fy: "2025" },
    { id: 3, name: "Premium", value: 15, dept: "Sales", office: "New York", month: 6, fy: "2025" },
    { id: 4, name: "Economy", value: 20, dept: "Engineering", office: "London", month: 6, fy: "2025" },
    { id: 5, name: "Flexi", value: 55, dept: "Sales", office: "London", month: 12, fy: "2025" },
    { id: 6, name: "Standard", value: 40, dept: "Engineering", office: "Singapore", month: 12, fy: "2025" },
    { id: 7, name: "Premium", value: 25, dept: "Marketing", office: "New York", month: 3, fy: "2025" },
    { id: 8, name: "Economy", value: 10, dept: "Sales", office: "Singapore", month: 6, fy: "2025" },
    { id: 9, name: "Flexi", value: 35, dept: "Engineering", office: "London", month: 6, fy: "2025" },
    { id: 10, name: "Standard", value: 50, dept: "Marketing", office: "London", month: 12, fy: "2025" },
    { id: 11, name: "Premium", value: 18, dept: "Sales", office: "New York", month: 12, fy: "2025" },
    { id: 12, name: "Economy", value: 22, dept: "Engineering", office: "Singapore", month: 3, fy: "2025" },
    { id: 13, name: "Flexi", value: 60, dept: "Marketing", office: "London", month: 6, fy: "2025" },
    { id: 14, name: "Standard", value: 33, dept: "Engineering", office: "New York", month: 3, fy: "2025" },
    { id: 15, name: "Premium", value: 42, dept: "Sales", office: "Singapore", month: 6, fy: "2025" },
    { id: 16, name: "Economy", value: 15, dept: "Marketing", office: "London", month: 12, fy: "2025" },
    { id: 17, name: "Flexi", value: 28, dept: "Engineering", office: "New York", month: 12, fy: "2025" },
    { id: 18, name: "Standard", value: 12, dept: "Sales", office: "London", month: 3, fy: "2025" },
    { id: 19, name: "Premium", value: 37, dept: "Marketing", office: "Singapore", month: 6, fy: "2025" },
    { id: 20, name: "Economy", value: 48, dept: "Engineering", office: "London", month: 12, fy: "2025" }
];


// pass-stats.ts

export type Pass = {
  id: number;
  name: string;
  value: number;
  dept: string;
  office: string;
  month: number; // 3 = quarterly, 6 = half-yearly, 12 = yearly
  fy: string;
};

export type PassFilters = {
  fy?: string;
  office?: string[];
  dept?: string[];
};

// -------------------------------
// Base filter
// -------------------------------
export function filterPasses(
  data: Pass[],
  filters: PassFilters
): Pass[] {
  return data.filter(p => {
    if (filters.fy && p.fy !== filters.fy) return false;

    if (
      filters.office &&
      filters.office.length > 0 &&
      !filters.office.includes(p.office)
    ) {
      return false;
    }

    if (
      filters.dept &&
      filters.dept.length > 0 &&
      !filters.dept.includes(p.dept)
    ) {
      return false;
    }

    return true;
  });
}


// -------------------------------
// Total passes (sum of value)
// -------------------------------
export function getTotalPasses(
  data: Pass[],
  filters: PassFilters
): number {
  const rows = filterPasses(data, filters);
  return rows.reduce((sum, p) => sum + p.value, 0);
}

// -------------------------------
// Passes by month (cadence)
// -------------------------------
export function getPassesByMonth(
  data: Pass[],
  filters: PassFilters
): Record<number, number> {
  const rows = filterPasses(data, filters);

  const result: Record<number, number> = {};

  for (const p of rows) {
    result[p.month] = (result[p.month] || 0) + p.value;
  }

  return result;
}

// -------------------------------
// Quarterly passes (month === 3)
// -------------------------------
export function getQuarterlyPasses(
  data: Pass[],
  filters: PassFilters
): number {
  const rows = filterPasses(data, filters);

  return rows
    .filter(p => p.month === 3)
    .reduce((sum, p) => sum + p.value, 0);
}

// -------------------------------
// Half-yearly passes (month === 6)
// -------------------------------
export function getHalfYearlyPasses(
  data: Pass[],
  filters: PassFilters
): number {
  const rows = filterPasses(data, filters);

  return rows
    .filter(p => p.month === 6)
    .reduce((sum, p) => sum + p.value, 0);
}

// -------------------------------
// Yearly passes (month === 12)
// -------------------------------
export function getAnnualPasses(
  data: Pass[],
  filters: PassFilters
): number {
  const rows = filterPasses(data, filters);

  return rows
    .filter(p => p.month === 12)
    .reduce((sum, p) => sum + p.value, 0);
}

// -------------------------------
// Passes by pass type
// -------------------------------
export function getPassesByType(
  data: Pass[],
  filters: PassFilters
): Record<string, number> {
  const rows = filterPasses(data, filters);

  const result: Record<string, number> = {};

  for (const p of rows) {
    result[p.name] = (result[p.name] || 0) + p.value;
  }

  return result;
}




type PassTypeChartItem = {
  name: string;
  value: number;
  fill: string;
};

const PASS_TYPE_LABEL_MAP: Record<string, string> = {
  Flexi: "Flexi Pass",
  Standard: "Standard",
  Premium: "Premium",
  Economy: "Economy",
};

const PASS_TYPE_COLOR_MAP: Record<string, string> = {
  Flexi: "hsl(var(--chart-1))",
  Standard: "hsl(var(--chart-2))",
  Premium: "hsl(var(--chart-3))",
  Economy: "hsl(var(--chart-4))",
};

export function toPassTypeChartData(
  byType: Record<string, number>
): PassTypeChartItem[] {
  return Object.entries(byType).map(([type, value]) => ({
    name: PASS_TYPE_LABEL_MAP[type] ?? type,
    value,
    fill: PASS_TYPE_COLOR_MAP[type] ?? "hsl(var(--chart-1))",
  }));
}
