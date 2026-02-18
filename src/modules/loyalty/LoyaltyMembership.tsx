import { useMemo, useState } from "react";
import {
  Membership,
  MembershipStatus,
  Category,
  ViewMode
} from "./types";

import { INITIAL_MEMBERSHIPS } from "./constants";

import { MembershipGrid } from "./components/MembershipGrid";
import { MembershipFilters } from "./components/MembershipFilters";
import { VerifiedMembershipList } from "./components/VerifiedMembershipList";
import { ProfilePanel } from "./components/ProfilePanel";
import { SettingsPanel } from "./components/SettingsPanel";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { AddMembershipForm } from "./components/AddMembershipForm";

export const LoyaltyMembership = () => {

  const [memberships, setMemberships] =
    useState<Membership[]>(INITIAL_MEMBERSHIPS);

  const [view, setView] = useState<ViewMode>("list");
  const [category, setCategory] = useState(Category.ALL);
  const [search, setSearch] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const [editing, setEditing] = useState<Membership>();
  const [formOpen, setFormOpen] = useState(false);

  const filtered = useMemo(() => {
    return memberships.filter(m => {
      const okCat =
        category === Category.ALL ||
        m.category === category;

      const okSearch =
        m.providerName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        m.membershipId
          .toLowerCase()
          .includes(search.toLowerCase());

      return okCat && okSearch;
    });
  }, [memberships, category, search]);

  const verified = useMemo(
    () =>
      memberships.filter(
        m => m.status === MembershipStatus.VERIFIED
      ),
    [memberships]
  );

  const save = (data: Partial<Membership>) => {

    if (data.id) {
      setMemberships(p =>
        p.map(m =>
          m.id === data.id ? { ...m, ...data } as Membership : m
        )
      );
    } else {
      setMemberships(p => [
        {
          ...data,
          id: crypto.randomUUID(),
          status: MembershipStatus.VERIFIED,
          isPrimary: false
        } as Membership,
        ...p
      ]);
    }

    setFormOpen(false);
    setEditing(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      

 <main className="max-w-7xl mx-auto p-6">

  {view === "list" && (
    <>
      {/* Header + Desktop Add button */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Memberships</h1>

        <button
          onClick={() => {
            setEditing(undefined);
            setFormOpen(true);
          }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl
                     bg-black text-white text-sm font-medium hover:bg-gray-800"
        >
          Add membership
        </button>
      </div>

      <MembershipFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />


            <div className="mt-6">
              <MembershipGrid
                data={filtered}
                privacy={privacy}
                onEdit={(m) => {
                  setEditing(m);
                  setFormOpen(true);
                }}
                onDelete={(id) =>
                  setMemberships(p =>
                    p.filter(m => m.id !== id)
                  )
                }
                onSetPrimary={(sel) =>
                  setMemberships(p =>
                    p.map(m =>
                      m.category === sel.category
                        ? { ...m, isPrimary: m.id === sel.id }
                        : m
                    )
                  )
                }
              />
            </div>
          </>
        )}

        {view === "verified" && (
          <VerifiedMembershipList data={verified} />
        )}

        {view === "profile" && <ProfilePanel />}

        {view === "settings" && (
          <SettingsPanel
            privacy={privacy}
            toggle={() => setPrivacy(v => !v)}
          />
        )}

      </main>

      <MobileBottomNav
        view={view}
        setView={setView}
        openForm={() => {
          setEditing(undefined);
          setFormOpen(true);
        }}
      />

      {formOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center">
          <div className="bg-white w-full md:max-w-2xl">
            <AddMembershipForm
              initial={editing}
              onSave={save}
              onClose={() => setFormOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
};
