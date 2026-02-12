import { PageHeader } from "@/components/dashboard/PageHeader";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { routeData, zoneData } from "@/data/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)"];

export default function RouteAnalysis() {
  return (
    <div>
      <PageHeader title="Route / Zone / Location Analysis" description="Travel patterns by route, zone and geography" />

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Route-wise Usage">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={routeData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="route" type="category" tick={{ fontSize: 10 }} width={80} />
              <Tooltip />
              <Bar dataKey="trips" fill={C[0]} radius={[0, 4, 4, 0]} name="Trips" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Route Details">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Route</TableHead>
                  <TableHead>Zone</TableHead>
                  <TableHead className="text-right">Trips</TableHead>
                  <TableHead className="text-right">Credits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {routeData.map((r) => (
                  <TableRow key={r.route}>
                    <TableCell className="font-medium">{r.route}</TableCell>
                    <TableCell>
                      <Badge variant={r.zone === "International" ? "default" : "secondary"} className="text-xs">
                        {r.zone}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{r.trips}</TableCell>
                    <TableCell className="text-right font-medium">{r.credits.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ChartCard>

        <ChartCard title="Zone-wise Usage" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={zoneData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="zone" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="trips" fill={C[0]} name="Trips" />
              <Bar dataKey="credits" fill={C[1]} name="Credits" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
