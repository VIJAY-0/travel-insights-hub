import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { MembershipStatus } from "../types";

interface Props {
  status: MembershipStatus;
}

export const StatusBadge = ({ status }: Props) => {
  const map = {
    VERIFIED: {
      label: "Verified",
      Icon: CheckCircle2,
      cls: "bg-green-50 text-green-600"
    },
    PENDING: {
      label: "Pending",
      Icon: Clock,
      cls: "bg-yellow-50 text-yellow-600"
    },
    ACTION_REQUIRED: {
      label: "Action Required",
      Icon: AlertCircle,
      cls: "bg-red-50 text-red-600"
    }
  }[status];

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${map.cls}`}
    >
      <map.Icon size={12} />
      {map.label}
    </div>
  );
};
