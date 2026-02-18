import { HomeNavbar } from "@/components/navbar/HomeNavbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />

      <main className="flex-1 p-4 sm:p-6 space-y-3">
        <h1 className="text-2xl font-semibold">
          Travel Insights Hub
        </h1>

        <p className="text-muted-foreground max-w-2xl">
          Welcome to the corporate travel analytics portal. Use the navigation
          above to access dashboards, reports and settings.
        </p>
      </main>
    </div>
  );
};

export default Home;
