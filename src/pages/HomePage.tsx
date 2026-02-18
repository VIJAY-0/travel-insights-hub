import { HomeNavbar } from "@/components/navbar/HomeNavbar";
import Home from "@/modules/home/Home";
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />

      <main className="flex-1 p-4 sm:p-6 space-y-3">
        <Home/>
      </main>
    </div>
  );
};

export default HomePage;
