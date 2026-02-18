import { Membership } from "../types";
import { StatusBadge } from "./StatusBadge";

export const VerifiedMembershipList = ({
  data
}: { data: Membership[] }) => {

  return (
    <div className="space-y-4">
      {data.map(m => (
        <div
          key={m.id}
          className="flex justify-between bg-white p-4 rounded-xl"
        >
          <div className="flex gap-3">
            <img src={m.logoUrl} className="w-10" />
            <div>
              <p className="font-bold">{m.providerName}</p>
              <p className="text-xs text-gray-400">
                {m.membershipId}
              </p>
            </div>
          </div>

          <StatusBadge status={m.status} />
        </div>
      ))}
    </div>
  );
};
