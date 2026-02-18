import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { employeeUsage, departmentUsage, userActivity } from "@/data/mock-data";
import { Users, Building2, UserCheck, MapPin, Briefcase, TrendingUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/dashboard/ui/table";
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Legend
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)"];

export default function EmployeeDepartment() {
  // Independent filter states per schema requirements
  const [employeeFilters, setEmployeeFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [deptFilters, setDeptFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [activityFilters, setActivityFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // Filter configurations based on schema images
  const employeeFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "emp", type: "select", label: "Employee", icon: Users, options: [] },
  ];

  const deptFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
  ];

  return (
    <div className="space-y-10 pb-10">
      <PageHeader title="Employee & Department Level" description="Granular analytics for individual and team performance" />

      {/* SECTION 1: EMPLOYEE-LEVEL CREDIT USAGE 
          Schema: Credits consumed per employee, booking count, frequent traveler identification
      */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" /> Employee-Level Analytics
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase">Travel Manager • Finance</span>
        </div>

        <SectionFilterBar filters={employeeFilterConfig} value={employeeFilters} onChange={setEmployeeFilters} />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <MetricCard title="Active Travelers" value="340" change={8} icon={UserCheck} />
            <MetricCard title="Avg Credits/Employee" value="172" change={5} icon={TrendingUp} />
            <div className="p-4 bg-white border rounded-lg">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-tight">Frequent Traveler ID</p>
              <p className="text-sm text-muted-foreground italic">Top 5% accounts for 22% of spend</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ChartCard title="Credit Consumption by Employee (Top 8)">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={employeeUsage} layout="vertical" margin={{ left: 20, right: 30, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(220, 16%, 88%)" />
                  <XAxis type="number">
                    <Label value="Credits Consumed" offset={-10} position="insideBottom" style={{ fontSize: '11px', fill: '#64748b' }} />
                  </XAxis>
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={90} />
                  <Tooltip />
                  <Bar dataKey="credits" fill={C[0]} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEPARTMENT-LEVEL USAGE 
          Schema: Total credits used, bookings, savings per department
      */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600" /> Department-Level Usage
          </h3>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase">Finance • Travel Manager</span>
        </div>

        <SectionFilterBar filters={deptFilterConfig} value={deptFilters} onChange={setDeptFilters} />

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard title="Usage & Savings Comparison">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentUsage} margin={{ bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="department" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Bar dataKey="credits" fill={C[0]} name="Total Credits" />
                <Bar dataKey="savings" fill={C[1]} name="Total Savings" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Detailed Department Ranking">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department</TableHead>
                  <TableHead className="text-right">Bookings</TableHead>
                  <TableHead className="text-right">Credits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departmentUsage.slice(0, 5).map((d) => (
                  <TableRow key={d.department}>
                    <TableCell className="font-medium">{d.department}</TableCell>
                    <TableCell className="text-right">{d.bookings}</TableCell>
                    <TableCell className="text-right">{d.credits.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ChartCard>
        </div>
      </section>

      {/* SECTION 3: USER ACTIVITY 
          Schema: Total users, active vs inactive identification
      */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-600" /> User Activity Distribution
          </h3>
          <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2 py-1 rounded uppercase">Admin • Travel Manager</span>
        </div>

        <SectionFilterBar filters={deptFilterConfig} value={activityFilters} onChange={setActivityFilters} />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ChartCard title="Active vs. Inactive Accounts">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={userActivity} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={8} dataKey="value" label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}>
                    {userActivity.map((_, i) => <Cell key={i} fill={C[i % C.length]} />)}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center">
             <MetricCard title="Total Registered Users" value="1,245" icon={Users} className="mb-4" />
             <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
                <p className="text-xs font-bold text-orange-700 uppercase mb-1">Attention Required</p>
                <p className="text-sm text-orange-800 font-medium">12 inactive users found in Engineering</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}