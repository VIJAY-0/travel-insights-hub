import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { monthlyTrend, taxBreakup } from "@/data/mock-data";
import { Receipt } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)"];

export default function TaxFuel() {
  return (
    <div>
      <PageHeader title="Tax & Fuel" description="Tax summaries, breakups and fuel surcharge analysis" />

      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <MetricCard title="Total Tax Paid" value="$155K" change={10} icon={Receipt} />
        <MetricCard title="Avg Tax/Booking" value="$26.60" change={-3} />
        <MetricCard title="Fuel Surcharge" value="$42K" change={7} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Tax Trend">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Line type="monotone" dataKey="tax" stroke={C[0]} strokeWidth={2} name="Tax" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Tax Breakup per Booking">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={taxBreakup}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="gst" stackId="a" fill={C[0]} name="GST" />
              <Bar dataKey="serviceCharge" stackId="a" fill={C[1]} name="Service Charge" />
              <Bar dataKey="surcharge" stackId="a" fill={C[2]} name="Surcharge" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
