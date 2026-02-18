import { Membership } from "../types";
import { MembershipCard } from "./MembershipCard";

interface Props {
  data: Membership[];
  privacy: boolean;
  onEdit(m: Membership): void;
  onDelete(id: string): void;
  onSetPrimary(m: Membership): void;
}

export const MembershipGrid = (props: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {props.data.map(m => (
        <MembershipCard
          key={m.id}
          membership={m}
          privacy={props.privacy}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
          onSetPrimary={props.onSetPrimary}
        />
      ))}
    </div>
  );
};
