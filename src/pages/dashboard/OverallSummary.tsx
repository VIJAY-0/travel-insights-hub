import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { 
  CreditCard, Wallet, Plane, TrendingUp, Clock, Lock, PiggyBank,
  MapPin, User, Building2, Calendar, Globe, Briefcase
} from "lucide-react";
import { monthlyTrend, passTypes, flightTypeData, departmentSavings } from "@/data/mock-data";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label,
} from "recharts";

const CHART_COLORS = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)", "hsl(262, 60%, 55%)"];

export default function OverallSummary() {
  // 1. Independent filter states per section requirements
  const [passFilters, setPassFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [creditFilters, setCreditFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [flightFilters, setFlightFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [savingsFilters, setSavingsFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

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
            <MetricCard title="Total Passes Purchased" value="1,245" change={12} icon={CreditCard} />
            <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-tight">Quick Breakdown</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Annual Passes</span><span className="font-semibold">840</span></div>
                <div className="flex justify-between"><span>Monthly Passes</span><span className="font-semibold">405</span></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ChartCard title="Pass Type Distribution & Validity">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={passTypes} innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
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
          <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase">Finance • Travel Manager</span>
        </div>
        <SectionFilterBar filters={creditFilterConfig} value={creditFilters} onChange={setCreditFilters} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard title="Total Purchased" value="61,200" change={8} icon={Wallet} />
          <MetricCard title="Total Consumed" value="58,400" icon={TrendingUp} />
          <MetricCard title="Remaining" value="2,800" change={-22} icon={Clock} />
          <MetricCard title="Blocked (Future)" value="1,450" icon={Lock} />
        </div>
        <ChartCard title="Credit Utilization & Consumption Trend">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month"><Label value="Timeline" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} /></XAxis>
              <YAxis><Label value="Credits" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} /></YAxis>
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="credits" stroke={CHART_COLORS[0]} strokeWidth={3} name="Purchased" />
              <Line type="monotone" dataKey="consumed" stroke={CHART_COLORS[3]} strokeWidth={3} name="Consumed" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* SECTION 3: FLIGHT ACTIVITY & SAVINGS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Plane className="w-5 h-5 text-indigo-600" /> Flight Activity</h3>
          </div>
          <SectionFilterBar filters={creditFilterConfig} value={flightFilters} onChange={setFlightFilters} />
          <MetricCard title="Total Flights Taken" value="4,870" change={15} icon={Plane} className="mb-4" />
          <ChartCard title="Domestic vs International Mix">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={flightTypeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="domestic" stackId="a" fill={CHART_COLORS[0]} name="Domestic" />
                <Bar dataKey="international" stackId="a" fill={CHART_COLORS[2]} name="International" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><PiggyBank className="w-5 h-5 text-amber-600" /> Savings Realized</h3>
          </div>
          <SectionFilterBar filters={creditFilterConfig} value={savingsFilters} onChange={setSavingsFilters} />
          <MetricCard title="Total Savings Achieved" value="$163,000" change={18} icon={PiggyBank} className="mb-4" />
          <ChartCard title="Savings by Department">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={departmentSavings} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tickFormatter={(v) => `$${v / 1000}K`} />
                <YAxis dataKey="department" type="category" width={80} />
                <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                <Bar dataKey="savings" fill={CHART_COLORS[1]} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </section>
      </div>
    </div>
  );
}