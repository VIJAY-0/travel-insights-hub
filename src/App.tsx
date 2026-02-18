import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardProvider } from "@/contexts/DashboardContext";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

import Home from "./pages/Home";
import OverallSummary from "./pages/dashboard/OverallSummary";
import CreditUsage from "./pages/dashboard/CreditUsage";
import BookingTravel from "./pages/dashboard/BookingTravel";
import EmployeeDepartment from "./pages/dashboard/EmployeeDepartment";
import RouteAnalysis from "./pages/dashboard/RouteAnalysis";
import MMBReports from "./pages/dashboard/MMBReports";
import PaymentFinance from "./pages/dashboard/PaymentFinance";
import TaxFuel from "./pages/dashboard/TaxFuel";
import Dashboards from "./pages/dashboard/Dashboards";
import ExportReports from "./pages/dashboard/ExportReports";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./pages/dashboard/NotFound";


import LoyaltyMembershipPage from "./pages/LoyaltyMembershipPage"


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/loyalty-membership" element={<LoyaltyMembershipPage />} />

    <Route
      path="/dashboard"
      element={
        <DashboardProvider>
          <DashboardLayout />
        </DashboardProvider>
      }
    >
      <Route index element={<OverallSummary />} />
      <Route path="credit-usage" element={<CreditUsage />} />
      <Route path="booking-travel" element={<BookingTravel />} />
      <Route path="employee-department" element={<EmployeeDepartment />} />
      <Route path="route-analysis" element={<RouteAnalysis />} />
      <Route path="mmb-reports" element={<MMBReports />} />
      <Route path="payment-finance" element={<PaymentFinance />} />
      <Route path="tax-fuel" element={<TaxFuel />} />
      <Route path="dashboards" element={<Dashboards />} />
      <Route path="export-reports" element={<ExportReports />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
