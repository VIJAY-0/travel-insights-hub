import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SectionFilterBar, type SectionFilter, type SectionFilterValue } from "@/components/dashboard/SectionsFilterBar";
import { routeData, zoneData, optimizationOpportunities } from "@/data/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Building2, Navigation, Lightbulb, Users } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)"];

export default function RouteAnalysis() {
  // 1. Independent filter states per schema requirements
  const [routeFilters, setRouteFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [zoneFilters, setZoneFilters] = useState<Record<string, SectionFilterValue | undefined>>({});
  const [patternFilters, setPatternFilters] = useState<Record<string, SectionFilterValue | undefined>>({});

  // 2. Filter Configurations based strictly on Schema
  const routeFilterConfig: SectionFilter[] = [
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "office", type: "select", label: "Office", icon: Building2, options: [] },
    { id: "city", type: "select", label: "City", icon: MapPin, options: [] },
    { id: "country", type: "select", label: "Country", icon: Globe, options: [] },
  ];

  const patternFilterConfig: SectionFilter[] = [
    { id: "emp", type: "select", label: "Employee", icon: Users, options: [] },
    { id: "dept", type: "select", label: "Department", icon: MapPin, options: [] },
    { id: "city", type: "select", label: "City", icon: MapPin, options: [] },
  ];

  return (
    <div className="space-y-10 pb-10">
      <PageHeader 
        title="Route / Zone / Location Analysis" 
        description="Travel patterns by route, zone and geography optimization" 
      />

      {/* SECTION 1: ROUTE-WISE USAGE 
          Schema: Bookings, credits used, savings per route
      */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-blue-600" /> Route-Wise Usage
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded uppercase tracking-wider">Travel Manager</span>
        </div>

        <SectionFilterBar filters={routeFilterConfig} value={routeFilters} onChange={setRouteFilters} />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ChartCard title="Trips by Route">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={routeData} layout="vertical" margin={{ left: 20, right: 30, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(220, 16%, 88%)" />
                  <XAxis type="number">
                     <Label value="Total Trips Taken" offset={-10} position="insideBottom" style={{ fontSize: '11px', fill: '#64748b' }} />
                  </XAxis>
                  <YAxis dataKey="route" type="category" tick={{ fontSize: 10 }} width={100} />
                  <Tooltip />
                  <Bar dataKey="trips" fill={C[0]} radius={[0, 4, 4, 0]} name="Trips" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
          <div className="lg:col-span-5">
            <ChartCard title="Route Efficiency Details">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Route</TableHead>
                      <TableHead className="text-right">Credits</TableHead>
                      <TableHead className="text-right">Savings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {routeData.slice(0, 6).map((r) => (
                      <TableRow key={r.route}>
                        <TableCell className="font-medium text-xs">{r.route}</TableCell>
                        <TableCell className="text-right text-xs font-medium">{r.credits.toLocaleString()}</TableCell>
                        <TableCell className="text-right text-xs text-emerald-600 font-bold">${(r.credits * 0.15).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* SECTION 2: ZONE-WISE USAGE 
          Schema: Popular zones, credits consumed
      */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-600" /> Zone-Wise Usage
          </h3>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase tracking-wider">Travel Manager</span>
        </div>

        <SectionFilterBar filters={routeFilterConfig.slice(0, 2)} value={zoneFilters} onChange={setZoneFilters} />

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard title="Trips & Credits by Zone">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={zoneData} margin={{ bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="zone" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Bar dataKey="trips" fill={C[0]} name="Trips" />
                <Bar dataKey="credits" fill={C[1]} name="Credits Consumed" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <div className="grid grid-cols-1 gap-4">
            <MetricCard title="Most Active Zone" value="APAC" icon={Globe} />
            <MetricCard title="International Credit Mix" value="42%" change={+5} icon={Navigation} />
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-xs font-bold text-blue-700 uppercase mb-1">Zone Alert</p>
                <p className="text-sm text-blue-800 font-medium">International credits consumed increased by 15% in EMEA.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRAVEL PATTERN ANALYSIS (Missing Component)
          Schema: Optimization opportunities
      */}
      <section className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" /> Travel Pattern Optimization
          </h3>
          <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded uppercase tracking-wider">Travel Manager</span>
        </div>

        <SectionFilterBar filters={patternFilterConfig} value={patternFilters} onChange={setPatternFilters} />

        <div className="grid gap-6 lg:grid-cols-1">
          <ChartCard title="Identified Optimization Opportunities">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pattern / Route</TableHead>
                  <TableHead>Observation</TableHead>
                  <TableHead>Recommended Action</TableHead>
                  <TableHead className="text-right">Potential Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {optimizationOpportunities.map((o, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-bold text-xs">{o.route}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{o.observation}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[10px] uppercase">{o.recommendation}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-bold text-emerald-600 text-xs">${o.potentialSavings.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ChartCard>
        </div>
      </section>
    </div>
  );
}