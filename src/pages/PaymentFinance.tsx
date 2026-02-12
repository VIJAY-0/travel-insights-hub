import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { paymentHistory, reconciliation, departmentSavings } from "@/data/mock-data";
import { Wallet, AlertCircle, PiggyBank } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)"];

export default function PaymentFinance() {
  return (
    <div>
      <PageHeader title="Payment & Finance" description="Payments, balances, savings and reconciliation" />

      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <MetricCard title="Total Payments" value="$564K" change={12} icon={Wallet} />
        <MetricCard title="Outstanding" value="$18K" change={-8} icon={AlertCircle} />
        <MetricCard title="Savings to Date" value="$163K" change={18} icon={PiggyBank} />
      </div>

      <div className="mb-4">
        <ChartCard title="Payment History">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-mono text-xs">{p.id}</TableCell>
                    <TableCell>{p.date}</TableCell>
                    <TableCell>{p.department}</TableCell>
                    <TableCell>{p.method}</TableCell>
                    <TableCell className="text-right font-medium">${p.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={p.status === "Completed" ? "default" : p.status === "Pending" ? "secondary" : "outline"} className="text-xs">
                        {p.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ChartCard>
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

        <ChartCard title="Savings by Department">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentSavings}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="department" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Bar dataKey="savings" fill={C[1]} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
