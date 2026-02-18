import {
  LayoutDashboard,
  User,
  Wallet,
  FileText,
  Sliders,
  Share2,
  Award,
  Clock,
  LogOut,
  Menu,
} from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { Logo } from "@/components/Logo";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { title: "Dashboards", to: "/dashboard/dashboards", icon: LayoutDashboard },

  { title: "Edit Profile", to: "/profile", icon: User },
  { title: "My Budget", to: "/budget", icon: Wallet },
  { title: "My Travel Policy", to: "/travel-policy", icon: FileText },
  { title: "My Travel Preferences", to: "/travel-preferences", icon: Sliders },
  { title: "Social Media", to: "/social-media", icon: Share2 },
  { title: "Loyalty Membership", to: "/loyalty-membership", icon: Award },
  { title: "Travel History", to: "/travel-history", icon: Clock },
];

export function HomeNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex h-14 items-center justify-between px-4">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop navbar (sidebar look & feel) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              activeClassName="bg-muted text-foreground font-medium"
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span>{item.title}</span>
            </NavLink>
          ))}

          <NavLink
            to="/logout"
            className="ml-2 flex items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            <span>Log Out</span>
          </NavLink>
        </nav>

        {/* Mobile menu (sliding drawer) */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0">

            {/* Header */}
            <SheetHeader className="border-b px-4 h-14 flex flex-row items-center justify-between">
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>

            {/* Menu – same visual language as AppSidebar */}
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-auto p-3">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.to}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                      activeClassName="bg-muted font-medium"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Footer action */}
              <div className="border-t p-3">
                <NavLink
                  to="/logout"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 shrink-0" />
                  <span>Log Out</span>
                </NavLink>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
