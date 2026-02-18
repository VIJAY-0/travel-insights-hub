import {
  BarChart3, CreditCard, Plane, Users, MapPin, FileText,
  Wallet, Receipt, LayoutDashboard, Download, Settings
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Logo } from "@/components/Logo";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
} from "@/components/dashboard/ui/sidebar";
const navItems = [
  { title: "Overall Summary", url: "", icon: BarChart3 },
  { title: "Credit Usage", url: "credit-usage", icon: CreditCard },
  { title: "Booking & Travel", url: "booking-travel", icon: Plane },
  { title: "Employee & Dept", url: "employee-department", icon: Users },
  { title: "Route Analysis", url: "route-analysis", icon: MapPin },
  { title: "MMB Reports", url: "mmb-reports", icon: FileText },
  { title: "Payment & Finance", url: "payment-finance", icon: Wallet },
  { title: "Tax & Fuel", url: "tax-fuel", icon: Receipt },
  { title: "Dashboards", url: "dashboards", icon: LayoutDashboard },
  { title: "Export & Reports", url: "export-reports", icon: Download },
];


export function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-0">
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
              >
                <Settings className="h-4 w-4 shrink-0" />
                <span>Settings</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
