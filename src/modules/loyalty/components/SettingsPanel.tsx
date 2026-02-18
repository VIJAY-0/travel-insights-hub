import { Shield, ShieldOff } from "lucide-react";

export const SettingsPanel = ({
  privacy,
  toggle
}: {
  privacy: boolean;
  toggle(): void;
}) => (
  <div className="max-w-xl mx-auto bg-white rounded-2xl p-4">
    <button
      onClick={toggle}
      className="w-full flex justify-between items-center"
    >
      <div className="flex gap-3 items-center">
        {privacy ? <ShieldOff /> : <Shield />}
        <div>
          <p className="font-bold">Privacy Mode</p>
          <p className="text-xs text-gray-400">
            Hide sensitive IDs
          </p>
        </div>
      </div>

      <div
        className={`w-10 h-5 rounded-full ${
          privacy ? "bg-red-500" : "bg-gray-300"
        }`}
      />
    </button>
  </div>
);
