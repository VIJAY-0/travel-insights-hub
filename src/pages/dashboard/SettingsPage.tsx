import { PageHeader } from "@/components/dashboard/PageHeader";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { accessMatrix } from "@/data/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/dashboard/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/dashboard/ui/table";
import { Badge } from "@/components/dashboard/ui/badge";

function AccessCell({ value }: { value: string }) {
  if (value === "-" || value === "None") {
    return <span className="text-xs text-muted-foreground">—</span>;
  }
  const parts = value.split("/");
  return (
    <div className="flex flex-wrap gap-1">
      {parts.map((p) => (
        <Badge key={p} variant={p === "Full" ? "default" : "secondary"} className="text-[10px]">
          {p.trim()}
        </Badge>
      ))}
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings – Access Control" description="Manage role-based permissions for reports and dashboards" />

      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
        </TabsList>

        <TabsContent value="reports">
          <ChartCard title="Access Control Matrix – Reports">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset</TableHead>
                    <TableHead>Executive</TableHead>
                    <TableHead>Finance</TableHead>
                    <TableHead>Travel Manager</TableHead>
                    <TableHead>Admin</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accessMatrix.map((row) => (
                    <TableRow key={row.asset}>
                      <TableCell className="font-medium">{row.asset}</TableCell>
                      <TableCell><AccessCell value={row.executive} /></TableCell>
                      <TableCell><AccessCell value={row.finance} /></TableCell>
                      <TableCell><AccessCell value={row.travelMgr} /></TableCell>
                      <TableCell><AccessCell value={row.admin} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ChartCard>
        </TabsContent>

        <TabsContent value="dashboards">
          <ChartCard title="Access Control Matrix – Dashboards">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dashboard</TableHead>
                    <TableHead>Executive</TableHead>
                    <TableHead>Finance</TableHead>
                    <TableHead>Travel Manager</TableHead>
                    <TableHead>Admin</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Executive Dashboard</TableCell>
                    <TableCell><AccessCell value="View" /></TableCell>
                    <TableCell><AccessCell value="-" /></TableCell>
                    <TableCell><AccessCell value="-" /></TableCell>
                    <TableCell><AccessCell value="Full" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Finance Dashboard</TableCell>
                    <TableCell><AccessCell value="-" /></TableCell>
                    <TableCell><AccessCell value="View/Export" /></TableCell>
                    <TableCell><AccessCell value="-" /></TableCell>
                    <TableCell><AccessCell value="Full" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Travel Manager Dashboard</TableCell>
                    <TableCell><AccessCell value="-" /></TableCell>
                    <TableCell><AccessCell value="-" /></TableCell>
                    <TableCell><AccessCell value="View/Export" /></TableCell>
                    <TableCell><AccessCell value="Full" /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </ChartCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
