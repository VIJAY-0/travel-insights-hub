export type PassStats = {
  total: number;
  byMonth: Record<number, number>;
  quarterly: number;   // month === 3
  halfYearly: number;  // month === 6
  annual: number;     // month === 12
  byType: Record<string, number>;
};

export const EmptyPassStats: PassStats = {
  total: 0,
  byMonth: {},
  quarterly: 0,
  halfYearly: 0,
  annual: 0,
  byType: {},
};

export  type CreditStats = {
  totalPurchased: number;
  totalConsumed: number;
  totalBlocked: number;
  remaining: number;
};
export const EmptyCreditStats = {
  totalPurchased: 0,
  totalConsumed: 0,
  totalBlocked: 0,
  remaining: 0,
};

export type FlightStats = {
  totalFlightsTaken: number;
};
export const EmptyFlightStats = {
  totalFlightsTaken: 0,
};

export type SavingsStats = {
  totalSavingsAchieved: number;
};
export const EmptySavingsStats = {
  totalSavingsAchieved: 0,
};
