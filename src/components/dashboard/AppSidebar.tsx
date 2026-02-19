import { useEffect, useRef } from "react";
import {
  BarChart3, CreditCard, Plane, Users, MapPin, FileText,
  Wallet, Receipt, LayoutDashboard, Download, Settings
} from "lucide-react";
import { useSidebar } from "@/components/dashboard/ui/sidebar";
import { NavLink } from "@/components/NavLink";
import { Logo } from "@/components/Logo";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
} from "@/components/dashboard/ui/sidebar";


import { Smartphone, Monitor } from "lucide-react";
import { useMobilePreview } from "@/contexts/MobilePreviewContext";


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
  const sidebarRef = useRef<HTMLDivElement>(null);
    const { mobilePreview, toggleMobilePreview } = useMobilePreview();
  const {
    isMobile,
    openMobile,
    setOpenMobile,
    setOpen,
    open,
  } = useSidebar();

  useEffect(() => {
    // ✅ only when sidebar is shown as mobile popover
    if (!isMobile || !openMobile) return;

    const handler = (e: MouseEvent | TouchEvent) => {
      if (!sidebarRef.current) return;

      if (!sidebarRef.current.contains(e.target as Node)) {
        setOpenMobile(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isMobile, openMobile, setOpenMobile]);


  const handleClick = () =>{
    if (!isMobile || !openMobile) return;
    setOpen(false)
  }

  return (
    <div ref={sidebarRef}>
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
                        onClick={() => handleClick()}   // optional: close after nav
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
              <SidebarMenuButton
                onClick={toggleMobilePreview}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm"
              >
                {mobilePreview ? (
                  <>
                    <Monitor className="h-4 w-4 shrink-0" />
                    <span>Desktop preview (TESTING)</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="h-4 w-4 shrink-0" />
                    <span>Mobile preview (TESTING)</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="settings"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  onClick={() => setOpen(false)}
                >
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Settings</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
