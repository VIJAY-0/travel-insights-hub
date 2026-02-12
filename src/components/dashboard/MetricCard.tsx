import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export function MetricCard({ title, value, change, changeLabel, icon: Icon, className, onClick }: MetricCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <Card
      className={cn(
        "cursor-pointer transition-shadow hover:shadow-md border border-border",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {title}
            </p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {change !== undefined && (
              <div className="flex items-center gap-1">
                {isPositive && <TrendingUp className="h-3.5 w-3.5 text-success" />}
                {isNegative && <TrendingDown className="h-3.5 w-3.5 text-destructive" />}
                {!isPositive && !isNegative && <Minus className="h-3.5 w-3.5 text-muted-foreground" />}
                <span
                  className={cn(
                    "text-xs font-medium",
                    isPositive && "text-success",
                    isNegative && "text-destructive",
                    !isPositive && !isNegative && "text-muted-foreground"
                  )}
                >
                  {isPositive && "+"}
                  {change}%
                </span>
                {changeLabel && (
                  <span className="text-xs text-muted-foreground">{changeLabel}</span>
                )}
              </div>
            )}
          </div>
          {Icon && (
            <div className="rounded-lg bg-accent p-2.5">
              <Icon className="h-5 w-5 text-accent-foreground" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
