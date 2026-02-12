import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function ChartCard({ title, children, className, action }: ChartCardProps) {
  return (
    <Card className={cn("border border-border", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4 sm:px-5">
        <CardTitle className="text-sm font-semibold text-foreground">{title}</CardTitle>
        {action}
      </CardHeader>
      <CardContent className="px-4 pb-4 sm:px-5 sm:pb-5">
        {children}
      </CardContent>
    </Card>
  );
}
