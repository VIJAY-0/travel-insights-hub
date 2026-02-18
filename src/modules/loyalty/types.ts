export enum MembershipStatus {
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
  ACTION_REQUIRED = "ACTION_REQUIRED"
}

export enum Category {
  AIRLINES = "Airlines",
  HOTELS = "Hotels",
  CABS = "Cabs",
  ALL = "All"
}

export interface Membership {
  id: string;
  providerName: string;
  category: Category;
  membershipId: string;
  status: MembershipStatus;
  isPrimary: boolean;

  logoUrl?: string;
  frequentFlyerProgram?: string;
  tier?: string;
  corporateCode?: string;
}

export type ViewMode =
  | "list"
  | "verified"
  | "profile"
  | "settings";
