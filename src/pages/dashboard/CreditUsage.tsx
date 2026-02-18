import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar"
import { 
  Activity, Zap, BarChart3, Clock, MapPin, User, Building2, 
  Briefcase, Calendar, Navigation, Shield, Building 
} from "lucide-react";
import { burnRateData, creditConsumption, peakData, futureExposure } from "@/data/mock-data";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)", "hsl(262, 60%, 55%)"];

export default function CreditUsage() {
  // 1. Independent filter states for each section per schema requirements
  const [usageFilters, setUsageFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [burnRateFilters, setBurnRateFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [peakFilters, setPeakFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // 2. Filter Definitions adhering to schema categories
  const usageFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [{label: "Finance", value: "fin"}, {label: "Sales", value: "sales"}] },
    { id: "employee", type: "select", label: "Employee", icon: User, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "passType", type: "select", label: "Pass Type", icon: Briefcase, options: [] },
    { id: "dateRange", type: "date-range", label: "Usage Period" },
  ];

  const burnRateFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "employee", type: "select", label: "Employee", icon: User, options: [] },
  ];

  const peakFilterConfig: SectionFilter[] = [
    { id: "day", type: "select", label: "Day of Week", icon: Calendar, options: [] },
    { id: "route", type: "select", label: "Route", icon: Navigation, options: [] },
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
  ];

  return (
    <div className="space-y-12 pb-10">
      <PageHeader 
        title="Credit Usage & Spend Tracking" 
        description="Comprehensive analysis with section-specific controls" 
      />

      {/* SECTION 1: CREDIT USAGE BREAKDOWN */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" /> Credit Usage Breakdown
          </h3>
          <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded uppercase">Finance • Travel Manager</span>
        </div>

        <SectionFilterBar filters={usageFilterConfig} value={usageFilters} onChange={setUsageFilters} />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <MetricCard title="Total Consumption" value="58,400" icon={Activity} />
            <MetricCard title="Avg. Daily Usage" value="1,940" change={+2} icon={Clock} />
          </div>
          <div className="lg:col-span-8">
            <ChartCard title="Usage Breakdown by Timeframe">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={creditConsumption} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 16%, 88%)" />
                  <XAxis dataKey="month"><Label value="Timeline (Day/Month/Quarter)" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} /></XAxis>
                  <YAxis><Label value="Credits Consumed" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} /></YAxis>
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="flights" stackId="a" fill={C[0]} name="Flights" />
                  <Bar dataKey="baggage" stackId="a" fill={C[1]} name="Baggage" />
                  <Bar dataKey="upgrades" stackId="a" fill={C[2]} name="Upgrades" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* SECTION 2: BURN RATE ANALYSIS */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-600" /> Burn Rate Analysis
          </h3>
          <span className="text-[10px] font-semibold bg-orange-50 text-orange-700 px-2 py-1 rounded uppercase">Finance</span>
        </div>

        <SectionFilterBar filters={burnRateFilterConfig} value={burnRateFilters} onChange={setBurnRateFilters} />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <MetricCard title="Weekly Burn Rate" value="1,450" change={5} icon={Activity} />
            <MetricCard title="Monthly Burn Rate" value="5,800" icon={Calendar} />
          </div>
          <div className="lg:col-span-8">
            <ChartCard title="Avg. Consumption vs Allocation">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={burnRateData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month"><Label value="Cycle" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} /></XAxis>
                  <YAxis><Label value="Credits" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} /></YAxis>
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="monotone" dataKey="consumed" stroke={C[0]} strokeWidth={3} name="Avg Consumed" />
                  <Line type="monotone" dataKey="allocated" stroke={C[3]} strokeWidth={2} strokeDasharray="5 5" name="Total Allocated" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* SECTION 3: PEAK VS NON-PEAK & FUTURE EXPOSURE */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" /> Peak Analysis & Future Exposure
          </h3>
          <span className="text-[10px] font-semibold bg-purple-50 text-purple-700 px-2 py-1 rounded uppercase">Finance • Travel Manager</span>
        </div>

        <SectionFilterBar filters={peakFilterConfig} value={peakFilters} onChange={setPeakFilters} />

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard title="Peak vs Non-Peak Consumption">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={peakData} margin={{ top: 10, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day"><Label value="Context (Day/Hour/Route)" offset={-15} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} /></XAxis>
                <YAxis><Label value="Usage" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} /></YAxis>
                <Tooltip />
                <Bar dataKey="peak" fill={C[3]} name="Peak" />
                <Bar dataKey="nonPeak" fill={C[4]} name="Off-Peak" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Balance vs. Future Expected Usage">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={futureExposure} margin={{ top: 10, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month"><Label value="Future Projection" offset={-15} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} /></XAxis>
                <YAxis><Label value="Credits" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} /></YAxis>
                <Tooltip />
                <Area type="monotone" dataKey="blocked" stackId="1" fill={C[0]} fillOpacity={0.3} stroke={C[0]} name="Balance" />
                <Area type="monotone" dataKey="pending" stackId="1" fill={C[2]} fillOpacity={0.3} stroke={C[2]} name="Expected Usage" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>
    </div>
  );
}