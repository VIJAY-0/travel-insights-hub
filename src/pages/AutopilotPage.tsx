import { HomeNavbar } from "@/components/navbar/HomeNavbar";
import { AutoPilotBookingView } from "@/components/autopilot/AutopilotBookingView";

const AutoPilotBookingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />

      <main className="flex-1 overflow-hidden">
        <AutoPilotBookingView />
      </main>
    </div>
  );
};

export default AutoPilotBookingPage;
