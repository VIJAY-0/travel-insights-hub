import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { employeeUsage, departmentSavings, userActivity } from "@/data/mock-data";
import { Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)"];

export default function EmployeeDepartment() {
  return (
    <div>
      <PageHeader title="Employee & Department Level" description="Individual and department-level usage analytics" />

      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <MetricCard title="Active Travelers" value="340" change={8} icon={Users} />
        <MetricCard title="Avg Credits/Employee" value="172" change={5} />
        <MetricCard title="Top Department" value="Engineering" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Employee Credit Usage (Top 8)">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={employeeUsage} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={90} />
              <Tooltip />
              <Bar dataKey="credits" fill={C[0]} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Employee Ranking">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Employee</TableHead>
                  <TableHead>Dept</TableHead>
                  <TableHead className="text-right">Credits</TableHead>
                  <TableHead className="text-right">Trips</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeUsage.map((e, i) => (
                  <TableRow key={e.name}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell>{e.name}</TableCell>
                    <TableCell className="text-muted-foreground">{e.department}</TableCell>
                    <TableCell className="text-right font-medium">{e.credits.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{e.trips}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ChartCard>

        <ChartCard title="Department Usage Comparison">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentSavings}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="department" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="credits" fill={C[0]} name="Credits Used" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="User Activity Distribution">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={userActivity} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {userActivity.map((_, i) => (
                  <Cell key={i} fill={C[i % C.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
