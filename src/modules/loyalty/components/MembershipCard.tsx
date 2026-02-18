import { useEffect, useRef, useState } from "react";
import { MoreVertical, Star, Trash2, Edit3, Crown } from "lucide-react";
import { Membership, Category } from "../types";
import { StatusBadge } from "./StatusBadge";

interface Props {
  membership: Membership;
  privacy: boolean;
  onEdit(m: Membership): void;
  onDelete(id: string): void;
  onSetPrimary(m: Membership): void;
}

export const MembershipCard = ({
  membership,
  privacy,
  onEdit,
  onDelete,
  onSetPrimary
}: Props) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const mask = privacy
    ? "•••• •••• " + membership.membershipId.slice(-4)
    : membership.membershipId;

  const detail =
    membership.category === Category.AIRLINES
      ? membership.frequentFlyerProgram
      : membership.category === Category.HOTELS
      ? membership.tier
      : membership.corporateCode;

  return (
    <div
      className="
        relative rounded-2xl border bg-white p-4
        transition-all duration-200
        hover:shadow-lg hover:-translate-y-[2px]
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-4 items-center">
          {/* Bigger logo */}
          <div className="w-14 h-14 rounded-xl bg-gray-50 border flex items-center justify-center overflow-hidden">
            <img
              src={membership.logoUrl}
              alt={membership.providerName}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm truncate">
                {membership.providerName}
              </p>

              {membership.isPrimary && (
                <span className="flex items-center gap-1 text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  <Crown size={12} /> Primary
                </span>
              )}
            </div>

            <p className="text-xs text-gray-500 truncate">
              {detail || "—"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-gray-400">
            Membership ID
          </p>

          <p
            className={`font-mono text-sm transition ${
              privacy ? "blur-[4px] select-none" : ""
            }`}
          >
            {mask}
          </p>
        </div>

        <StatusBadge status={membership.status} />
      </div>

      {/* Menu */}
      {open && (
        <div
          ref={menuRef}
          className="
            absolute right-3 top-14 z-30
            w-44 rounded-xl border bg-white shadow-xl
            overflow-hidden
            animate-in fade-in zoom-in-95
          "
        >
          <button
            className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50"
            onClick={() => {
              setOpen(false);
              onEdit(membership);
            }}
          >
            <Edit3 size={14} /> Edit
          </button>

          {!membership.isPrimary && (
            <button
              className="w-full px-4 py-2 text-sm flex items-center gap-2 text-blue-600 hover:bg-blue-50"
              onClick={() => {
                setOpen(false);
                onSetPrimary(membership);
              }}
            >
              <Star size={14} /> Make Primary
            </button>
          )}

          <button
            className="w-full px-4 py-2 text-sm flex items-center gap-2 text-red-600 hover:bg-red-50"
            onClick={() => {
              setOpen(false);
              onDelete(membership.id);
            }}
          >
            <Trash2 size={14} /> Remove
          </button>
        </div>
      )}
    </div>
  );
};
