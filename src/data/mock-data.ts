// =============================================
// MOCK DATA – Corporate Travel Analytics
// Replace with real API calls when ready
// =============================================

// ---- Monthly trend data ----
export const monthlyTrend = [
  { month: "Jan", credits: 4200, flights: 320, bookings: 380, spend: 84000, tax: 12600 },
  { month: "Feb", credits: 3800, flights: 290, bookings: 340, spend: 76000, tax: 11400 },
  { month: "Mar", credits: 5100, flights: 410, bookings: 470, spend: 102000, tax: 15300 },
  { month: "Apr", credits: 4700, flights: 380, bookings: 430, spend: 94000, tax: 14100 },
  { month: "May", credits: 5500, flights: 440, bookings: 510, spend: 110000, tax: 16500 },
  { month: "Jun", credits: 4900, flights: 390, bookings: 450, spend: 98000, tax: 14700 },
  { month: "Jul", credits: 5800, flights: 470, bookings: 540, spend: 116000, tax: 17400 },
  { month: "Aug", credits: 5200, flights: 420, bookings: 480, spend: 104000, tax: 15600 },
  { month: "Sep", credits: 4600, flights: 370, bookings: 420, spend: 92000, tax: 13800 },
  { month: "Oct", credits: 5400, flights: 430, bookings: 500, spend: 108000, tax: 16200 },
  { month: "Nov", credits: 6100, flights: 490, bookings: 560, spend: 122000, tax: 18300 },
  { month: "Dec", credits: 5700, flights: 460, bookings: 530, spend: 114000, tax: 17100 },
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
export const scheduledReports = [
  { id: "RPT-001", name: "Monthly Credit Summary", frequency: "Monthly", recipients: "exec-team@corp.com", lastRun: "2025-02-01", status: "Active" },
  { id: "RPT-002", name: "Weekly Booking Report", frequency: "Weekly", recipients: "travel-mgr@corp.com", lastRun: "2025-02-10", status: "Active" },
  { id: "RPT-003", name: "Daily Travel Alerts", frequency: "Daily", recipients: "ops@corp.com", lastRun: "2025-02-12", status: "Active" },
  { id: "RPT-004", name: "Quarterly Finance Review", frequency: "Quarterly", recipients: "cfo@corp.com", lastRun: "2025-01-01", status: "Active" },
  { id: "RPT-005", name: "Route Analysis", frequency: "Monthly", recipients: "analytics@corp.com", lastRun: "2025-02-01", status: "Paused" },
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
