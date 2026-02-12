import { PageHeader } from "@/components/dashboard/PageHeader";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { scheduledReports } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ExportReports() {
  return (
    <div>
      <PageHeader title="Export & Scheduled Reports" description="Manage automated report delivery" />

      <ChartCard
        title="Scheduled Reports"
        action={
          <Button size="sm" variant="outline" className="h-7 text-xs">
            <Download className="mr-1 h-3.5 w-3.5" />
            Export All
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
                <TableHead>Last Run</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduledReports.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.frequency}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{r.recipients}</TableCell>
                  <TableCell>{r.lastRun}</TableCell>
                  <TableCell>
                    <Badge variant={r.status === "Active" ? "default" : "secondary"} className="text-xs">
                      {r.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ChartCard>
    </div>
  );
}
