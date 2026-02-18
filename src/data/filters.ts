export type BookingRecord = {
  employee_id: string;
  employee_name: string;

  department: string;
  office: string;
  role: string;

  booking_id: string;
  booking_date: string; // ISO date (yyyy-mm-dd)

  booking_status: string;

  route: string;
  zone: string; // e.g. "Domestic-East"
  is_peak: boolean;

  pass_type: string;

  credits_allocated: number;
  credits_used: number;
  credits_remaining: number;

  baggage_credits: number;
  upgrade_credits: number;

  total_spend: number;
  savings: number;
  tax_amount: number;
  payment_amount: number;

  payment_status: string;

  active_user: boolean;
  last_active_days_ago: number;

  booking_changes: number;
  cancellations: number;
  no_shows: number;

  extra_baggage_purchased: number;
  credit_topups: number;
  pass_extensions: number;

  upsell_usage: number;
};



function isInFinancialYear(date: Date, fy: string) {
  // supports "2024-2025" or "FY24"
  if (fy.includes("-")) {
    const [start, end] = fy.split("-").map(Number);
    const fyStart = new Date(start, 3, 1); // 1 Apr
    const fyEnd = new Date(end, 2, 31, 23, 59, 59); // 31 Mar
    return date >= fyStart && date <= fyEnd;
  }

  // FY24 → 2024-04-01 to 2025-03-31
  const year = 2000 + Number(fy.replace("FY", ""));
  const fyStart = new Date(year, 3, 1);
  const fyEnd = new Date(year + 1, 2, 31, 23, 59, 59);

  return date >= fyStart && date <= fyEnd;
}

export type MonthlyTrendRow = {
  month: string;
  credits: number;
  flights: number;
  bookings: number;
  spend: number;

  consumed: number;
  allocated: number;
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

const filtered = bookings.filter((b) => {
  const d = new Date(b.booking_date);

  // financial year
  if (filters.financialYear != null && filters.financialYear !== "") {
    if (!isInFinancialYear(d, filters.financialYear)) return false;
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
    // console.log(b.booking_date)
    const key = `${d.getFullYear()}-${d.getMonth()}`;

    if (!map.has(key)) {
      map.set(key, {
        _y: d.getFullYear(),
        _m: d.getMonth(),

        month: d.toLocaleString("en-US", { month: "short" }),

        credits: 0,
        flights: 0,
        bookings: 0,
        spend: 0,

        consumed: 0,
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

    // ---- credits mapping (important) ----
    row.credits += b.credits_remaining;      // headline credits
    row.consumed += b.credits_used;
    row.allocated += b.credits_allocated;

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

