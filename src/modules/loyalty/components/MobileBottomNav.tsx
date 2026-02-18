import { Home, CheckCircle2, User, Settings, Plus } from "lucide-react";
import { ViewMode } from "../types";

interface Props {
  view: ViewMode;
  setView(v: ViewMode): void;
  openForm(): void;
}

export const MobileBottomNav = ({
  view,
  setView,
  openForm
}: Props) => {

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white flex justify-around items-center md:hidden">
      <Nav id="list" icon={Home} view={view} setView={setView} />
      <Nav id="verified" icon={CheckCircle2} view={view} setView={setView} />

      <button
        onClick={openForm}
        className="w-14 h-14 bg-blue-600 text-white rounded-full -mt-10 flex items-center justify-center"
      >
        <Plus />
      </button>

      <Nav id="profile" icon={User} view={view} setView={setView} />
      <Nav id="settings" icon={Settings} view={view} setView={setView} />
    </nav>
  );
};

const Nav = ({ id, icon: Icon, view, setView }: any) => (
  <button
    onClick={() => setView(id)}
    className={view === id ? "text-blue-600" : "text-gray-400"}
  >
    <Icon />
  </button>
);
