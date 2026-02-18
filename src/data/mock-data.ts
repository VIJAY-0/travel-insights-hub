// =============================================
// MOCK DATA – Corporate Travel Analytics
// Replace with real API calls when ready
// =============================================





// @/data/mock-data.ts

// --- OVERALL SUMMARY DATA ---

// export const monthlyTrend = [
//   { month: "Jan", credits: 4500, consumed: 4000, flights: 320 },
//   { month: "Feb", credits: 5200, consumed: 4800, flights: 380 },
//   { month: "Mar", credits: 4800, consumed: 4600, flights: 350 },
//   { month: "Apr", credits: 6100, consumed: 5800, flights: 420 },
//   { month: "May", credits: 5900, consumed: 5400, flights: 400 },
//   { month: "Jun", credits: 6500, consumed: 6200, flights: 480 },
// ];

// export const passTypes = [
//   { name: "Annual Pass", value: 840 },
//   { name: "Monthly Pass", value: 405 },
// ];

// export const flightTypeData = [
//   { month: "Jan", domestic: 240, international: 80 },
//   { month: "Feb", domestic: 290, international: 90 },
//   { month: "Mar", domestic: 260, international: 90 },
//   { month: "Apr", domestic: 310, international: 110 },
//   { month: "May", domestic: 300, international: 100 },
//   { month: "Jun", domestic: 350, international: 130 },
// ];

// export const departmentSavings = [
//   { department: "Sales", savings: 45000 },
//   { department: "Engineering", savings: 38000 },
//   { department: "Marketing", savings: 32000 },
//   { department: "HR", savings: 28000 },
//   { department: "Finance", savings: 20000 },
// ];

// // --- CREDIT USAGE & SPEND TRACKING DATA ---

// export const creditConsumption = [
//   { month: "Jan", flights: 3000, baggage: 600, upgrades: 400 },
//   { month: "Feb", flights: 3500, baggage: 800, upgrades: 500 },
//   { month: "Mar", flights: 3200, baggage: 700, upgrades: 700 },
//   { month: "Apr", flights: 4000, baggage: 1000, upgrades: 800 },
// ];

// export const burnRateData = [
//   { month: "Week 1", consumed: 1200, allocated: 1400 },
//   { month: "Week 2", consumed: 1550, allocated: 1400 },
//   { month: "Week 3", consumed: 1300, allocated: 1400 },
//   { month: "Week 4", consumed: 1700, allocated: 1400 },
// ];

// export const peakData = [
//   { day: "Mon", peak: 850, nonPeak: 300 },
//   { day: "Tue", peak: 920, nonPeak: 250 },
//   { day: "Wed", peak: 880, nonPeak: 280 },
//   { day: "Thu", peak: 950, nonPeak: 200 },
//   { day: "Fri", peak: 700, nonPeak: 450 },
//   { day: "Sat", peak: 200, nonPeak: 600 },
//   { day: "Sun", peak: 150, nonPeak: 550 },
// ];

// export const futureExposure = [
//   { month: "Jul", blocked: 2500, pending: 1200 },
//   { month: "Aug", blocked: 2100, pending: 1800 },
//   { month: "Sep", blocked: 1800, pending: 2500 },
//   { month: "Oct", blocked: 1200, pending: 3000 },
// ];

// --- BOOKING & TRAVEL VISIBILITY DATA ---

export const travelStatusMetrics = {
  total: "1,240",
  completed: "980",
  ongoing: "42",
  future: "218",
};

export const bookingVolumeData = [
  { month: "Jan", total: 180, completed: 150 },
  { month: "Feb", total: 210, completed: 180 },
  { month: "Mar", total: 195, completed: 175 },
  { month: "Apr", total: 240, completed: 210 },
  { month: "May", total: 220, completed: 190 },
  { month: "Jun", total: 260, completed: 230 },
];

export const advanceBookingData = [
  { name: "Advance (>14 Days)", value: 74 },
  { name: "Standard (7-14 Days)", value: 15 },
  { name: "Short-Notice (<48 Hours)", value: 11 },
];

// Add this to your @/data/mock-data.ts file

export const departmentUsage = [
  { 
    department: "Engineering", 
    credits: 18500, 
    bookings: 142, 
    savings: 12400,
    activeUsers: 85,
    totalUsers: 97
  },
  { 
    department: "Sales", 
    credits: 15200, 
    bookings: 110, 
    savings: 9800,
    activeUsers: 62,
    totalUsers: 65
  },
  { 
    department: "Marketing", 
    credits: 9800, 
    bookings: 75, 
    savings: 6500,
    activeUsers: 45,
    totalUsers: 52
  },
  { 
    department: "Finance", 
    credits: 7400, 
    bookings: 58, 
    savings: 4200,
    activeUsers: 30,
    totalUsers: 32
  },
  { 
    department: "HR", 
    credits: 4100, 
    bookings: 32, 
    savings: 2100,
    activeUsers: 15,
    totalUsers: 25
  },
];



export const optimizationOpportunities = [
  { 
    route: "NYC - LON", 
    observation: "High volume of short-notice bookings in Sales.", 
    recommendation: "Advance Booking Policy", 
    potentialSavings: 12500 
  },
  { 
    route: "SFO - TYO", 
    observation: "65% usage of peak-time credits in Engineering.", 
    recommendation: "Off-Peak Scheduling", 
    potentialSavings: 8400 
  },
  { 
    route: "Domestic - Regional", 
    observation: "Underutilization of Annual Pass credits.", 
    recommendation: "Credit Reallocation", 
    potentialSavings: 4200 
  }
];


export const mmpData = [
  { category: "Pass Extensions", count: 156, trend: 12 },
  { category: "Credit Top-Ups", count: 342, trend: 18 },
  { category: "Extra Passengers", count: 89, trend: 5 },
  { category: "Upsell Usage", count: 128, trend: 22 },
  { category: "Peak Bookings", count: 245, trend: -4 }
];

// Add 'changes', 'topups', and 'extensions' keys to your monthlyTrend for the lines to render



// ---- Monthly trend data ----
// @/data/mock-data.ts

export const monthlyTrend = [
  { 
    month: "Jan", credits: 4200, flights: 320, bookings: 380, spend: 84000, 
    consumed: 4000, allocated: 4500, baggage: 600, upgrades: 400,
    completed: 310, ongoing: 12, changes: 45, topups: 110, extensions: 15, 
    savings: 12600, tax: 15500, payments: 85000, usage: 82000 
  },
  { 
    month: "Feb", credits: 3800, flights: 290, bookings: 340, spend: 76000, 
    consumed: 3700, allocated: 4500, baggage: 550, upgrades: 350,
    completed: 280, ongoing: 15, changes: 38, topups: 95, extensions: 12, 
    savings: 11400, tax: 13800, payments: 70000, usage: 74000 
  },
  { 
    month: "Mar", credits: 5100, flights: 410, bookings: 470, spend: 102000, 
    consumed: 4900, allocated: 4500, baggage: 800, upgrades: 600,
    completed: 400, ongoing: 18, changes: 52, topups: 140, extensions: 22, 
    savings: 15300, tax: 18200, payments: 105000, usage: 98000 
  },
  { 
    month: "Apr", credits: 4700, flights: 380, bookings: 430, spend: 94000, 
    consumed: 4600, allocated: 5000, baggage: 700, upgrades: 550,
    completed: 360, ongoing: 22, changes: 41, topups: 115, extensions: 18, 
    savings: 14100, tax: 16400, payments: 92000, usage: 90000 
  },
  { 
    month: "May", credits: 5500, flights: 440, bookings: 510, spend: 110000, 
    consumed: 5300, allocated: 5000, baggage: 900, upgrades: 750,
    completed: 440, ongoing: 25, changes: 58, topups: 150, extensions: 25, 
    savings: 16500, tax: 19200, payments: 112000, usage: 108000 
  },
  { 
    month: "Jun", credits: 4900, flights: 390, bookings: 450, spend: 98000, 
    consumed: 4750, allocated: 5000, baggage: 750, upgrades: 650,
    completed: 380, ongoing: 20, changes: 44, topups: 125, extensions: 20, 
    savings: 14700, tax: 17100, payments: 100000, usage: 96000 
  },
  { 
    month: "Jul", credits: 5800, flights: 470, bookings: 540, spend: 116000, 
    consumed: 5600, allocated: 5500, baggage: 1000, upgrades: 850,
    completed: 460, ongoing: 28, changes: 65, topups: 165, extensions: 28, 
    savings: 17400, tax: 20300, payments: 118000, usage: 114000 
  },
  { 
    month: "Aug", credits: 5200, flights: 420, bookings: 480, spend: 104000, 
    consumed: 5100, allocated: 5500, baggage: 850, upgrades: 750,
    completed: 410, ongoing: 30, changes: 49, topups: 135, extensions: 24, 
    savings: 15600, tax: 18200, payments: 106000, usage: 102000 
  },
  { 
    month: "Sep", credits: 4600, flights: 370, bookings: 420, spend: 92000, 
    consumed: 4500, allocated: 5500, baggage: 700, upgrades: 600,
    completed: 350, ongoing: 24, changes: 40, topups: 110, extensions: 16, 
    savings: 13800, tax: 16100, payments: 94000, usage: 90000 
  },
  { 
    month: "Oct", credits: 5400, flights: 430, bookings: 500, spend: 108000, 
    consumed: 5250, allocated: 6000, baggage: 950, upgrades: 800,
    completed: 425, ongoing: 26, changes: 55, topups: 145, extensions: 21, 
    savings: 16200, tax: 18900, payments: 110000, usage: 106000 
  },
  { 
    month: "Nov", credits: 6100, flights: 490, bookings: 560, spend: 122000, 
    consumed: 5950, allocated: 6000, baggage: 1100, upgrades: 950,
    completed: 490, ongoing: 32, changes: 70, topups: 175, extensions: 32, 
    savings: 18300, tax: 21300, payments: 125000, usage: 120000 
  },
  { 
    month: "Dec", credits: 5700, flights: 460, bookings: 530, spend: 114000, 
    consumed: 5600, allocated: 6000, baggage: 1050, upgrades: 900,
    completed: 450, ongoing: 35, changes: 62, topups: 160, extensions: 30, 
    savings: 17100, tax: 19900, payments: 116000, usage: 112000 
  },
];

// ---- Pass type distribution ----
export const passTypes = [
  { name: "Flexi Pass", value: 42, fill: "hsl(var(--chart-1))" },
  { name: "Standard", value: 28, fill: "hsl(var(--chart-2))" },
  { name: "Premium", value: 18, fill: "hsl(var(--chart-3))" },
  { name: "Economy", value: 12, fill: "hsl(var(--chart-4))" },
];

// ---- Domestic vs International ----
export const flightTypeData = [
  { month: "Jan", domestic: 220, international: 100 },
  { month: "Feb", domestic: 195, international: 95 },
  { month: "Mar", domestic: 280, international: 130 },
  { month: "Apr", domestic: 260, international: 120 },
  { month: "May", domestic: 300, international: 140 },
  { month: "Jun", domestic: 270, international: 120 },
  { month: "Jul", domestic: 320, international: 150 },
  { month: "Aug", domestic: 285, international: 135 },
  { month: "Sep", domestic: 250, international: 120 },
  { month: "Oct", domestic: 290, international: 140 },
  { month: "Nov", domestic: 340, international: 150 },
  { month: "Dec", domestic: 310, international: 150 },
];

// ---- Credit consumption breakdown ----
export const creditConsumption = [
  { month: "Jan", flights: 3200, baggage: 500, upgrades: 500 },
  { month: "Feb", flights: 2900, baggage: 450, upgrades: 450 },
  { month: "Mar", flights: 3900, baggage: 600, upgrades: 600 },
  { month: "Apr", flights: 3600, baggage: 550, upgrades: 550 },
  { month: "May", flights: 4200, baggage: 650, upgrades: 650 },
  { month: "Jun", flights: 3700, baggage: 600, upgrades: 600 },
  { month: "Jul", flights: 4400, baggage: 700, upgrades: 700 },
  { month: "Aug", flights: 4000, baggage: 600, upgrades: 600 },
  { month: "Sep", flights: 3500, baggage: 550, upgrades: 550 },
  { month: "Oct", flights: 4100, baggage: 650, upgrades: 650 },
  { month: "Nov", flights: 4700, baggage: 700, upgrades: 700 },
  { month: "Dec", flights: 4300, baggage: 700, upgrades: 700 },
];

// ---- Department savings ----
export const departmentSavings = [
  { department: "Engineering", savings: 45000, spend: 180000, credits: 9000 },
  { department: "Sales", savings: 38000, spend: 152000, credits: 7600 },
  { department: "Marketing", savings: 22000, spend: 88000, credits: 4400 },
  { department: "HR", savings: 12000, spend: 48000, credits: 2400 },
  { department: "Finance", savings: 18000, spend: 72000, credits: 3600 },
  { department: "Operations", savings: 28000, spend: 112000, credits: 5600 },
];

// ---- Credit burn rate ----
export const burnRateData = [
  { month: "Jan", consumed: 4200, allocated: 6000 },
  { month: "Feb", consumed: 4500, allocated: 6000 },
  { month: "Mar", consumed: 5100, allocated: 6000 },
  { month: "Apr", consumed: 5400, allocated: 6500 },
  { month: "May", consumed: 5900, allocated: 6500 },
  { month: "Jun", consumed: 5600, allocated: 6500 },
  { month: "Jul", consumed: 6200, allocated: 7000 },
  { month: "Aug", consumed: 6500, allocated: 7000 },
  { month: "Sep", consumed: 6100, allocated: 7000 },
  { month: "Oct", consumed: 6800, allocated: 7500 },
  { month: "Nov", consumed: 7200, allocated: 7500 },
  { month: "Dec", consumed: 7000, allocated: 7500 },
];

// ---- Peak vs Non-Peak ----
export const peakData = [
  { day: "Mon", peak: 120, nonPeak: 80 },
  { day: "Tue", peak: 140, nonPeak: 90 },
  { day: "Wed", peak: 130, nonPeak: 100 },
  { day: "Thu", peak: 150, nonPeak: 85 },
  { day: "Fri", peak: 180, nonPeak: 70 },
  { day: "Sat", peak: 60, nonPeak: 110 },
  { day: "Sun", peak: 50, nonPeak: 130 },
];

// ---- Future exposure ----
export const futureExposure = [
  { month: "Jan", blocked: 1200, pending: 800 },
  { month: "Feb", blocked: 1400, pending: 900 },
  { month: "Mar", blocked: 1600, pending: 1100 },
  { month: "Apr", blocked: 1300, pending: 700 },
  { month: "May", blocked: 1800, pending: 1200 },
  { month: "Jun", blocked: 1500, pending: 1000 },
];

// ---- Booking advance vs short notice ----
export const advanceVsShort = [
  { month: "Jan", advance: 280, shortNotice: 100 },
  { month: "Feb", advance: 250, shortNotice: 90 },
  { month: "Mar", advance: 340, shortNotice: 130 },
  { month: "Apr", advance: 310, shortNotice: 120 },
  { month: "May", advance: 370, shortNotice: 140 },
  { month: "Jun", advance: 330, shortNotice: 120 },
  { month: "Jul", advance: 400, shortNotice: 140 },
  { month: "Aug", advance: 350, shortNotice: 130 },
  { month: "Sep", advance: 300, shortNotice: 120 },
  { month: "Oct", advance: 370, shortNotice: 130 },
  { month: "Nov", advance: 420, shortNotice: 140 },
  { month: "Dec", advance: 390, shortNotice: 140 },
];

// ---- Ongoing travel ----
export const ongoingTravel = [
  { id: "TRV-001", employee: "John Smith", department: "Sales", route: "NYC → LON", departure: "2025-02-10", status: "In Transit" },
  { id: "TRV-002", employee: "Sarah Johnson", department: "Engineering", route: "SFO → TYO", departure: "2025-02-11", status: "In Transit" },
  { id: "TRV-003", employee: "Mike Davis", department: "Marketing", route: "CHI → MIA", departure: "2025-02-12", status: "Boarding" },
  { id: "TRV-004", employee: "Lisa Chen", department: "Finance", route: "LAX → SEA", departure: "2025-02-12", status: "Checked In" },
  { id: "TRV-005", employee: "Tom Brown", department: "Operations", route: "BOS → DFW", departure: "2025-02-12", status: "In Transit" },
];

// ---- Employee usage ranking ----
export const employeeUsage = [
  { name: "John Smith", department: "Sales", credits: 1200, trips: 24 },
  { name: "Sarah Johnson", department: "Engineering", credits: 980, trips: 18 },
  { name: "Mike Davis", department: "Marketing", credits: 850, trips: 16 },
  { name: "Lisa Chen", department: "Finance", credits: 720, trips: 14 },
  { name: "Tom Brown", department: "Operations", credits: 680, trips: 12 },
  { name: "Amy Wilson", department: "Sales", credits: 640, trips: 11 },
  { name: "David Lee", department: "Engineering", credits: 590, trips: 10 },
  { name: "Emma Taylor", department: "HR", credits: 520, trips: 9 },
];

// ---- Route data ----
export const routeData = [
  { route: "NYC → LON", trips: 245, credits: 4900, zone: "International" },
  { route: "SFO → TYO", trips: 180, credits: 5400, zone: "International" },
  { route: "CHI → MIA", trips: 320, credits: 3200, zone: "Domestic" },
  { route: "LAX → SEA", trips: 280, credits: 2240, zone: "Domestic" },
  { route: "BOS → DFW", trips: 210, credits: 2520, zone: "Domestic" },
  { route: "DEN → ATL", trips: 190, credits: 1900, zone: "Domestic" },
  { route: "NYC → PAR", trips: 160, credits: 4800, zone: "International" },
  { route: "SFO → SIN", trips: 120, credits: 4200, zone: "International" },
];

// ---- Zone usage ----
export const zoneData = [
  { zone: "Domestic – East", trips: 1200, credits: 12000 },
  { zone: "Domestic – West", trips: 980, credits: 9800 },
  { zone: "Domestic – Central", trips: 750, credits: 7500 },
  { zone: "International – Europe", trips: 420, credits: 12600 },
  { zone: "International – Asia", trips: 310, credits: 10850 },
  { zone: "International – Other", trips: 180, credits: 5400 },
];

// ---- MMB Reports ----
export const mmbData = [
  { category: "Bookings Created", count: 5830, trend: 12 },
  { category: "Booking Changes", count: 1240, trend: -5 },
  { category: "Cancellations", count: 380, trend: -18 },
  { category: "No-Shows", count: 45, trend: -25 },
  { category: "Extra Baggage", count: 890, trend: 8 },
  { category: "Pass Extensions", count: 320, trend: 15 },
  { category: "Credit Top-ups", count: 210, trend: 22 },
  { category: "Extra Passengers", count: 150, trend: 5 },
  { category: "Advance Upsell", count: 420, trend: 30 },
  { category: "Peak Bookings", count: 1650, trend: 10 },
];

// ---- Payment data ----
export const paymentHistory = [
  { id: "PAY-001", date: "2025-02-01", amount: 45000, department: "Engineering", method: "Wire", status: "Completed" },
  { id: "PAY-002", date: "2025-02-03", amount: 32000, department: "Sales", method: "Card", status: "Completed" },
  { id: "PAY-003", date: "2025-02-05", amount: 18000, department: "Marketing", method: "Wire", status: "Pending" },
  { id: "PAY-004", date: "2025-02-07", amount: 12000, department: "HR", method: "Card", status: "Completed" },
  { id: "PAY-005", date: "2025-02-09", amount: 28000, department: "Operations", method: "Wire", status: "Completed" },
  { id: "PAY-006", date: "2025-02-11", amount: 22000, department: "Finance", method: "Card", status: "Processing" },
];

// ---- Payment vs Usage reconciliation ----
export const reconciliation = [
  { month: "Jan", payments: 84000, usage: 78000 },
  { month: "Feb", payments: 76000, usage: 72000 },
  { month: "Mar", payments: 102000, usage: 96000 },
  { month: "Apr", payments: 94000, usage: 90000 },
  { month: "May", payments: 110000, usage: 105000 },
  { month: "Jun", payments: 98000, usage: 94000 },
];

// ---- Tax breakup ----
export const taxBreakup = [
  { month: "Jan", gst: 8400, serviceCharge: 2100, surcharge: 2100 },
  { month: "Feb", gst: 7600, serviceCharge: 1900, surcharge: 1900 },
  { month: "Mar", gst: 10200, serviceCharge: 2550, surcharge: 2550 },
  { month: "Apr", gst: 9400, serviceCharge: 2350, surcharge: 2350 },
  { month: "May", gst: 11000, serviceCharge: 2750, surcharge: 2750 },
  { month: "Jun", gst: 9800, serviceCharge: 2450, surcharge: 2450 },
];

// ---- Scheduled Reports ----
// --- EXPORT & ACCESS CONTROL DATA ---

export const scheduledReports = [
  { 
    id: "REP-001", 
    name: "Executive Monthly Summary", 
    frequency: "monthly", 
    recipients: "exec-team@company.com", 
    targetRole: "Executive",
    lastRun: "2024-06-01", 
    status: "Active" 
  },
  { 
    id: "REP-002", 
    name: "Finance Weekly Reconciliation", 
    frequency: "weekly", 
    recipients: "accounts@company.com", 
    targetRole: "Finance",
    lastRun: "2024-06-07", 
    status: "Active" 
  },
  { 
    id: "REP-003", 
    name: "Daily Travel Manifest", 
    frequency: "daily", 
    recipients: "ops-manager@company.com", 
    targetRole: "Travel Manager",
    lastRun: "2024-06-11", 
    status: "Active" 
  },
  { 
    id: "REP-004", 
    name: "Tax Compliance Half-Yearly", 
    frequency: "bi-annual", 
    recipients: "tax-audit@company.com", 
    targetRole: "Admin",
    lastRun: "2024-01-15", 
    status: "Paused" 
  }
];

export const accessLogs = [
  { 
    user: "Sarah Admin", 
    role: "Super Admin", 
    scope: "Full System Access", 
    lastActive: "2 mins ago" 
  },
  { 
    user: "John Finance", 
    role: "Finance Manager", 
    scope: "Payments, Tax, Savings", 
    lastActive: "1 hour ago" 
  },
  { 
    user: "Mike Travel", 
    role: "Travel Manager", 
    scope: "Bookings, Routes, MMB", 
    lastActive: "Yesterday" 
  },
  { 
    user: "Regional VP", 
    role: "Executive", 
    scope: "Departmental Summary", 
    lastActive: "3 days ago" 
  }
];

// ---- User activity ----
export const userActivity = [
  { name: "Active", value: 340, fill: "hsl(var(--chart-2))" },
  { name: "Occasional", value: 180, fill: "hsl(var(--chart-3))" },
  { name: "Inactive", value: 80, fill: "hsl(var(--chart-4))" },
];

// ---- Access control matrix ----
export const accessMatrix = [
  { asset: "Overall Summary", executive: "View", finance: "View/Export", travelMgr: "View", admin: "Full" },
  { asset: "Credit Usage", executive: "View", finance: "View/Export/Drill", travelMgr: "View", admin: "Full" },
  { asset: "Booking & Travel", executive: "View", finance: "View", travelMgr: "View/Export/Drill", admin: "Full" },
  { asset: "Employee & Dept", executive: "View", finance: "View/Export", travelMgr: "View/Export", admin: "Full" },
  { asset: "Route Analysis", executive: "View", finance: "View", travelMgr: "View/Export/Drill", admin: "Full" },
  { asset: "MMB Reports", executive: "-", finance: "View", travelMgr: "View/Export", admin: "Full" },
  { asset: "Payment & Finance", executive: "View", finance: "View/Export/Drill", travelMgr: "-", admin: "Full" },
  { asset: "Tax & Fuel", executive: "View", finance: "View/Export/Drill", travelMgr: "-", admin: "Full" },
  { asset: "Dashboards", executive: "View", finance: "View", travelMgr: "View", admin: "Full" },
  { asset: "Export & Reports", executive: "View", finance: "View/Export", travelMgr: "View/Export", admin: "Full" },
];
