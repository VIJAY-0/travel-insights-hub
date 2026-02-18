import { useEffect, useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import {
  CreditCard, Wallet, Plane, TrendingUp, Clock, Lock, PiggyBank,
  MapPin, User, Building2, Calendar, Globe, Briefcase
} from "lucide-react";
// import { monthlyTrend, passTypes, flightTypeData, departmentSavings } from "@/data/mock-data";
import { passTypes, flightTypeData, departmentSavings } from "@/data/mock-data";
import { buildMonthlyTrend, MonthlyTrendFilters, MonthlyTrendRow } from "@/data/filters";
import { bookings } from "@/data/bookings";
import { passes, PassFilters, getTotalPasses, getAnnualPasses, getHalfYearlyPasses, getPassesByMonth, getPassesByType, getQuarterlyPasses, toPassTypeChartData } from "@/data/passes";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label,
} from "recharts";
import { useDashboard } from "@/contexts/DashboardContext";
const CHART_COLORS = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)", "hsl(262, 60%, 55%)"];



export type PassStats = {
  total: number;
  byMonth: Record<number, number>;
  quarterly: number;   // month === 3
  halfYearly: number;  // month === 6
  annual: number;     // month === 12
  byType: Record<string, number>;
};

const emptyPassStats: PassStats = {
  total: 0,
  byMonth: {},
  quarterly: 0,
  halfYearly: 0,
  annual: 0,
  byType: {},
};

export type CreditStats = {
  totalPurchased: number;
  totalConsumed: number;
  totalBlocked: number;
  remaining: number;
};
const EmptyCreditStats = {
  totalPurchased: 0,
  totalConsumed: 0,
  totalBlocked: 0,
  remaining: 0,
};

export type FlightStats = {
  totalFlightsTaken: number;
};
const EmptyFlightStats = {
  totalFlightsTaken: 0,
};
export type SavingsStats = {
  totalSavingsAchieved: number;
};
const EmptySavingsStats = {
  totalSavingsAchieved: 0,
};



export default function OverallSummary() {
  // 1. Independent filter states per section requirements
  const [passFilters, setPassFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [creditFilters, setCreditFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [flightFilters, setFlightFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [savingsFilters, setSavingsFilters] = useState<Record<string, SectionFilterValue | undefined>>({});



  const [monthlyTrend, setMonthlyTrend] = useState([])
  const [passStats, setPassStats] = useState<PassStats>(emptyPassStats)
  const [creditStats, setCreditStats] = useState<CreditStats>(EmptyCreditStats)
  const [flightStats, setFlightStats] = useState<FlightStats>(EmptyFlightStats)
  const [savingsStats, setSavingStats] = useState<SavingsStats>(EmptySavingsStats)

  //   const flightStats = buildFlightStats(monthlyTrend);
  // const savingsStats = buildSavingsStats(monthlyTrend);

  const { filters } = useDashboard();

  const buildCreditStat = (
    rows: MonthlyTrendRow[]
  ): CreditStats => {

    let totalPurchased = 0;
    let totalConsumed = 0;
    let totalBlocked = 0;

    for (const r of rows) {
      totalPurchased += r.credits;
      totalConsumed += r.consumed;
      totalBlocked += r.allocated;
    }

    const remaining =
      totalPurchased - totalConsumed - totalBlocked;

    return {
      totalPurchased,
      totalConsumed,
      totalBlocked,
      remaining
    };
  }

  const buildFlightStats = (
    rows: MonthlyTrendRow[]
  ): FlightStats => {
    let totalFlightsTaken = 0;

    for (const r of rows) {
      totalFlightsTaken += r.flights;
    }

    return {
      totalFlightsTaken,
    };
  }


  const buildSavingsStats = (
    rows: MonthlyTrendRow[]
  ): SavingsStats => {
    let totalSavingsAchieved = 0;

    for (const r of rows) {
      totalSavingsAchieved += r.savings;
    }

    return {
      totalSavingsAchieved,
    };
  }




  useEffect(() => {
    const monthlyTrendFilters: MonthlyTrendFilters = {
      financialYear: filters.dateRange
        // ? `${new Date(filters.dateRange.from).getFullYear()}-${new Date(
        ? `${"2024"}-${new Date(
          filters.dateRange.to
        ).getFullYear()}`
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
    }
    const filteredStats: PassStats = {
      total: getTotalPasses(passes, passFilter),
      byMonth: getPassesByMonth(passes, passFilter),
      quarterly: getQuarterlyPasses(passes, passFilter),
      halfYearly: getHalfYearlyPasses(passes, passFilter),
      annual: getAnnualPasses(passes, passFilter),
      byType: getPassesByType(passes, passFilter),
    };


    setPassStats(filteredStats)

    // console.log(monthlyTrendFilters)
    console.log(passFilter)

    const mt = buildMonthlyTrend(bookings, monthlyTrendFilters)
    // console.log(mt)
    console.log(filteredStats)
    setMonthlyTrend(mt)
  }, [filters]);


  useEffect(() => {
    const cs = buildCreditStat(monthlyTrend)
    setCreditStats(cs)
    const fs = buildFlightStats(monthlyTrend);
    const ss = buildSavingsStats(monthlyTrend);
    setFlightStats(fs)
    setSavingStats(ss)

  }, [monthlyTrend])



  // 2. Filter Configurations based strictly on Schema
  const passFilterConfig: SectionFilter[] = [
    { id: "date", type: "date-range", label: "Date Range" },
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "loc", type: "select", label: "Location", icon: Globe, options: [] },
  ];

  const creditFilterConfig: SectionFilter[] = [
    { id: "date", type: "date-range", label: "Date Range" },
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
  ];

  return (
    <div className="space-y-12 pb-10">
      <PageHeader title="Overall Summary" description="Executive-level travel and financial oversight" />

      {/* SECTION 1: PASS PURCHASING (Schema: Total passes, types, validity) */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-600" /> Pass Inventory & Validity
          </h3>
          <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase">Executives • Finance</span>
        </div>
        <SectionFilterBar filters={passFilterConfig} value={passFilters} onChange={setPassFilters} />
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MetricCard title="Total Passes Purchased" value={passStats.total} change={12} icon={CreditCard} />
            <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-tight">Quick Breakdown</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Annual Passes</span><span className="font-semibold">{passStats.annual}</span></div>
                <div className="flex justify-between"><span>Half-Yearly Passes</span><span className="font-semibold">{passStats.halfYearly}</span></div>
                <div className="flex justify-between"><span>Quaterly Passes</span><span className="font-semibold">{passStats.quarterly}</span></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ChartCard title="Pass Type Distribution">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={toPassTypeChartData(passStats.byType)} innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {passTypes.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* SECTION 2: CREDIT LIFECYCLE (Schema: Purchased vs Consumed vs Blocked) */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-emerald-600" /> Credit Management
          </h3>
          <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase">
            Finance • Travel Manager
          </span>
        </div>

        <SectionFilterBar
          filters={creditFilterConfig}
          value={creditFilters}
          onChange={setCreditFilters}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Total Purchased"
            value={creditStats.totalPurchased}
            change={8}
            icon={Wallet}
          />

          <MetricCard
            title="Total Consumed"
            value={creditStats.totalConsumed}
            icon={TrendingUp}
          />

          <MetricCard
            title="Remaining"
            value={creditStats.remaining}
            change={-22}
            icon={Clock}
          />

          <MetricCard
            title="Blocked (Future)"
            value={creditStats.totalBlocked}
            icon={Lock}
          />
        </div>

        <ChartCard title="Credit Utilization & Consumption Trend">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month">
                <Label
                  value="Timeline"
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
                dataKey="credits"
                stroke={CHART_COLORS[0]}
                strokeWidth={3}
                name="Purchased"
              />
              <Line
                type="monotone"
                dataKey="consumed"
                stroke={CHART_COLORS[3]}
                strokeWidth={3}
                name="Consumed"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>


      {/* SECTION 3: FLIGHT ACTIVITY & SAVINGS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Plane className="w-5 h-5 text-indigo-600" /> Flight Activity
            </h3>
          </div>

          <SectionFilterBar
            filters={creditFilterConfig}
            value={flightFilters}
            onChange={setFlightFilters}
          />

          <MetricCard
            title="Total Flights Taken"
            value={flightStats.totalFlightsTaken}
            change={15}
            icon={Plane}
            className="mb-4"
          />

          <ChartCard title="Domestic vs International Mix">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={flightTypeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="domestic"
                  stackId="a"
                  fill={CHART_COLORS[0]}
                  name="Domestic"
                />
                <Bar
                  dataKey="international"
                  stackId="a"
                  fill={CHART_COLORS[2]}
                  name="International"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <PiggyBank className="w-5 h-5 text-amber-600" /> Savings Realized
            </h3>
          </div>

          <SectionFilterBar
            filters={creditFilterConfig}
            value={savingsFilters}
            onChange={setSavingsFilters}
          />

          <MetricCard
            title="Total Savings Achieved"
            value={savingsStats.totalSavingsAchieved}
            change={18}
            icon={PiggyBank}
            className="mb-4"
          />

          <ChartCard title="Savings by Department">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={departmentSavings} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis
                  type="number"
                  tickFormatter={(v) => `$${v / 1000}K`}
                />
                <YAxis
                  dataKey="department"
                  type="category"
                  width={80}
                />
                <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                <Bar
                  dataKey="savings"
                  fill={CHART_COLORS[1]}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </section>
      </div>

    </div>
  );
}