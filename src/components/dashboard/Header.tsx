import { Bell, User } from "lucide-react";
import { Button } from "@/components/dashboard/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/dashboard/ui/select";
import { SidebarTrigger } from "@/components/dashboard/ui/sidebar";
import { useDashboard, Role } from "@/contexts/DashboardContext";

export function Header() {
  const { role, setRole } = useDashboard();

  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-foreground" />
        <div className="hidden h-6 w-px bg-border sm:block" />
        <span className="hidden text-sm font-medium text-muted-foreground sm:block">
          Corporate Travel Analytics
        </span>
      </div>

      <div className="flex items-center gap-3">
        {role != "Null" &&
          <>
            View
            <Select value={role} onValueChange={(v) => setRole(v as Role)}>
              <SelectTrigger className="h-8 w-[150px] text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Executive">Executive</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Travel Manager">Travel Manager</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </>
        }

        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <Bell className="h-4 w-4" />
        </Button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          <User className="h-4 w-4" />
        </div>
      </div>

    </header>
  );
}
