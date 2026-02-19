import { BookingRecord } from "./bookings";

function isInYearOrFY(date: Date, period: string) {
  // ---------- Full calendar year (ex: "2024") ----------
  if (/^\d{4}$/.test(period)) {
    const year = Number(period);
    const start = new Date(year, 0, 1, 0, 0, 0);   // 1 Jan
    const end   = new Date(year, 11, 31, 23, 59, 59); // 31 Dec
    return date >= start && date <= end;
  }

  // ---------- Financial year range (ex: "2024-2025") ----------
  if (period.includes("-")) {
    const [start, end] = period.split("-").map(Number);

    const fyStart = new Date(start, 3, 1, 0, 0, 0); // 1 Apr
    const fyEnd   = new Date(end, 2, 31, 23, 59, 59); // 31 Mar

    return date >= fyStart && date <= fyEnd;
  }

  // ---------- Financial year short form (ex: "FY24") ----------
  if (period.startsWith("FY")) {
    const year = 2000 + Number(period.replace("FY", ""));

    const fyStart = new Date(year, 3, 1, 0, 0, 0);
    const fyEnd   = new Date(year + 1, 2, 31, 23, 59, 59);

    return date >= fyStart && date <= fyEnd;
  }

  return false;
}


export type MonthlyTrendRow = {
  month: string;
  credits: number;
  flights: number;
  international:number;
  domestic: number;
  bookings: number;
  spend: number;

  consumed: number;
  allocated: number;
  remaining:number;
  baggage: number;
  upgrades: number;

  completed: number;
  ongoing: number;
  changes: number;
  topups: number;
  extensions: number;

  savings: number;
  tax: number;
  payments: number;
  usage: number;
};

export type MonthlyTrendFilters = {
  financialYear?: string;   // "FY24" or "2024-2025"
  department?: string[];
  office?: string[];
};

export function buildMonthlyTrend(
  bookings: BookingRecord[],
  filters: MonthlyTrendFilters
): MonthlyTrendRow[] {
  console.log(filters.financialYear)

  const filtered = bookings.filter((b) => {
    const d = new Date(b.booking_date);

    // financial year
    if (filters.financialYear != null && filters.financialYear !== "") {
      if (!isInYearOrFY(d, filters.financialYear)) return false;
    }

    // department
    if (Array.isArray(filters.department) && filters.department.length > 0) {
      if (!filters.department.includes(b.department)) return false;
    }

    // office
    if (Array.isArray(filters.office) && filters.office.length > 0) {
      if (!filters.office.includes(b.office)) return false;
    }

    return true;
  });


  const map = new Map<string, MonthlyTrendRow & { _y: number; _m: number }>();

  for (const b of filtered) {
    const d = new Date(b.booking_date);
    console.log(b.booking_date)
    const key = `${d.getFullYear()}-${d.getMonth()}`;

    if (!map.has(key)) {
      map.set(key, {
        _y: d.getFullYear(),
        _m: d.getMonth(),

        month: d.toLocaleString("en-US", { month: "short" }),

        credits: 0,
        flights: 0,
        international:0,
        domestic:0,
        bookings: 0,
        spend: 0,

        consumed: 0,
        remaining:0,
        allocated: 0,
        baggage: 0,
        upgrades: 0,

        completed: 0,
        ongoing: 0,
        changes: 0,
        topups: 0,
        extensions: 0,

        savings: 0,
        tax: 0,
        payments: 0,
        usage: 0
      });
    }

    const row = map.get(key)!;

    // counts
    row.bookings += 1;
    row.flights += 1;
    if (b.is_internation_flight) row.international+=1
    else row.domestic+=1

    // ---- credits mapping (important) ----
    row.credits += b.credits_allocated;      // headline credits
    row.consumed += b.credits_used;
    row.allocated += b.credits_allocated;
    row.remaining+= b.credits_remaining

    // ---- spend & money ----
    row.spend += b.total_spend;
    row.savings += b.savings;
    row.tax += b.tax_amount;
    row.payments += b.payment_amount;

    // ---- add-ons ----
    row.baggage += b.baggage_credits;
    row.upgrades += b.upgrade_credits;

    // ---- activity / ops ----
    row.changes += b.booking_changes;
    row.topups += b.credit_topups;
    row.extensions += b.pass_extensions;

    // ---- usage (kept numeric, schema unchanged) ----
    row.usage += b.upsell_usage;

    // ---- status counts ----
    if (b.booking_status === "completed") row.completed += 1;
    if (b.booking_status === "ongoing") row.ongoing += 1;
  }

  return Array.from(map.values())
    .sort((a, b) => a._y - b._y || a._m - b._m)
    .map(({ _y, _m, ...row }) => row);
}

