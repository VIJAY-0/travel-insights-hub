import {bookings ,BookingRecord} from "./bookings"
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
  totalRemaining: number;
};
export const EmptyCreditStats = {
  totalPurchased: 0,
  totalConsumed: 0,
  totalBlocked: 0,
  totalRemaining: 0,
};

export type FlightStats = {
  totalFlightsTaken: number;
};
export const EmptyFlightStats = {
  totalFlightsTaken: 0,
};

export type SavingsStats = {
  totalSavingsAchieved: number;
  departmentalSavings: Record<string, number>;
};

export const EmptySavingsStats: SavingsStats = {
  totalSavingsAchieved: 0,
  departmentalSavings: {},
};


export function departmentSavingsStats(): SavingsStats {
  return buildDepartmentSavingsStats(bookings)
}



function buildDepartmentSavingsStats(
  records: BookingRecord[]
): SavingsStats {
  return records.reduce<SavingsStats>(
    (acc, record) => {
      const savings = record.savings ?? 0;
      const department = record.department || "Unknown";

      acc.totalSavingsAchieved += savings;

      acc.departmentalSavings[department] =
        (acc.departmentalSavings[department] ?? 0) + savings;
      return acc;
    },
    {
      totalSavingsAchieved: 0,
      departmentalSavings: {},
    }
  );

}
