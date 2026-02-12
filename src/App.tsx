import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardProvider } from "@/contexts/DashboardContext";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import OverallSummary from "./pages/OverallSummary";
import CreditUsage from "./pages/CreditUsage";
import BookingTravel from "./pages/BookingTravel";
import EmployeeDepartment from "./pages/EmployeeDepartment";
import RouteAnalysis from "./pages/RouteAnalysis";
import MMBReports from "./pages/MMBReports";
import PaymentFinance from "./pages/PaymentFinance";
import TaxFuel from "./pages/TaxFuel";
import Dashboards from "./pages/Dashboards";
import ExportReports from "./pages/ExportReports";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardProvider>
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<OverallSummary />} />
              <Route path="/credit-usage" element={<CreditUsage />} />
              <Route path="/booking-travel" element={<BookingTravel />} />
              <Route path="/employee-department" element={<EmployeeDepartment />} />
              <Route path="/route-analysis" element={<RouteAnalysis />} />
              <Route path="/mmb-reports" element={<MMBReports />} />
              <Route path="/payment-finance" element={<PaymentFinance />} />
              <Route path="/tax-fuel" element={<TaxFuel />} />
              <Route path="/dashboards" element={<Dashboards />} />
              <Route path="/export-reports" element={<ExportReports />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DashboardLayout>
        </DashboardProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
