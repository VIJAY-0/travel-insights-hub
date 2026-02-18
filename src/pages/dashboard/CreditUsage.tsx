import { useEffect, useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import {
  SectionFilterBar,
  type SectionFilter,
  type SectionFilterValue,
} from "@/components/dashboard/SectionsFilterBar";
import {
  Activity,
  Zap,
  BarChart3,
  Clock,
  MapPin,
  User,
  Building2,
  Briefcase,
  Calendar,
  Navigation,
} from "lucide-react";
import {
  burnRateData,
  creditConsumption,
  peakData,
  futureExposure,
} from "@/data/mock-data";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";

import { useDashboard } from "@/contexts/DashboardContext";

/* ====== existing domain imports you already have in your project ====== */
import type {
  PassStats,
  CreditStats,
  FlightStats,
  SavingsStats,
} from "@/data/stats"; // <-- keep your actual paths

import {
EmptyPassStats,
  EmptyCreditStats,
  EmptyFlightStats,
  EmptySavingsStats,
} from "@/data/stats"; // <-- keep your actual paths

import {
  MonthlyTrendFilters,
  MonthlyTrendRow,
  buildMonthlyTrend,
} from "@/data/filters"; // <-- keep your actual paths

import {
  passes,
  PassFilters,
  getTotalPasses,
  getPassesByMonth,
  getQuarterlyPasses,
  getHalfYearlyPasses,
  getAnnualPasses,
  getPassesByType,
} from "@/data/passes"; // <-- keep your actual paths

import { bookings } from "@/data/bookings"; // <-- keep your actual paths
// import { passes } from "@/data/passes"; // <-- keep your actual paths
/* ===================================================================== */

const C = [
  "hsl(215, 80%, 48%)",
  "hsl(142, 60%, 40%)",
  "hsl(38, 92%, 50%)",
  "hsl(340, 75%, 55%)",
  "hsl(262, 60%, 55%)",
];

export default function CreditUsage() {
  /* ------------------------------------------------------------------ */
  /*  NEW – states (DO NOT change variable names)                        */
  /* ------------------------------------------------------------------ */
  const [monthlyTrend, setMonthlyTrend] = useState<MonthlyTrendRow[]>([]);
  const [passStats, setPassStats] = useState<PassStats>(EmptyPassStats);
  const [creditStats, setCreditStats] = useState<CreditStats>(EmptyCreditStats);
  const [flightStats, setFlightStats] = useState<FlightStats>(EmptyFlightStats);
  const [savingsStats, setSavingStats] = useState<SavingsStats>(EmptySavingsStats);

  const { filters } = useDashboard();

  /* ------------------------------------------------------------------ */
  /*  Existing section-local filters                                     */
  /* ------------------------------------------------------------------ */
  const [usageFilters, setUsageFilters] = useState<
    Record<string, SectionFilterValue | undefined>
  >({});
  const [burnRateFilters, setBurnRateFilters] = useState<
    Record<string, SectionFilterValue | undefined>
  >({});
  const [peakFilters, setPeakFilters] = useState<
    Record<string, SectionFilterValue | undefined>
  >({});

  /* ------------------------------------------------------------------ */
  /*  Builders (DO NOT change names)                                     */
  /* ------------------------------------------------------------------ */
  const buildCreditStat = (rows: MonthlyTrendRow[]): CreditStats => {
    let totalPurchased = 0;
    let totalConsumed = 0;
    let totalBlocked = 0;

    for (const r of rows) {
      totalPurchased += r.credits;
      totalConsumed += r.consumed;
      totalBlocked += r.allocated;
    }

    const remaining = totalPurchased - totalConsumed - totalBlocked;

    return {
      totalPurchased,
      totalConsumed,
      totalBlocked,
      remaining,
    };
  };

  const buildFlightStats = (rows: MonthlyTrendRow[]): FlightStats => {
    let totalFlightsTaken = 0;

    for (const r of rows) {
      totalFlightsTaken += r.flights;
    }

    return {
      totalFlightsTaken,
    };
  };

  const buildSavingsStats = (rows: MonthlyTrendRow[]): SavingsStats => {
    let totalSavingsAchieved = 0;

    for (const r of rows) {
      totalSavingsAchieved += r.savings;
    }

    return {
      totalSavingsAchieved,
    };
  };

  /* ------------------------------------------------------------------ */
  /*  Effects (DO NOT change variable names)                              */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const monthlyTrendFilters: MonthlyTrendFilters = {
      financialYear: filters.dateRange
        ? `${"2024"}-${new Date(filters.dateRange.to).getFullYear()}`
        : undefined,

      department:
        filters.department && filters.department !== "All"
          ? [filters.department]
          : undefined,

      office:
        filters.office && filters.office !== "All"
          ? [filters.office]
          : undefined,
    };

    const passFilter: PassFilters = {
      fy: "2025",
      office: monthlyTrendFilters.office,
      dept: monthlyTrendFilters.department,
    };

    const filteredStats: PassStats = {
      total: getTotalPasses(passes, passFilter),
      byMonth: getPassesByMonth(passes, passFilter),
      quarterly: getQuarterlyPasses(passes, passFilter),
      halfYearly: getHalfYearlyPasses(passes, passFilter),
      annual: getAnnualPasses(passes, passFilter),
      byType: getPassesByType(passes, passFilter),
    };

    setPassStats(filteredStats);

    console.log(passFilter);

    const mt = buildMonthlyTrend(bookings, monthlyTrendFilters);

    console.log(filteredStats);

    setMonthlyTrend(mt);
  }, [filters]);

  useEffect(() => {
    const cs = buildCreditStat(monthlyTrend);
    setCreditStats(cs);

    const fs = buildFlightStats(monthlyTrend);
    const ss = buildSavingsStats(monthlyTrend);

    setFlightStats(fs);
    setSavingStats(ss);
  }, [monthlyTrend]);

  /* ------------------------------------------------------------------ */
  /*  Filter configurations                                               */
  /* ------------------------------------------------------------------ */
  const usageFilterConfig: SectionFilter[] = [
    {
      id: "dept",
      type: "select",
      label: "Department",
      icon: MapPin,
      options: [
        { label: "Finance", value: "fin" },
        { label: "Sales", value: "sales" },
      ],
    },
    {
      id: "employee",
      type: "select",
      label: "Employee",
      icon: User,
      options: [],
    },
    {
      id: "office",
      type: "select",
      label: "Office",
      icon: Building2,
      options: [],
    },
    {
      id: "passType",
      type: "select",
      label: "Pass Type",
      icon: Briefcase,
      options: [],
    },
    { id: "dateRange", type: "date-range", label: "Usage Period" },
  ];

  const burnRateFilterConfig: SectionFilter[] = [
    {
      id: "dept",
      type: "select",
      label: "Department",
      icon: MapPin,
      options: [],
    },
    {
      id: "employee",
      type: "select",
      label: "Employee",
      icon: User,
      options: [],
    },
  ];

  const peakFilterConfig: SectionFilter[] = [
    {
      id: "day",
      type: "select",
      label: "Day of Week",
      icon: Calendar,
      options: [],
    },
    {
      id: "route",
      type: "select",
      label: "Route",
      icon: Navigation,
      options: [],
    },
    {
      id: "dept",
      type: "select",
      label: "Department",
      icon: MapPin,
      options: [],
    },
  ];

  return (
    <div className="space-y-12 pb-10">
      <PageHeader
        title="Credit Usage & Spend Tracking"
        description="Comprehensive analysis with section-specific controls"
      />

      {/* ===================== SECTION 1 ===================== */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Credit Usage Breakdown
          </h3>
          <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded uppercase">
            Finance • Travel Manager
          </span>
        </div>

        <SectionFilterBar
          filters={usageFilterConfig}
          value={usageFilters}
          onChange={setUsageFilters}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <MetricCard
              title="Total Consumption"
              value={creditStats.totalConsumed.toLocaleString()}
              icon={Activity}
            />
            <MetricCard
              title="Remaining Credits"
              value={creditStats.remaining.toLocaleString()}
              icon={Clock}
            />
          </div>

          <div className="lg:col-span-8">
            <ChartCard title="Usage Breakdown by Timeframe">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart
                  data={creditConsumption}
                  margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(220, 16%, 88%)"
                  />
                  <XAxis dataKey="month">
                    <Label
                      value="Timeline (Day/Month/Quarter)"
                      offset={-10}
                      position="insideBottom"
                      style={{ fontSize: "12px", fill: "#64748b" }}
                    />
                  </XAxis>
                  <YAxis>
                    <Label
                      value="Credits Consumed"
                      angle={-90}
                      position="insideLeft"
                      style={{ fontSize: "12px", fill: "#64748b" }}
                    />
                  </YAxis>
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="flights" stackId="a" fill={C[0]} name="Flights" />
                  <Bar
                    dataKey="baggage"
                    stackId="a"
                    fill={C[1]}
                    name="Baggage"
                  />
                  <Bar
                    dataKey="upgrades"
                    stackId="a"
                    fill={C[2]}
                    name="Upgrades"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 ===================== */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-600" />
            Burn Rate Analysis
          </h3>
          <span className="text-[10px] font-semibold bg-orange-50 text-orange-700 px-2 py-1 rounded uppercase">
            Finance
          </span>
        </div>

        <SectionFilterBar
          filters={burnRateFilterConfig}
          value={burnRateFilters}
          onChange={setBurnRateFilters}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <MetricCard
              title="Total Flights Taken"
              value={flightStats.totalFlightsTaken.toLocaleString()}
              icon={Activity}
            />
            <MetricCard
              title="Total Savings Achieved"
              value={savingsStats.totalSavingsAchieved.toLocaleString()}
              icon={Calendar}
            />
          </div>

          <div className="lg:col-span-8">
            <ChartCard title="Avg. Consumption vs Allocation">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart
                  data={burnRateData}
                  margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month">
                    <Label
                      value="Cycle"
                      offset={-10}
                      position="insideBottom"
                      style={{ fontSize: "12px", fill: "#64748b" }}
                    />
                  </XAxis>
                  <YAxis>
                    <Label
                      value="Credits"
                      angle={-90}
                      position="insideLeft"
                      style={{ fontSize: "12px", fill: "#64748b" }}
                    />
                  </YAxis>
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line
                    type="monotone"
                    dataKey="consumed"
                    stroke={C[0]}
                    strokeWidth={3}
                    name="Avg Consumed"
                  />
                  <Line
                    type="monotone"
                    dataKey="allocated"
                    stroke={C[3]}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Total Allocated"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 3 ===================== */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            Peak Analysis & Future Exposure
          </h3>
          <span className="text-[10px] font-semibold bg-purple-50 text-purple-700 px-2 py-1 rounded uppercase">
            Finance • Travel Manager
          </span>
        </div>

        <SectionFilterBar
          filters={peakFilterConfig}
          value={peakFilters}
          onChange={setPeakFilters}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard title="Peak vs Non-Peak Consumption">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={peakData}
                margin={{ top: 10, right: 30, left: 20, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day">
                  <Label
                    value="Context (Day/Hour/Route)"
                    offset={-15}
                    position="insideBottom"
                    style={{ fontSize: "12px", fill: "#64748b" }}
                  />
                </XAxis>
                <YAxis>
                  <Label
                    value="Usage"
                    angle={-90}
                    position="insideLeft"
                    style={{ fontSize: "12px", fill: "#64748b" }}
                  />
                </YAxis>
                <Tooltip />
                <Bar dataKey="peak" fill={C[3]} name="Peak" />
                <Bar dataKey="nonPeak" fill={C[4]} name="Off-Peak" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Balance vs. Future Expected Usage">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={futureExposure}
                margin={{ top: 10, right: 30, left: 20, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month">
                  <Label
                    value="Future Projection"
                    offset={-15}
                    position="insideBottom"
                    style={{ fontSize: "12px", fill: "#64748b" }}
                  />
                </XAxis>
                <YAxis>
                  <Label
                    value="Credits"
                    angle={-90}
                    position="insideLeft"
                    style={{ fontSize: "12px", fill: "#64748b" }}
                  />
                </YAxis>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="blocked"
                  stackId="1"
                  fill={C[0]}
                  fillOpacity={0.3}
                  stroke={C[0]}
                  name="Balance"
                />
                <Area
                  type="monotone"
                  dataKey="pending"
                  stackId="1"
                  fill={C[2]}
                  fillOpacity={0.3}
                  stroke={C[2]}
                  name="Expected Usage"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>
    </div>
  );
}
