import { Building, User, Globe } from "lucide-react";

export const ProfilePanel = () => (
  <div className="max-w-xl mx-auto space-y-6">
    <div className="text-center">
      <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto flex items-center justify-center text-3xl font-black">
        JD
      </div>

      <h2 className="mt-3 font-black text-xl">
        John Quincy Doe
      </h2>
      <p className="text-gray-400">
        Enterprise Tier Traveler
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl space-y-4">
      <Row icon={Building} label="Organization" val="OmVrti Corp" />
      <Row icon={User} label="Legal Name" val="John Q Doe" />
      <Row icon={Globe} label="Home Base" val="SFO" />
    </div>
  </div>
);

const Row = ({ icon: Icon, label, val }: any) => (
  <div className="flex gap-3 items-center">
    <Icon size={18} />
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-bold">{val}</p>
    </div>
  </div>
);
