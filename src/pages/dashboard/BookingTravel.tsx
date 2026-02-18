import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
// Subtle change applied to import path
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { 
  CalendarCheck, PlaneTakeoff, Globe, Clock, 
  MapPin, User, History, FastForward, Timer
} from "lucide-react";

// Mock data imports from @data/mock-data
import { 
  bookingVolumeData, 
  advanceBookingData, 
  travelStatusMetrics 
} from "@/data/mock-data";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend, Label, PieChart, Pie, Cell
} from "recharts";

const COLORS = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(262, 60%, 55%)"];

export default function BookingTravelVisibility() {
  // Independent filter states for Section Adherence
  const [volumeFilters, setVolumeFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [advanceFilters, setAdvanceFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // 1. Config for Volume Section (Total, Completed, Ongoing, Future)
  const volumeFilterConfig: SectionFilter[] = [
    { id: "dateRange", type: "date-range", label: "Date Range" },
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
  ];

  // 2. Config for Advance Booking Section
  const advanceFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
    { id: "route", type: "select", label: "Route", icon: Globe, options: [] },
  ];

  return (
    <div className="space-y-10 pb-10">
      <PageHeader 
        title="Booking & Travel Visibility" 
        description="Monitor status lifecycle and advance booking lead times" 
      />

      {/* SECTION 1: BOOKING VOLUME & STATUS 
          Schema: Total Bookings Created, Completed, Ongoing, Future
      */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-blue-600" /> Booking Status & Volume
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase tracking-wider">
            Travel Manager • Admin
          </span>
        </div>

        <SectionFilterBar filters={volumeFilterConfig} value={volumeFilters} onChange={setVolumeFilters} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard title="Total Created" value={travelStatusMetrics.total} icon={History} />
          <MetricCard title="Completed" value={travelStatusMetrics.completed} icon={CalendarCheck} />
          <MetricCard title="Ongoing Travel" value={travelStatusMetrics.ongoing} icon={PlaneTakeoff} />
          <MetricCard title="Future Bookings" value={travelStatusMetrics.future} icon={FastForward} />
        </div>

        <ChartCard title="Monthly Booking Lifecycle">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={bookingVolumeData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11 }}>
                <Label value="Reporting Period" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} />
              </XAxis>
              <YAxis tick={{ fontSize: 11 }}>
                <Label value="Booking Count" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} />
              </YAxis>
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="total" fill={COLORS[0]} name="Total Bookings" />
              <Bar dataKey="completed" fill={COLORS[1]} name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* SECTION 2: ADVANCE VS SHORT-NOTICE 
          Schema: Bookings made in advance vs last-minute
      */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Timer className="w-5 h-5 text-emerald-600" /> Advance vs. Short-Notice Analysis
          </h3>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase tracking-wider">
            Travel Manager
          </span>
        </div>

        <SectionFilterBar filters={advanceFilterConfig} value={advanceFilters} onChange={setAdvanceFilters} />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Detailed metrics per schema logic */}
          <div className="lg:col-span-4 space-y-4">
            <MetricCard 
              title="Avg. Lead Time" 
              value="18.5 Days" 
              change={+2.4} 
              changeLabel="vs last month" 
              icon={Clock} 
            />
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400">Advance %</p>
                <p className="text-xl font-bold text-emerald-600">74%</p>
              </div>
              <div className="p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400">Short-Notice %</p>
                <p className="text-xl font-bold text-rose-500">26%</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ChartCard title="Lead Time Distribution by Route & Department">
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie 
                    data={advanceBookingData} 
                    cx="50%" cy="50%" 
                    innerRadius={70} 
                    outerRadius={100} 
                    paddingAngle={8} 
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {advanceBookingData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>
    </div>
  );
}