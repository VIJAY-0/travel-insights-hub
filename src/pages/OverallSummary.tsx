import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { CreditCard, Plane, Wallet, TrendingUp, Clock, Lock, PiggyBank } from "lucide-react";
import { monthlyTrend, passTypes, flightTypeData, creditConsumption, departmentSavings } from "@/data/mock-data";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const CHART_COLORS = [
  "hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)",
  "hsl(340, 75%, 55%)", "hsl(262, 60%, 55%)", "hsl(200, 80%, 50%)",
];

export default function OverallSummary() {
  return (
    <div>
      <PageHeader title="Overall Summary" description="High-level view of travel, credits & spending" />

      {/* Metric Strip */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        <MetricCard title="Passes Purchased" value="1,245" change={12} changeLabel="vs last year" icon={CreditCard} />
        <MetricCard title="Credits Purchased" value="61,200" change={8} changeLabel="vs last year" icon={Wallet} />
        <MetricCard title="Flights Taken" value="4,870" change={15} changeLabel="vs last year" icon={Plane} />
        <MetricCard title="Credits Consumed" value="58,400" change={10} changeLabel="vs last year" icon={TrendingUp} />
        <MetricCard title="Credits Remaining" value="2,800" change={-22} changeLabel="vs last year" icon={Clock} />
        <MetricCard title="Blocked Credits" value="1,450" change={5} icon={Lock} />
        <MetricCard title="Total Savings" value="$163K" change={18} changeLabel="vs last year" icon={PiggyBank} />
      </div>

      {/* Row 2 – Charts */}
      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        <ChartCard title="Credit & Flight Trends">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="credits" stroke={CHART_COLORS[0]} strokeWidth={2} dot={false} name="Credits" />
              <Line type="monotone" dataKey="flights" stroke={CHART_COLORS[1]} strokeWidth={2} dot={false} name="Flights" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Pass Type Distribution">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={passTypes} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {passTypes.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 3 – Breakdowns */}
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Domestic vs International Flights">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={flightTypeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="domestic" stackId="a" fill={CHART_COLORS[0]} name="Domestic" radius={[0, 0, 0, 0]} />
              <Bar dataKey="international" stackId="a" fill={CHART_COLORS[2]} name="International" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Department Savings">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentSavings} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <YAxis dataKey="department" type="category" tick={{ fontSize: 11 }} width={80} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Bar dataKey="savings" fill={CHART_COLORS[1]} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
