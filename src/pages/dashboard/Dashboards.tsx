import { useEffect, useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { useDashboard } from "@/contexts/DashboardContext";
import { monthlyTrend, departmentSavings, reconciliation, routeData, peakData, futureExposure } from "@/data/mock-data";
import { 
  CreditCard, Plane, Wallet, TrendingUp, AlertCircle, 
  PiggyBank, MapPin, Building2, User, Calendar, Globe 
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)"];

/**
 * Filter configurations based on Schema requirements
 * cite: image_1f8a0f.png
 */
const deptOfficeFilters: SectionFilter[] = [
  { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
  { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
];

const fullFilters: SectionFilter[] = [
  ...deptOfficeFilters,
  { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
];

// --- 1. EXECUTIVE DASHBOARD ---
// Schema: High-level metrics, trends, top departments, route usage
// cite: image_1f8a0f.png
function ExecutiveDashboard() {

  const [trendFilters, setTrendFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [routeFilters, setRouteFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard title="Total Credits Purchased" value="61,200" change={8} icon={CreditCard} />
        <MetricCard title="Total Flights Taken" value="4,870" change={15} icon={Plane} />
        <MetricCard title="Total Savings Achieved" value="$163K" change={18} icon={PiggyBank} />
        <MetricCard title="Current Pass Inventory" value="1,245" icon={Wallet} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Overall Volume Trends">
          <SectionFilterBar filters={deptOfficeFilters} value={trendFilters} onChange={setTrendFilters} />
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="credits" stroke={C[0]} strokeWidth={3} name="Credits Consumed" />
              <Line type="monotone" dataKey="flights" stroke={C[1]} strokeWidth={3} name="Flights Taken" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Top Route Usage">
          <SectionFilterBar filters={[{ id: "zone", type: "select", label: "Zone", icon: Globe, options: [] }]} value={routeFilters} onChange={setRouteFilters} />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={routeData.slice(0, 5)} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="route" type="category" tick={{ fontSize: 10 }} width={80} />
              <Tooltip />
              <Bar dataKey="trips" fill={C[2]} radius={[0, 4, 4, 0]} name="Trips" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

// --- 2. FINANCE DASHBOARD ---
// Schema: Payment vs usage, outstanding balances, savings
// cite: image_1f8a0f.png
function FinanceDashboard() {
  const [reconFilters, setReconFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard title="Total Payments Made" value="$564K" change={12} icon={Wallet} />
        <MetricCard title="Outstanding Balance" value="$18,450" change={-8} icon={AlertCircle} />
        <MetricCard title="Departmental Savings" value="$163K" change={18} icon={PiggyBank} />
        <MetricCard title="Avg Tax/Booking" value="$26.60" icon={TrendingUp} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Payment vs Usage Reconciliation">
          <SectionFilterBar filters={fullFilters} value={reconFilters} onChange={setReconFilters} />
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={reconciliation} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="payments" stroke={C[0]} strokeWidth={3} name="Payments Made" />
              <Line type="monotone" dataKey="usage" stroke={C[1]} strokeWidth={3} name="Credits Consumed" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Outstanding Balances by Dept">
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={departmentSavings}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="department" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip />
              <Bar dataKey="spend" fill={C[3]} name="Outstanding Amount" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

// --- 3. TRAVEL MANAGER / ADMIN DASHBOARD ---
// Schema: Bookings, employee usage, peak periods, future exposure
// cite: image_1f8a0f.png
function TravelManagerDashboard() {
  const [tmFilters, setTmFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard title="Total Bookings Made" value="5,830" change={12} icon={Plane} />
        <MetricCard title="Ongoing Travelers" value="42" icon={User} />
        <MetricCard title="Peak Ratio" value="62%" change={5} icon={TrendingUp} />
        <MetricCard title="Future Exposure" value="1,450" icon={Calendar} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Peak vs Non-Peak Consumption">
          <SectionFilterBar filters={fullFilters} value={tmFilters} onChange={setTmFilters} />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={peakData} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="peak" fill={C[3]} name="Peak (Business Hours)" />
              <Bar dataKey="nonPeak" fill={C[0]} name="Off-Peak" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Future Exposure (Balance vs. Usage)">
          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={futureExposure} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="blocked" stackId="1" stroke={C[0]} fill={C[0]} fillOpacity={0.2} name="Current Balance" />
              <Area type="monotone" dataKey="pending" stackId="1" stroke={C[2]} fill={C[2]} fillOpacity={0.2} name="Expected Usage" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

export default function Dashboards() {

    const {role, setRole} =useDashboard()
  useEffect(()=>{
    setRole("Admin")
  },[])
  useEffect(() => {
  return () => {
    setRole("Null");
  };
}, []);


  return (
    <div className="space-y-6">
      <PageHeader
        title={`${role} Dashboard`}
        description={`Personalized view for ${role} role showing key metrics and trends`}
      />
      
      {role === "Executive" && <ExecutiveDashboard />}
      {role === "Finance" && <FinanceDashboard />}
      {(role === "Travel Manager" || role === "Admin") && <TravelManagerDashboard />}
    </div>
  );
}