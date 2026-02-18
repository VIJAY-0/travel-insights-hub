import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { mmbData, mmpData, monthlyTrend } from "@/data/mock-data";
import { 
  Settings, RefreshCw, XCircle, UserPlus, Luggage, 
  CreditCard, Zap, Calendar, MapPin, Building2, User 
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label
} from "recharts";

const COLORS = {
  mmb: "hsl(215, 80%, 48%)",
  mmp: "hsl(142, 60%, 45%)"
};

export default function MMBReports() {
  // Independent filter states per schema requirements
  const [mmbFilters, setMmbFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [mmpFilters, setMmpFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // Filter configurations based strictly on Schema images
  const mmbFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "loc", type: "select", label: "Location", icon: MapPin, options: [] },
    { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
  ];

  const mmpFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
  ];

  return (
    <div className="space-y-10 pb-10">
      <PageHeader 
        title="MMB & MMP Reports" 
        description="Comprehensive activity reports for bookings and pass modifications" 
      />

      {/* SECTION 1: MMB REPORTS (Manage My Booking) 
          Schema: Created, Changes, Cancellations, No-Shows, Extra Baggage
      */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" /> MMB Activity Summary
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase tracking-wider">
            Travel Manager
          </span>
        </div>

        <SectionFilterBar filters={mmbFilterConfig} value={mmbFilters} onChange={setMmbFilters} />

        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {mmbData.map((m) => (
            <MetricCard 
              key={m.category} 
              title={m.category} 
              value={m.count.toLocaleString()} 
              change={m.trend} 
              icon={
                m.category.includes("Cancellations") ? XCircle : 
                m.category.includes("Changes") ? RefreshCw : 
                m.category.includes("Baggage") ? Luggage : undefined
              }
            />
          ))}
        </div>

        <ChartCard title="Booking Activity Over Time">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyTrend} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }}>
                <Label value="Reporting Period" offset={-10} position="insideBottom" style={{ fontSize: '11px', fill: '#64748b' }} />
              </XAxis>
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="bookings" stroke={COLORS.mmb} strokeWidth={3} dot={{ r: 4 }} name="Bookings Created" />
              <Line type="monotone" dataKey="changes" stroke="hsl(38, 92%, 50%)" strokeWidth={2} name="Modifications" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* SECTION 2: MMP REPORTS (Manage My Pass) 
          Schema: Validity Extensions, Top-Ups, Extra Passengers, Upsell Usage, Peak Bookings
      */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-600" /> MMP Pass Modification Reports
          </h3>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase tracking-wider">
            Admin • Travel Manager • Finance
          </span>
        </div>

        <SectionFilterBar filters={mmpFilterConfig} value={mmpFilters} onChange={setMmpFilters} />

        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {mmpData.map((p) => (
            <MetricCard 
              key={p.category} 
              title={p.category} 
              value={p.count.toLocaleString()} 
              change={p.trend}
              icon={
                p.category.includes("Top-Ups") ? Zap :
                p.category.includes("Passengers") ? UserPlus :
                p.category.includes("Peak") ? Calendar : undefined
              }
            />
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <ChartCard title="Pass Extension & Top-Up Trends">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="topups" stroke={COLORS.mmp} strokeWidth={3} name="Credit Top-Ups" />
                <Line type="monotone" dataKey="extensions" stroke="hsl(262, 60%, 55%)" strokeWidth={3} name="Extensions" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Peak vs. Upsell Engagement">
             <div className="flex flex-col justify-center h-full p-4 space-y-6">
               <div className="flex items-center justify-between border-b pb-2">
                 <span className="text-sm font-medium text-slate-600">Peak Period Bookings</span>
                 <span className="text-xl font-bold text-rose-500">245</span>
               </div>
               <div className="flex items-center justify-between border-b pb-2">
                 <span className="text-sm font-medium text-slate-600">Advance Upsell Conversions</span>
                 <span className="text-xl font-bold text-blue-500">128</span>
               </div>
               <p className="text-[11px] text-muted-foreground italic text-center">
                 Showing correlated data for current filter selection
               </p>
             </div>
          </ChartCard>
        </div>
      </section>
    </div>
  );
}