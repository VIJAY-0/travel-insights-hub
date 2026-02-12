import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { useDashboard } from "@/contexts/DashboardContext";
import { monthlyTrend, departmentSavings, reconciliation, routeData, peakData } from "@/data/mock-data";
import { CreditCard, Plane, Wallet, TrendingUp, AlertCircle, PiggyBank, MapPin } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)"];

function ExecutiveDashboard() {
  return (
    <>
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard title="Total Credits" value="61,200" change={8} icon={CreditCard} />
        <MetricCard title="Total Flights" value="4,870" change={15} icon={Plane} />
        <MetricCard title="Total Spend" value="$1.2M" change={10} icon={Wallet} />
        <MetricCard title="Savings" value="$163K" change={18} icon={PiggyBank} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Trend Overview">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="credits" stroke={C[0]} strokeWidth={2} dot={false} name="Credits" />
              <Line type="monotone" dataKey="flights" stroke={C[1]} strokeWidth={2} dot={false} name="Flights" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Department Comparison">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentSavings}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="department" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="spend" fill={C[0]} name="Spend" />
              <Bar dataKey="savings" fill={C[1]} name="Savings" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </>
  );
}

function FinanceDashboard() {
  return (
    <>
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard title="Total Payments" value="$564K" change={12} icon={Wallet} />
        <MetricCard title="Outstanding" value="$18K" change={-8} icon={AlertCircle} />
        <MetricCard title="Savings" value="$163K" change={18} icon={PiggyBank} />
        <MetricCard title="Avg Cost/Trip" value="$245" change={-5} icon={TrendingUp} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Payment vs Usage Reconciliation">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={reconciliation}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="payments" stroke={C[0]} strokeWidth={2} name="Payments" />
              <Line type="monotone" dataKey="usage" stroke={C[1]} strokeWidth={2} name="Usage" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Outstanding by Department">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentSavings}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="department" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Bar dataKey="spend" fill={C[2]} name="Outstanding" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </>
  );
}

function TravelManagerDashboard() {
  return (
    <>
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard title="Total Bookings" value="5,830" change={12} icon={Plane} />
        <MetricCard title="Completed" value="4,920" change={10} />
        <MetricCard title="Top Route" value="NYC→LON" icon={MapPin} />
        <MetricCard title="Peak Ratio" value="62%" change={5} icon={TrendingUp} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Booking Trends">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke={C[0]} strokeWidth={2} name="Bookings" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Peak vs Non-Peak">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={peakData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="peak" fill={C[3]} name="Peak" />
              <Bar dataKey="nonPeak" fill={C[0]} name="Non-Peak" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </>
  );
}

export default function Dashboards() {
  const { role } = useDashboard();

  return (
    <div>
      <PageHeader
        title={`${role} Dashboard`}
        description={`Personalized view for ${role} role`}
      />
      {role === "Executive" && <ExecutiveDashboard />}
      {role === "Finance" && <FinanceDashboard />}
      {(role === "Travel Manager" || role === "Admin") && <TravelManagerDashboard />}
    </div>
  );
}
