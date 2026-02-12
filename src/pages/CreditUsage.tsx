import { PageHeader } from "@/components/dashboard/PageHeader";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { burnRateData, creditConsumption, peakData, futureExposure } from "@/data/mock-data";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from "recharts";

const C = ["hsl(215, 80%, 48%)", "hsl(142, 60%, 40%)", "hsl(38, 92%, 50%)", "hsl(340, 75%, 55%)", "hsl(262, 60%, 55%)"];

export default function CreditUsage() {
  return (
    <div>
      <PageHeader title="Credit Usage & Spend Tracking" description="Analyze credit consumption patterns and burn rates" />
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Credit Usage Breakdown">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={creditConsumption}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="flights" stackId="a" fill={C[0]} name="Flights" />
              <Bar dataKey="baggage" stackId="a" fill={C[1]} name="Baggage" />
              <Bar dataKey="upgrades" stackId="a" fill={C[2]} name="Upgrades" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Burn Rate Analysis">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={burnRateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="consumed" stroke={C[0]} strokeWidth={2} dot={false} name="Consumed" />
              <Line type="monotone" dataKey="allocated" stroke={C[1]} strokeWidth={2} strokeDasharray="5 5" dot={false} name="Allocated" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Peak vs Non-Peak Consumption">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={peakData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="peak" fill={C[3]} name="Peak" />
              <Bar dataKey="nonPeak" fill={C[4]} name="Non-Peak" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Future Exposure">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={futureExposure}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="blocked" stackId="1" fill={C[0]} fillOpacity={0.3} stroke={C[0]} name="Blocked" />
              <Area type="monotone" dataKey="pending" stackId="1" fill={C[2]} fillOpacity={0.3} stroke={C[2]} name="Pending" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
