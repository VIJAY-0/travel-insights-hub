import { SidebarProvider, SidebarInset } from "@/components/dashboard/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { FilterBar } from "./FilterBar";
import { Outlet } from "react-router-dom";
import { MobilePreviewFrame } from "@/components/MobilePreviewFrame";


export function DashboardLayout() {


  return (
    <MobilePreviewFrame>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />

          <SidebarInset className="flex flex-col">
            <Header />
            <FilterBar />

            <main className="flex-1 overflow-auto p-4 sm:p-6">
              <Outlet />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </MobilePreviewFrame>
  );
}
