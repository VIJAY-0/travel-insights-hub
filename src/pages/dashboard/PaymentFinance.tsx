import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { paymentHistory, reconciliation, departmentSavings } from "@/data/mock-data";
import { Wallet, AlertCircle, PiggyBank, History, FileCheck, MapPin, Building2, User, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)"];

export default function PaymentFinance() {
  // Independent filter states per schema requirements
  const [historyFilters, setHistoryFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [reconFilters, setReconFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // Filter configurations based strictly on Schema
  const financeFilterConfig: SectionFilter[] = [
    { id: "dateRange", type: "date-range", label: "Date Range" },
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "emp", type: "select", label: "Employee", icon: User, options: [] },
  ];

  return (
    <div className="space-y-10 pb-10">
      <PageHeader 
        title="Payment & Finance" 
        description="Comprehensive payments tracking, balance reconciliation, and savings oversight" 
      />

      {/* SECTION 1: PAYMENTS & BALANCES */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-blue-600" /> Payments & Financial Health
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase tracking-wider">
            Finance • Admin
          </span>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard title="Total Payments Made" value="$564,200" change={12} icon={Wallet} />
          <MetricCard title="Outstanding Balance" value="$18,450" change={-8} icon={AlertCircle} />
          <MetricCard title="Savings Achieved Till Date" value="$163,000" change={18} icon={PiggyBank} />
        </div>

        <ChartCard title="Payment History & Records Over Time">
          <SectionFilterBar filters={financeFilterConfig} value={historyFilters} onChange={setHistoryFilters} />
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
                    <TableCell className="text-xs">{p.date}</TableCell>
                    <TableCell className="text-xs">{p.department}</TableCell>
                    <TableCell className="text-xs">{p.method}</TableCell>
                    <TableCell className="text-right font-medium text-xs">${p.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={p.status === "Completed" ? "default" : p.status === "Pending" ? "secondary" : "outline"} className="text-[10px]">
                        {p.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ChartCard>
      </section>

      {/* SECTION 2: RECONCILIATION & SAVINGS */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" /> Reconciliation & Savings Analysis
          </h3>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase tracking-wider">
            Finance • Admin
          </span>
        </div>

        <SectionFilterBar filters={financeFilterConfig} value={reconFilters} onChange={setReconFilters} />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Payment vs Usage Reconciliation */}
          <ChartCard title="Payment vs Usage Reconciliation (Credits Consumed)">
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={reconciliation} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 16%, 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }}>
                  <Label value="Monthly Cycle" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} />
                </XAxis>
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`}>
                  <Label value="Value (USD)" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} />
                </YAxis>
                <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                <Legend verticalAlign="top" height={36}/>
                <Line type="monotone" dataKey="payments" stroke={C[0]} strokeWidth={3} dot={{ r: 4 }} name="Total Payments" />
                <Line type="monotone" dataKey="usage" stroke={C[1]} strokeWidth={3} dot={{ r: 4 }} name="Credits Consumed Value" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Savings Achieved Till Date */}
          <ChartCard title="Savings Achieved (Department / Employee)">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={departmentSavings} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="department" tick={{ fontSize: 10 }}>
                  <Label value="Reporting Entity" offset={-10} position="insideBottom" style={{ fontSize: '12px', fill: '#64748b' }} />
                </XAxis>
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v / 1000}K`}>
                   <Label value="Savings Amount" angle={-90} position="insideLeft" style={{ fontSize: '12px', fill: '#64748b' }} />
                </YAxis>
                <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                <Bar dataKey="savings" fill={C[1]} radius={[4, 4, 0, 0]} name="Savings Achieved" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>
    </div>
  );
}