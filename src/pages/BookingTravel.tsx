import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { monthlyTrend, advanceVsShort, ongoingTravel } from "@/data/mock-data";
import { Plane, CheckCircle, Navigation, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)"];

export default function BookingTravel() {
  return (
    <div>
      <PageHeader title="Booking & Travel Visibility" description="Track bookings, ongoing travel and future reservations" />

      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard title="Total Bookings" value="5,830" change={12} icon={Plane} />
        <MetricCard title="Completed" value="4,920" change={10} icon={CheckCircle} />
        <MetricCard title="Ongoing" value="47" icon={Navigation} />
        <MetricCard title="Future" value="863" change={18} icon={Calendar} />
      </div>

      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing Travel</TabsTrigger>
          <TabsTrigger value="advance">Advance vs Short</TabsTrigger>
        </TabsList>

        <TabsContent value="trends">
          <ChartCard title="Booking Trends">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="bookings" stroke={C[0]} strokeWidth={2} name="Bookings" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </TabsContent>

        <TabsContent value="ongoing">
          <ChartCard title="Live Travel Status">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Departure</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ongoingTravel.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="font-mono text-xs">{t.id}</TableCell>
                      <TableCell>{t.employee}</TableCell>
                      <TableCell>{t.department}</TableCell>
                      <TableCell>{t.route}</TableCell>
                      <TableCell>{t.departure}</TableCell>
                      <TableCell>
                        <Badge variant={t.status === "In Transit" ? "default" : "secondary"} className="text-xs">
                          {t.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ChartCard>
        </TabsContent>

        <TabsContent value="advance">
          <ChartCard title="Advance vs Short-Notice Bookings">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={advanceVsShort}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="advance" fill={C[0]} name="Advance" />
                <Bar dataKey="shortNotice" fill={C[2]} name="Short Notice" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
