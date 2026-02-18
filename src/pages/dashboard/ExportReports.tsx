import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { scheduledReports, accessLogs } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, CalendarClock, Lock, Users, Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ExportReports() {
  // Independent filter states per schema requirements
  const [reportFilters, setReportFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [accessFilters, setAccessFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // Filter configuration strictly matching schema "Role-based" requirements
  const roleBasedFilterConfig: SectionFilter[] = [
    { id: "role", type: "select", label: "Access Level", icon: ShieldCheck, options: [
      { label: "Executive", value: "exec" },
      { label: "Finance", value: "fin" },
      { label: "Travel Manager", value: "tm" },
      { label: "Admin", value: "admin" }
    ]},
    { id: "dept", type: "select", label: "Department", icon: Users, options: [] },
  ];

  return (
    <div className="space-y-10 pb-10">
      <PageHeader 
        title="Export & Access Control" 
        description="Manage automated report delivery and monitor role-based visibility" 
      />

      {/* SECTION 1: SCHEDULED REPORTS 
          Schema: Reports exported daily/weekly/monthly for All Roles
      */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <CalendarClock className="w-5 h-5 text-blue-600" /> Scheduled Report Exports
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase tracking-wider">
            All Roles
          </span>
        </div>

        <SectionFilterBar filters={roleBasedFilterConfig} value={reportFilters} onChange={setReportFilters} />

        <ChartCard
          title="Automated Distribution Logs"
          action={
            <Button size="sm" variant="outline" className="h-7 text-xs">
              <Download className="mr-1 h-3.5 w-3.5" />
              Download All
            </Button>
          }
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Target Role</TableHead>
                  <TableHead>Last Run</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduledReports.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium text-xs">{r.name}</TableCell>
                    <TableCell className="text-xs">
                      <Badge variant="outline" className="font-normal capitalize">{r.frequency}</Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{r.recipients}</TableCell>
                    <TableCell className="text-xs font-semibold">{r.targetRole || "All"}</TableCell>
                    <TableCell className="text-xs">{r.lastRun}</TableCell>
                    <TableCell>
                      <Badge variant={r.status === "Active" ? "default" : "secondary"} className="text-[10px]">
                        {r.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ChartCard>
      </section>

      {/* SECTION 2: ROLE-BASED ACCESS CONTROL (Missing Component) 
          Schema: Track who can see what (Admin target audience)
      */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" /> Role-Based Visibility Tracker
          </h3>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase tracking-wider">
            Admin Only
          </span>
        </div>

        <SectionFilterBar filters={roleBasedFilterConfig} value={accessFilters} onChange={setAccessFilters} />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ChartCard title="Data Visibility & Access Logs">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User / Admin</TableHead>
                      <TableHead>Assigned Role</TableHead>
                      <TableHead>Scope of Access</TableHead>
                      <TableHead>Last Activity</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accessLogs.map((log, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-xs font-bold">{log.user}</TableCell>
                        <TableCell className="text-xs">{log.role}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{log.scope}</TableCell>
                        <TableCell className="text-xs italic">{log.lastActive}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ChartCard>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                <p className="text-xs font-bold text-emerald-700 uppercase mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" /> Security Audit
                </p>
                <p className="text-sm text-emerald-800 font-medium">100% of data views are currently restricted by role-based scopes.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Access Breakdown</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span>Full Admin</span>
                    <span className="font-bold">04</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Finance Only</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Executive View</span>
                    <span className="font-bold">08</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}