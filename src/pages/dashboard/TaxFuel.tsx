import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { monthlyTrend, taxBreakup } from "@/data/mock-data";
import { Receipt, MapPin, Building2, User, Calendar, Percent } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)"];

export default function TaxFuel() {
  // Independent filter states per schema requirements
  const [totalTaxFilters, setTotalTaxFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [breakupFilters, setBreakupFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [periodFilters, setPeriodFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // Filter configuration strictly matching schema
  const taxFilterConfig: SectionFilter[] = [
    { id: "dateRange", type: "date-range", label: "Date Range" },
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
  ];

  const breakupFilterConfig: SectionFilter[] = [
    ...taxFilterConfig,
    { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
  ];

  return (
    <div className="space-y-10 pb-10">
      <PageHeader 
        title="Tax & Fuel" 
        description="Detailed monitoring of tax collections, surcharges, and period-wise summaries" 
      />

      {/* SECTION 1: TOTAL TAX PAID / COLLECTED */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Receipt className="w-5 h-5 text-blue-600" /> Total Tax Summary
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase tracking-wider">
            Finance • Admin
          </span>
        </div>

        <SectionFilterBar filters={taxFilterConfig} value={totalTaxFilters} onChange={setTotalTaxFilters} />

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard title="Total Tax Paid / Collected" value="$155,420" change={10} icon={Receipt} />
          <MetricCard title="Avg Tax per Booking" value="$26.60" change={-3} icon={Percent} />
          <MetricCard title="Total Fuel Surcharge" value="$42,180" change={7} icon={Calendar} />
        </div>
      </section>

      {/* SECTION 2: TAX BREAKUP PER BOOKING */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Percent className="w-5 h-5 text-emerald-600" /> Granular Tax Breakup
          </h3>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase tracking-wider">
            Finance • Admin
          </span>
        </div>

        <SectionFilterBar filters={breakupFilterConfig} value={breakupFilters} onChange={setBreakupFilters} />

        <ChartCard title="Tax Breakup Component Analysis (GST, Service Charge, Surcharge)">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={taxBreakup} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }}>
                <Label value="Reporting Month" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} />
              </XAxis>
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`}>
                <Label value="Amount (USD)" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} />
              </YAxis>
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="gst" stackId="a" fill={C[0]} name="GST" />
              <Bar dataKey="serviceCharge" stackId="a" fill={C[1]} name="Service Charge" />
              <Bar dataKey="surcharge" stackId="a" fill={C[2]} name="Surcharge" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* SECTION 3: PERIOD-WISE TAX SUMMARY */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" /> Period-Wise Tax Summary
          </h3>
          <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2 py-1 rounded uppercase tracking-wider">
            Finance • Admin
          </span>
        </div>

        <SectionFilterBar filters={taxFilterConfig} value={periodFilters} onChange={setPeriodFilters} />

        <ChartCard title="Tax Trends by Month / Quarter / Year">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={monthlyTrend} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }}>
                <Label value="Period Breakdown" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} />
              </XAxis>
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`}>
                <Label value="Collected Tax (USD)" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} />
              </YAxis>
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="tax" stroke={C[0]} strokeWidth={3} dot={{ r: 4 }} name="Total Tax Trend" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>
    </div>
  );
}