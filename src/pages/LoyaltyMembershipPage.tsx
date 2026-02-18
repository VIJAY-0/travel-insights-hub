// src/pages/LoyaltyMembership.tsx

import { HomeNavbar } from "@/components/navbar/HomeNavbar";
import { LoyaltyMembership } from "@/modules/loyalty/LoyaltyMembership";

const LoyaltyMembershipPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />

      <main className="flex-1">
        <LoyaltyMembership />
      </main>
    </div>
  );
};

export default LoyaltyMembershipPage;
