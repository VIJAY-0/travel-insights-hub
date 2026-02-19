export type BookingRecord = {
  employee_id: string;
  employee_name: string;

  department: string;
  office: string;
  role: string;

  booking_id: string;
  booking_date: string; // ISO date (yyyy-mm-dd)

  booking_status: string;

  route: string;
  zone: string; // e.g. "Domestic-East"
  is_peak: boolean;

  pass_type: string;

  credits_allocated: number;
  credits_used: number;
  credits_remaining: number;

  baggage_credits: number;
  upgrade_credits: number;

  total_spend: number;
  savings: number;
  tax_amount: number;
  payment_amount: number;

  payment_status: string;

  active_user: boolean;
  last_active_days_ago: number;

  booking_changes: number;
  cancellations: number;
  no_shows: number;

  extra_baggage_purchased: number;
  credit_topups: number;
  pass_extensions: number;

  is_internation_flight:boolean;

  upsell_usage: number;
};

export const bookings:BookingRecord[] = [
  {
    "employee_id": "EMP-001",
    "employee_name": "Employee_1",
    "department": "Engineering",
    "office": "New York",
    "role": "Manager",
    "booking_id": "BK-1001",
    "booking_date": "2025-01-05",
    "booking_status": "completed",
    "route": "NYC → LON",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 30,
    "credits_used": 18,
    "credits_remaining": 12,
    "baggage_credits": 5,
    "upgrade_credits": 3,
    "total_spend": 1200,
    "savings": 85,
    "tax_amount": 120,
    "payment_amount": 1235,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 5,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-002",
    "employee_name": "Employee_2",
    "department": "Marketing",
    "office": "San Francisco",
    "role": "Analyst",
    "booking_id": "BK-1002",
    "booking_date": "2025-01-10",
    "booking_status": "completed",
    "route": "CHI → MIA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 10,
    "credits_remaining": 12,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 650,
    "savings": 40,
    "tax_amount": 65,
    "payment_amount": 675,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 12,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-003",
    "employee_name": "Employee_3",
    "department": "Sales",
    "office": "London",
    "role": "Director",
    "booking_id": "BK-1003",
    "booking_date": "2025-01-12",
    "booking_status": "completed",
    "route": "LON → PAR",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 45,
    "credits_used": 30,
    "credits_remaining": 15,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 1800,
    "savings": 120,
    "tax_amount": 180,
    "payment_amount": 1950,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 2,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-004",
    "employee_name": "Employee_4",
    "department": "Finance",
    "office": "New York",
    "role": "Manager",
    "booking_id": "BK-1004",
    "booking_date": "2025-01-15",
    "booking_status": "completed",
    "route": "NYC → SFO",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 20,
    "credits_remaining": 5,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 900,
    "savings": 50,
    "tax_amount": 90,
    "payment_amount": 945,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 8,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-005",
    "employee_name": "Employee_5",
    "department": "Engineering",
    "office": "Berlin",
    "role": "Developer",
    "booking_id": "BK-1005",
    "booking_date": "2025-01-18",
    "booking_status": "completed",
    "route": "BER → LHR",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 20,
    "credits_used": 18,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 550,
    "savings": 30,
    "tax_amount": 55,
    "payment_amount": 580,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 15,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-006",
    "employee_name": "Employee_6",
    "department": "HR",
    "office": "Tokyo",
    "role": "Coordinator",
    "booking_id": "BK-1006",
    "booking_date": "2025-01-20",
    "booking_status": "completed",
    "route": "TYO → SIN",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 15,
    "credits_remaining": 13,
    "baggage_credits": 4,
    "upgrade_credits": 2,
    "total_spend": 1100,
    "savings": 75,
    "tax_amount": 110,
    "payment_amount": 1150,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 4,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-007",
    "employee_name": "Employee_7",
    "department": "Marketing",
    "office": "San Francisco",
    "role": "Analyst",
    "booking_id": "BK-1007",
    "booking_date": "2025-01-22",
    "booking_status": "completed",
    "route": "SFO → LAX",
    "zone": "Domestic-West",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 400,
    "savings": 20,
    "tax_amount": 40,
    "payment_amount": 420,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 20,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-008",
    "employee_name": "Employee_8",
    "department": "Sales",
    "office": "New York",
    "role": "Director",
    "booking_id": "BK-1008",
    "booking_date": "2025-01-25",
    "booking_status": "completed",
    "route": "NYC → MIA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 25,
    "credits_remaining": 25,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 2100,
    "savings": 150,
    "tax_amount": 210,
    "payment_amount": 2250,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 1,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-009",
    "employee_name": "Employee_9",
    "department": "Engineering",
    "office": "London",
    "role": "Developer",
    "booking_id": "BK-1009",
    "booking_date": "2025-01-28",
    "booking_status": "completed",
    "route": "LON → DXB",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 35,
    "credits_used": 30,
    "credits_remaining": 5,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 1400,
    "savings": 90,
    "tax_amount": 140,
    "payment_amount": 1470,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 6,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-010",
    "employee_name": "Employee_10",
    "department": "Finance",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1010",
    "booking_date": "2025-02-01",
    "booking_status": "completed",
    "route": "BER → FRA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 10,
    "credits_remaining": 8,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 300,
    "savings": 15,
    "tax_amount": 30,
    "payment_amount": 315,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 10,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-011",
    "employee_name": "Employee_11",
    "department": "Legal",
    "office": "Tokyo",
    "role": "Manager",
    "booking_id": "BK-1011",
    "booking_date": "2025-02-03",
    "booking_status": "completed",
    "route": "TYO → JFK",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 45,
    "credits_remaining": 5,
    "baggage_credits": 5,
    "upgrade_credits": 4,
    "total_spend": 2800,
    "savings": 200,
    "tax_amount": 280,
    "payment_amount": 3000,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 3,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 2,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-012",
    "employee_name": "Employee_12",
    "department": "Engineering",
    "office": "San Francisco",
    "role": "Developer",
    "booking_id": "BK-1012",
    "booking_date": "2025-02-05",
    "booking_status": "completed",
    "route": "SFO → SEA",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 15,
    "credits_remaining": 10,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 750,
    "savings": 45,
    "tax_amount": 75,
    "payment_amount": 790,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 14,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-013",
    "employee_name": "Employee_13",
    "department": "Marketing",
    "office": "New York",
    "role": "Analyst",
    "booking_id": "BK-1013",
    "booking_date": "2025-02-07",
    "booking_status": "completed",
    "route": "NYC → BOS",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 14,
    "credits_remaining": 1,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 350,
    "savings": 10,
    "tax_amount": 35,
    "payment_amount": 365,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 18,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-014",
    "employee_name": "Employee_14",
    "department": "Sales",
    "office": "London",
    "role": "Manager",
    "booking_id": "BK-1014",
    "booking_date": "2025-02-10",
    "booking_status": "completed",
    "route": "LHR → JFK",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 40,
    "credits_used": 35,
    "credits_remaining": 5,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 1900,
    "savings": 110,
    "tax_amount": 190,
    "payment_amount": 2000,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 5,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-015",
    "employee_name": "Employee_15",
    "department": "HR",
    "office": "Berlin",
    "role": "Coordinator",
    "booking_id": "BK-1015",
    "booking_date": "2025-02-12",
    "booking_status": "completed",
    "route": "BER → MAD",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 12,
    "credits_remaining": 10,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 600,
    "savings": 35,
    "tax_amount": 60,
    "payment_amount": 630,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 9,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-016",
    "employee_name": "Employee_16",
    "department": "Finance",
    "office": "Tokyo",
    "role": "Analyst",
    "booking_id": "BK-1016",
    "booking_date": "2025-02-14",
    "booking_status": "completed",
    "route": "NRT → HKG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 25,
    "credits_remaining": 5,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 1250,
    "savings": 80,
    "tax_amount": 125,
    "payment_amount": 1310,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 7,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-017",
    "employee_name": "Employee_17",
    "department": "Engineering",
    "office": "New York",
    "role": "Manager",
    "booking_id": "BK-1017",
    "booking_date": "2025-02-16",
    "booking_status": "completed",
    "route": "NYC → CHI",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Premium",
    "credits_allocated": 35,
    "credits_used": 20,
    "credits_remaining": 15,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 1050,
    "savings": 70,
    "tax_amount": 105,
    "payment_amount": 1100,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 4,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-018",
    "employee_name": "Employee_18",
    "department": "Legal",
    "office": "San Francisco",
    "role": "Director",
    "booking_id": "BK-1018",
    "booking_date": "2025-02-18",
    "booking_status": "completed",
    "route": "SFO → IAD",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 48,
    "credits_used": 40,
    "credits_remaining": 8,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 2400,
    "savings": 160,
    "tax_amount": 240,
    "payment_amount": 2550,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 2,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-019",
    "employee_name": "Employee_19",
    "department": "Marketing",
    "office": "London",
    "role": "Analyst",
    "booking_id": "BK-1019",
    "booking_date": "2025-02-20",
    "booking_status": "completed",
    "route": "LGW → AMS",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 10,
    "credits_remaining": 5,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 280,
    "savings": 15,
    "tax_amount": 28,
    "payment_amount": 295,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 22,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-020",
    "employee_name": "Employee_20",
    "department": "Sales",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1020",
    "booking_date": "2025-02-22",
    "booking_status": "completed",
    "route": "TXL → MUC",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 22,
    "credits_remaining": 3,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 450,
    "savings": 25,
    "tax_amount": 45,
    "payment_amount": 475,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 11,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-021",
    "employee_name": "Employee_21",
    "department": "Engineering",
    "office": "Tokyo",
    "role": "Developer",
    "booking_id": "BK-1021",
    "booking_date": "2025-02-24",
    "booking_status": "completed",
    "route": "HND → PVG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 32,
    "credits_used": 28,
    "credits_remaining": 4,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 1350,
    "savings": 95,
    "tax_amount": 135,
    "payment_amount": 1420,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 6,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-022",
    "employee_name": "Employee_22",
    "department": "HR",
    "office": "New York",
    "role": "Manager",
    "booking_id": "BK-1022",
    "booking_date": "2025-02-26",
    "booking_status": "completed",
    "route": "JFK → PHL",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 12,
    "credits_used": 10,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 220,
    "savings": 10,
    "tax_amount": 22,
    "payment_amount": 235,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 25,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-023",
    "employee_name": "Employee_23",
    "department": "Finance",
    "office": "San Francisco",
    "role": "Director",
    "booking_id": "BK-1023",
    "booking_date": "2025-02-28",
    "booking_status": "completed",
    "route": "SFO → LHR",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 42,
    "credits_remaining": 8,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 3100,
    "savings": 250,
    "tax_amount": 310,
    "payment_amount": 3300,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 3,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-024",
    "employee_name": "Employee_24",
    "department": "Legal",
    "office": "London",
    "role": "Analyst",
    "booking_id": "BK-1024",
    "booking_date": "2025-03-01",
    "booking_status": "completed",
    "route": "LHR → EDI",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 20,
    "credits_used": 15,
    "credits_remaining": 5,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 380,
    "savings": 20,
    "tax_amount": 38,
    "payment_amount": 400,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 13,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-025",
    "employee_name": "Employee_25",
    "department": "Engineering",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1025",
    "booking_date": "2025-03-03",
    "booking_status": "completed",
    "route": "BER → CDG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 38,
    "credits_used": 30,
    "credits_remaining": 8,
    "baggage_credits": 4,
    "upgrade_credits": 4,
    "total_spend": 950,
    "savings": 65,
    "tax_amount": 95,
    "payment_amount": 1000,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 5,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-026",
    "employee_name": "Employee_26",
    "department": "Marketing",
    "office": "Tokyo",
    "role": "Analyst",
    "booking_id": "BK-1026",
    "booking_date": "2025-03-05",
    "booking_status": "completed",
    "route": "NRT → ICN",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 18,
    "credits_remaining": 7,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 850,
    "savings": 55,
    "tax_amount": 85,
    "payment_amount": 900,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 16,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-027",
    "employee_name": "Employee_27",
    "department": "Sales",
    "office": "New York",
    "role": "Manager",
    "booking_id": "BK-1027",
    "booking_date": "2025-03-07",
    "booking_status": "completed",
    "route": "EWR → ATL",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 24,
    "credits_used": 20,
    "credits_remaining": 4,
    "baggage_credits": 3,
    "upgrade_credits": 1,
    "total_spend": 620,
    "savings": 40,
    "tax_amount": 62,
    "payment_amount": 650,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 10,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-028",
    "employee_name": "Employee_28",
    "department": "Engineering",
    "office": "San Francisco",
    "role": "Developer",
    "booking_id": "BK-1028",
    "booking_date": "2025-03-09",
    "booking_status": "completed",
    "route": "SFO → DEN",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 15,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 510,
    "savings": 25,
    "tax_amount": 51,
    "payment_amount": 540,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 19,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-029",
    "employee_name": "Employee_29",
    "department": "HR",
    "office": "London",
    "role": "Coordinator",
    "booking_id": "BK-1029",
    "booking_date": "2025-03-11",
    "booking_status": "completed",
    "route": "LHR → DUB",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 26,
    "credits_used": 22,
    "credits_remaining": 4,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 440,
    "savings": 30,
    "tax_amount": 44,
    "payment_amount": 470,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 8,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-030",
    "employee_name": "Employee_30",
    "department": "Finance",
    "office": "Berlin",
    "role": "Director",
    "booking_id": "BK-1030",
    "booking_date": "2025-03-13",
    "booking_status": "completed",
    "route": "BER → NYC",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 48,
    "credits_remaining": 2,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 2900,
    "savings": 210,
    "tax_amount": 290,
    "payment_amount": 3100,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 2,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 2,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-031",
    "employee_name": "Employee_31",
    "department": "Engineering",
    "office": "Tokyo",
    "role": "Developer",
    "booking_id": "BK-1031",
    "booking_date": "2025-03-15",
    "booking_status": "completed",
    "route": "HND → TSA",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 20,
    "credits_remaining": 10,
    "baggage_credits": 2,
    "upgrade_credits": 2,
    "total_spend": 1050,
    "savings": 60,
    "tax_amount": 105,
    "payment_amount": 1110,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 12,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-032",
    "employee_name": "Employee_32",
    "department": "Legal",
    "office": "New York",
    "role": "Manager",
    "booking_id": "BK-1032",
    "booking_date": "2025-03-17",
    "booking_status": "completed",
    "route": "JFK → YYZ",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 35,
    "credits_used": 32,
    "credits_remaining": 3,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 880,
    "savings": 55,
    "tax_amount": 88,
    "payment_amount": 930,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 6,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-033",
    "employee_name": "Employee_33",
    "department": "Marketing",
    "office": "San Francisco",
    "role": "Analyst",
    "booking_id": "BK-1033",
    "booking_date": "2025-03-19",
    "booking_status": "completed",
    "route": "SFO → LAS",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 14,
    "credits_used": 10,
    "credits_remaining": 4,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 290,
    "savings": 15,
    "tax_amount": 29,
    "payment_amount": 310,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 21,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-034",
    "employee_name": "Employee_34",
    "department": "Sales",
    "office": "London",
    "role": "Director",
    "booking_id": "BK-1034",
    "booking_date": "2025-03-21",
    "booking_status": "completed",
    "route": "LHR → HKG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 45,
    "credits_remaining": 5,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 3500,
    "savings": 300,
    "tax_amount": 350,
    "payment_amount": 3700,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 3,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-035",
    "employee_name": "Employee_35",
    "department": "Engineering",
    "office": "Berlin",
    "role": "Developer",
    "booking_id": "BK-1035",
    "booking_date": "2025-03-23",
    "booking_status": "completed",
    "route": "BER → VIE",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 18,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 420,
    "savings": 25,
    "tax_amount": 42,
    "payment_amount": 445,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 14,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-036",
    "employee_name": "Employee_36",
    "department": "HR",
    "office": "Tokyo",
    "role": "Manager",
    "booking_id": "BK-1036",
    "booking_date": "2025-03-25",
    "booking_status": "completed",
    "route": "NRT → BKK",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 33,
    "credits_used": 30,
    "credits_remaining": 3,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 1450,
    "savings": 100,
    "tax_amount": 145,
    "payment_amount": 1530,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 5,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-037",
    "employee_name": "Employee_37",
    "department": "Finance",
    "office": "New York",
    "role": "Analyst",
    "booking_id": "BK-1037",
    "booking_date": "2025-03-27",
    "booking_status": "completed",
    "route": "LGA → ORD",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 16,
    "credits_used": 12,
    "credits_remaining": 4,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 410,
    "savings": 20,
    "tax_amount": 41,
    "payment_amount": 435,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 17,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-038",
    "employee_name": "Employee_38",
    "department": "Legal",
    "office": "San Francisco",
    "role": "Director",
    "booking_id": "BK-1038",
    "booking_date": "2025-03-29",
    "booking_status": "completed",
    "route": "SFO → JFK",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 48,
    "credits_used": 45,
    "credits_remaining": 3,
    "baggage_credits": 5,
    "upgrade_credits": 4,
    "total_spend": 2200,
    "savings": 140,
    "tax_amount": 220,
    "payment_amount": 2350,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 4,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-039",
    "employee_name": "Employee_39",
    "department": "Engineering",
    "office": "London",
    "role": "Developer",
    "booking_id": "BK-1039",
    "booking_date": "2025-04-01",
    "booking_status": "completed",
    "route": "LHR → FCO",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 20,
    "credits_remaining": 8,
    "baggage_credits": 2,
    "upgrade_credits": 2,
    "total_spend": 680,
    "savings": 45,
    "tax_amount": 68,
    "payment_amount": 720,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 9,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-040",
    "employee_name": "Employee_40",
    "department": "Marketing",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1040",
    "booking_date": "2025-04-03",
    "booking_status": "completed",
    "route": "BER → AMS",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 36,
    "credits_used": 32,
    "credits_remaining": 4,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 750,
    "savings": 50,
    "tax_amount": 75,
    "payment_amount": 800,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 7,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-041",
    "employee_name": "Employee_41",
    "department": "Sales",
    "office": "Tokyo",
    "role": "Director",
    "booking_id": "BK-1041",
    "booking_date": "2025-04-05",
    "booking_status": "completed",
    "route": "TYO → SYD",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 48,
    "credits_remaining": 2,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 3200,
    "savings": 280,
    "tax_amount": 320,
    "payment_amount": 3400,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 2,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-042",
    "employee_name": "Employee_42",
    "department": "Engineering",
    "office": "New York",
    "role": "Developer",
    "booking_id": "BK-1042",
    "booking_date": "2025-04-07",
    "booking_status": "completed",
    "route": "JFK → SFO",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 22,
    "credits_remaining": 3,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 950,
    "savings": 60,
    "tax_amount": 95,
    "payment_amount": 1000,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 11,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-043",
    "employee_name": "Employee_43",
    "department": "HR",
    "office": "San Francisco",
    "role": "Coordinator",
    "booking_id": "BK-1043",
    "booking_date": "2025-04-09",
    "booking_status": "completed",
    "route": "SFO → PDX",
    "zone": "Domestic-West",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 14,
    "credits_remaining": 1,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 320,
    "savings": 15,
    "tax_amount": 32,
    "payment_amount": 340,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 18,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-044",
    "employee_name": "Employee_44",
    "department": "Finance",
    "office": "London",
    "role": "Manager",
    "booking_id": "BK-1044",
    "booking_date": "2025-04-11",
    "booking_status": "completed",
    "route": "LHR → ZRH",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 20,
    "credits_remaining": 8,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 720,
    "savings": 40,
    "tax_amount": 72,
    "payment_amount": 760,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 13,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-045",
    "employee_name": "Employee_45",
    "department": "Legal",
    "office": "Berlin",
    "role": "Analyst",
    "booking_id": "BK-1045",
    "booking_date": "2025-04-13",
    "booking_status": "completed",
    "route": "BER → BRU",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 16,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 390,
    "savings": 20,
    "tax_amount": 39,
    "payment_amount": 415,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 15,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-046",
    "employee_name": "Employee_46",
    "department": "Engineering",
    "office": "Tokyo",
    "role": "Manager",
    "booking_id": "BK-1046",
    "booking_date": "2025-04-15",
    "booking_status": "completed",
    "route": "HND → CTS",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Premium",
    "credits_allocated": 35,
    "credits_used": 25,
    "credits_remaining": 10,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 650,
    "savings": 40,
    "tax_amount": 65,
    "payment_amount": 690,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 8,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-047",
    "employee_name": "Employee_47",
    "department": "Marketing",
    "office": "New York",
    "role": "Analyst",
    "booking_id": "BK-1047",
    "booking_date": "2025-04-17",
    "booking_status": "completed",
    "route": "JFK → MIA",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 24,
    "credits_used": 20,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 780,
    "savings": 50,
    "tax_amount": 78,
    "payment_amount": 820,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 10,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-048",
    "employee_name": "Employee_48",
    "department": "Sales",
    "office": "San Francisco",
    "role": "Director",
    "booking_id": "BK-1048",
    "booking_date": "2025-04-19",
    "booking_status": "completed",
    "route": "SFO → ORD",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 45,
    "credits_remaining": 5,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 1850,
    "savings": 130,
    "tax_amount": 185,
    "payment_amount": 1980,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 4,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-049",
    "employee_name": "Employee_49",
    "department": "Engineering",
    "office": "London",
    "role": "Developer",
    "booking_id": "BK-1049",
    "booking_date": "2025-04-21",
    "booking_status": "completed",
    "route": "LGW → BCN",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 28,
    "credits_remaining": 2,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 550,
    "savings": 35,
    "tax_amount": 55,
    "payment_amount": 585,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 6,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-050",
    "employee_name": "Employee_50",
    "department": "HR",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1050",
    "booking_date": "2025-04-23",
    "booking_status": "completed",
    "route": "BER → PRG",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 240,
    "savings": 15,
    "tax_amount": 24,
    "payment_amount": 255,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 20,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-051",
    "employee_name": "Employee_51",
    "department": "Finance",
    "office": "Tokyo",
    "role": "Analyst",
    "booking_id": "BK-1051",
    "booking_date": "2025-04-25",
    "booking_status": "completed",
    "route": "NRT → MNL",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 25,
    "credits_remaining": 3,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 1150,
    "savings": 70,
    "tax_amount": 115,
    "payment_amount": 1220,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 9,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-052",
    "employee_name": "Employee_52",
    "department": "Legal",
    "office": "New York",
    "role": "Director",
    "booking_id": "BK-1052",
    "booking_date": "2025-04-27",
    "booking_status": "completed",
    "route": "JFK → LHR",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 48,
    "credits_remaining": 2,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 2600,
    "savings": 190,
    "tax_amount": 260,
    "payment_amount": 2780,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 3,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-053",
    "employee_name": "Employee_53",
    "department": "Engineering",
    "office": "San Francisco",
    "role": "Developer",
    "booking_id": "BK-1053",
    "booking_date": "2025-04-29",
    "booking_status": "completed",
    "route": "SFO → SEA",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 18,
    "credits_remaining": 7,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 690,
    "savings": 40,
    "tax_amount": 69,
    "payment_amount": 730,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 14,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-054",
    "employee_name": "Employee_54",
    "department": "Marketing",
    "office": "London",
    "role": "Analyst",
    "booking_id": "BK-1054",
    "booking_date": "2025-05-01",
    "booking_status": "completed",
    "route": "LHR → CDG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 16,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 320,
    "savings": 15,
    "tax_amount": 32,
    "payment_amount": 340,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 18,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-055",
    "employee_name": "Employee_55",
    "department": "Sales",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1055",
    "booking_date": "2025-05-03",
    "booking_status": "completed",
    "route": "BER → FRA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 24,
    "credits_used": 20,
    "credits_remaining": 4,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 410,
    "savings": 25,
    "tax_amount": 41,
    "payment_amount": 435,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 12,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-056",
    "employee_name": "Employee_56",
    "department": "Engineering",
    "office": "Tokyo",
    "role": "Developer",
    "booking_id": "BK-1056",
    "booking_date": "2025-05-05",
    "booking_status": "completed",
    "route": "HND → FUK",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 28,
    "credits_remaining": 2,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 580,
    "savings": 35,
    "tax_amount": 58,
    "payment_amount": 615,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 7,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-057",
    "employee_name": "Employee_57",
    "department": "HR",
    "office": "New York",
    "role": "Coordinator",
    "booking_id": "BK-1057",
    "booking_date": "2025-05-07",
    "booking_status": "completed",
    "route": "LGA → DCA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 290,
    "savings": 15,
    "tax_amount": 29,
    "payment_amount": 310,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 22,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-058",
    "employee_name": "Employee_58",
    "department": "Finance",
    "office": "San Francisco",
    "role": "Manager",
    "booking_id": "BK-1058",
    "booking_date": "2025-05-09",
    "booking_status": "completed",
    "route": "SFO → JFK",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 40,
    "credits_used": 38,
    "credits_remaining": 2,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 2100,
    "savings": 150,
    "tax_amount": 210,
    "payment_amount": 2250,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 5,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-059",
    "employee_name": "Employee_59",
    "department": "Legal",
    "office": "London",
    "role": "Analyst",
    "booking_id": "BK-1059",
    "booking_date": "2025-05-11",
    "booking_status": "completed",
    "route": "LHR → LIS",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 18,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 520,
    "savings": 30,
    "tax_amount": 52,
    "payment_amount": 550,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 15,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-060",
    "employee_name": "Employee_60",
    "department": "Engineering",
    "office": "Berlin",
    "role": "Developer",
    "booking_id": "BK-1060",
    "booking_date": "2025-05-13",
    "booking_status": "completed",
    "route": "BER → OSL",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 25,
    "credits_remaining": 3,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 640,
    "savings": 40,
    "tax_amount": 64,
    "payment_amount": 680,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 9,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-061",
    "employee_name": "Employee_61",
    "department": "Marketing",
    "office": "Tokyo",
    "role": "Analyst",
    "booking_id": "BK-1061",
    "booking_date": "2025-05-15",
    "booking_status": "completed",
    "route": "NRT → KUL",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 20,
    "credits_remaining": 5,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 980,
    "savings": 65,
    "tax_amount": 98,
    "payment_amount": 1040,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 11,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-062",
    "employee_name": "Employee_62",
    "department": "Sales",
    "office": "New York",
    "role": "Director",
    "booking_id": "BK-1062",
    "booking_date": "2025-05-17",
    "booking_status": "completed",
    "route": "JFK → CDG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 48,
    "credits_remaining": 2,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 3100,
    "savings": 240,
    "tax_amount": 310,
    "payment_amount": 3300,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 4,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-063",
    "employee_name": "Employee_63",
    "department": "Engineering",
    "office": "San Francisco",
    "role": "Manager",
    "booking_id": "BK-1063",
    "booking_date": "2025-05-19",
    "booking_status": "completed",
    "route": "SFO → SJC",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 20,
    "credits_remaining": 10,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 380,
    "savings": 20,
    "tax_amount": 38,
    "payment_amount": 405,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 8,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-064",
    "employee_name": "Employee_64",
    "department": "HR",
    "office": "London",
    "role": "Coordinator",
    "booking_id": "BK-1064",
    "booking_date": "2025-05-21",
    "booking_status": "completed",
    "route": "LHR → CPH",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 15,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 410,
    "savings": 25,
    "tax_amount": 41,
    "payment_amount": 435,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 16,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-065",
    "employee_name": "Employee_65",
    "department": "Finance",
    "office": "Berlin",
    "role": "Analyst",
    "booking_id": "BK-1065",
    "booking_date": "2025-05-23",
    "booking_status": "completed",
    "route": "BER → BUD",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 18,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 450,
    "savings": 30,
    "tax_amount": 45,
    "payment_amount": 475,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 13,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-066",
    "employee_name": "Employee_66",
    "department": "Legal",
    "office": "Tokyo",
    "role": "Manager",
    "booking_id": "BK-1066",
    "booking_date": "2025-05-25",
    "booking_status": "completed",
    "route": "HND → NGO",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 38,
    "credits_used": 35,
    "credits_remaining": 3,
    "baggage_credits": 4,
    "upgrade_credits": 4,
    "total_spend": 520,
    "savings": 35,
    "tax_amount": 52,
    "payment_amount": 550,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 7,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-067",
    "employee_name": "Employee_67",
    "department": "Engineering",
    "office": "New York",
    "role": "Developer",
    "booking_id": "BK-1067",
    "booking_date": "2025-05-27",
    "booking_status": "completed",
    "route": "EWR → ORD",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 24,
    "credits_used": 20,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 690,
    "savings": 45,
    "tax_amount": 69,
    "payment_amount": 730,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 12,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-068",
    "employee_name": "Employee_68",
    "department": "Marketing",
    "office": "San Francisco",
    "role": "Analyst",
    "booking_id": "BK-1068",
    "booking_date": "2025-05-29",
    "booking_status": "completed",
    "route": "SFO → PHX",
    "zone": "Domestic-West",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 340,
    "savings": 20,
    "tax_amount": 34,
    "payment_amount": 360,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 20,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-069",
    "employee_name": "Employee_69",
    "department": "Sales",
    "office": "London",
    "role": "Manager",
    "booking_id": "BK-1069",
    "booking_date": "2025-05-31",
    "booking_status": "completed",
    "route": "LHR → MXP",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 25,
    "credits_remaining": 3,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 610,
    "savings": 40,
    "tax_amount": 61,
    "payment_amount": 650,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 10,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-070",
    "employee_name": "Employee_70",
    "department": "Engineering",
    "office": "Berlin",
    "role": "Developer",
    "booking_id": "BK-1070",
    "booking_date": "2025-06-02",
    "booking_status": "completed",
    "route": "BER → ARN",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 28,
    "credits_remaining": 2,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 690,
    "savings": 45,
    "tax_amount": 69,
    "payment_amount": 730,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 6,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-071",
    "employee_name": "Employee_71",
    "department": "HR",
    "office": "Tokyo",
    "role": "Coordinator",
    "booking_id": "BK-1071",
    "booking_date": "2025-06-04",
    "booking_status": "completed",
    "route": "NRT → TPE",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 16,
    "credits_used": 14,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 520,
    "savings": 35,
    "tax_amount": 52,
    "payment_amount": 550,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 18,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-072",
    "employee_name": "Employee_72",
    "department": "Finance",
    "office": "New York",
    "role": "Director",
    "booking_id": "BK-1072",
    "booking_date": "2025-06-06",
    "booking_status": "completed",
    "route": "JFK → FRA",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 45,
    "credits_remaining": 5,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 2800,
    "savings": 200,
    "tax_amount": 280,
    "payment_amount": 3000,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 3,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-073",
    "employee_name": "Employee_73",
    "department": "Legal",
    "office": "San Francisco",
    "role": "Analyst",
    "booking_id": "BK-1073",
    "booking_date": "2025-06-08",
    "booking_status": "completed",
    "route": "SFO → SAN",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 18,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 430,
    "savings": 25,
    "tax_amount": 43,
    "payment_amount": 455,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 14,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-074",
    "employee_name": "Employee_74",
    "department": "Engineering",
    "office": "London",
    "role": "Manager",
    "booking_id": "BK-1074",
    "booking_date": "2025-06-10",
    "booking_status": "completed",
    "route": "LHR → AMS",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 38,
    "credits_used": 32,
    "credits_remaining": 6,
    "baggage_credits": 4,
    "upgrade_credits": 4,
    "total_spend": 720,
    "savings": 50,
    "tax_amount": 72,
    "payment_amount": 770,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 8,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-075",
    "employee_name": "Employee_75",
    "department": "Marketing",
    "office": "Berlin",
    "role": "Analyst",
    "booking_id": "BK-1075",
    "booking_date": "2025-06-12",
    "booking_status": "completed",
    "route": "BER → BRU",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 360,
    "savings": 20,
    "tax_amount": 36,
    "payment_amount": 380,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 21,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-076",
    "employee_name": "Employee_76",
    "department": "Sales",
    "office": "Tokyo",
    "role": "Director",
    "booking_id": "BK-1076",
    "booking_date": "2025-06-14",
    "booking_status": "completed",
    "route": "HND → PVG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 48,
    "credits_remaining": 2,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 1500,
    "savings": 110,
    "tax_amount": 150,
    "payment_amount": 1650,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 2,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-077",
    "employee_name": "Employee_77",
    "department": "Engineering",
    "office": "New York",
    "role": "Developer",
    "booking_id": "BK-1077",
    "booking_date": "2025-06-16",
    "booking_status": "completed",
    "route": "LGA → CLT",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 20,
    "credits_remaining": 5,
    "baggage_credits": 2,
    "upgrade_credits": 2,
    "total_spend": 580,
    "savings": 35,
    "tax_amount": 58,
    "payment_amount": 615,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 11,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-078",
    "employee_name": "Employee_78",
    "department": "HR",
    "office": "San Francisco",
    "role": "Coordinator",
    "booking_id": "BK-1078",
    "booking_date": "2025-06-18",
    "booking_status": "completed",
    "route": "SFO → SMF",
    "zone": "Domestic-West",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 12,
    "credits_used": 10,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 210,
    "savings": 10,
    "tax_amount": 21,
    "payment_amount": 225,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 25,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-079",
    "employee_name": "Employee_79",
    "department": "Finance",
    "office": "London",
    "role": "Manager",
    "booking_id": "BK-1079",
    "booking_date": "2025-06-20",
    "booking_status": "completed",
    "route": "LHR → GVA",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 22,
    "credits_remaining": 6,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 640,
    "savings": 40,
    "tax_amount": 64,
    "payment_amount": 680,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 13,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-080",
    "employee_name": "Employee_80",
    "department": "Legal",
    "office": "Berlin",
    "role": "Analyst",
    "booking_id": "BK-1080",
    "booking_date": "2025-06-22",
    "booking_status": "completed",
    "route": "BER → PRG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 16,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 290,
    "savings": 15,
    "tax_amount": 29,
    "payment_amount": 310,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 16,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-081",
    "employee_name": "Employee_81",
    "department": "Engineering",
    "office": "Tokyo",
    "role": "Manager",
    "booking_id": "BK-1081",
    "booking_date": "2025-06-24",
    "booking_status": "completed",
    "route": "HND → OKA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Premium",
    "credits_allocated": 35,
    "credits_used": 30,
    "credits_remaining": 5,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 950,
    "savings": 65,
    "tax_amount": 95,
    "payment_amount": 1000,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 9,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-082",
    "employee_name": "Employee_82",
    "department": "Marketing",
    "office": "New York",
    "role": "Analyst",
    "booking_id": "BK-1082",
    "booking_date": "2025-06-26",
    "booking_status": "completed",
    "route": "JFK → MCO",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 24,
    "credits_used": 22,
    "credits_remaining": 2,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 820,
    "savings": 55,
    "tax_amount": 82,
    "payment_amount": 870,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 7,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-083",
    "employee_name": "Employee_83",
    "department": "Sales",
    "office": "San Francisco",
    "role": "Director",
    "booking_id": "BK-1083",
    "booking_date": "2025-06-28",
    "booking_status": "completed",
    "route": "SFO → HNL",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 45,
    "credits_remaining": 5,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 2800,
    "savings": 200,
    "tax_amount": 280,
    "payment_amount": 3000,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 5,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-084",
    "employee_name": "Employee_84",
    "department": "Engineering",
    "office": "London",
    "role": "Developer",
    "booking_id": "BK-1084",
    "booking_date": "2025-06-30",
    "booking_status": "completed",
    "route": "LHR → LIS",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 28,
    "credits_remaining": 2,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 620,
    "savings": 40,
    "tax_amount": 62,
    "payment_amount": 660,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 4,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-085",
    "employee_name": "Employee_85",
    "department": "HR",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1085",
    "booking_date": "2025-07-02",
    "booking_status": "completed",
    "route": "BER → MUC",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 280,
    "savings": 15,
    "tax_amount": 28,
    "payment_amount": 300,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 22,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-086",
    "employee_name": "Employee_86",
    "department": "Finance",
    "office": "Tokyo",
    "role": "Analyst",
    "booking_id": "BK-1086",
    "booking_date": "2025-07-04",
    "booking_status": "completed",
    "route": "NRT → HKG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 25,
    "credits_remaining": 5,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 1300,
    "savings": 90,
    "tax_amount": 130,
    "payment_amount": 1370,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 10,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-087",
    "employee_name": "Employee_87",
    "department": "Legal",
    "office": "New York",
    "role": "Director",
    "booking_id": "BK-1087",
    "booking_date": "2025-07-06",
    "booking_status": "completed",
    "route": "JFK → LHR",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 48,
    "credits_remaining": 2,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 3100,
    "savings": 240,
    "tax_amount": 310,
    "payment_amount": 3300,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 2,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-088",
    "employee_name": "Employee_88",
    "department": "Engineering",
    "office": "San Francisco",
    "role": "Developer",
    "booking_id": "BK-1088",
    "booking_date": "2025-07-08",
    "booking_status": "completed",
    "route": "SFO → SLC",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 18,
    "credits_remaining": 7,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 580,
    "savings": 35,
    "tax_amount": 58,
    "payment_amount": 615,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 15,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-089",
    "employee_name": "Employee_89",
    "department": "Marketing",
    "office": "London",
    "role": "Analyst",
    "booking_id": "BK-1089",
    "booking_date": "2025-07-10",
    "booking_status": "completed",
    "route": "LHR → PAR",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 16,
    "credits_remaining": 2,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 310,
    "savings": 15,
    "tax_amount": 31,
    "payment_amount": 330,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 19,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-090",
    "employee_name": "Employee_90",
    "department": "Sales",
    "office": "Berlin",
    "role": "Manager",
    "booking_id": "BK-1090",
    "booking_date": "2025-07-12",
    "booking_status": "completed",
    "route": "BER → FRA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 24,
    "credits_used": 20,
    "credits_remaining": 4,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 390,
    "savings": 20,
    "tax_amount": 39,
    "payment_amount": 415,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 13,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-091",
    "employee_name": "Employee_91",
    "department": "Engineering",
    "office": "Tokyo",
    "role": "Developer",
    "booking_id": "BK-1091",
    "booking_date": "2025-07-14",
    "booking_status": "completed",
    "route": "HND → ITM",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 28,
    "credits_remaining": 2,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 520,
    "savings": 30,
    "tax_amount": 52,
    "payment_amount": 550,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 8,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-092",
    "employee_name": "Employee_92",
    "department": "HR",
    "office": "New York",
    "role": "Coordinator",
    "booking_id": "BK-1092",
    "booking_date": "2025-07-16",
    "booking_status": "completed",
    "route": "LGA → DCA",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Basic",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 280,
    "savings": 15,
    "tax_amount": 28,
    "payment_amount": 300,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 24,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-093",
    "employee_name": "Employee_93",
    "department": "Finance",
    "office": "San Francisco",
    "role": "Manager",
    "booking_id": "BK-1093",
    "booking_date": "2025-07-18",
    "booking_status": "completed",
    "route": "SFO → JFK",
    "zone": "Domestic-East",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 40,
    "credits_used": 38,
    "credits_remaining": 2,
    "baggage_credits": 4,
    "upgrade_credits": 3,
    "total_spend": 2100,
    "savings": 150,
    "tax_amount": 210,
    "payment_amount": 2250,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 6,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 2,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-094",
    "employee_name": "Employee_94",
    "department": "Legal",
    "office": "London",
    "role": "Analyst",
    "booking_id": "BK-1094",
    "booking_date": "2025-07-20",
    "booking_status": "completed",
    "route": "LHR → EDI",
    "zone": "Domestic-East",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 18,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 410,
    "savings": 25,
    "tax_amount": 41,
    "payment_amount": 435,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 16,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-095",
    "employee_name": "Employee_95",
    "department": "Engineering",
    "office": "Berlin",
    "role": "Developer",
    "booking_id": "BK-1095",
    "booking_date": "2025-07-22",
    "booking_status": "completed",
    "route": "BER → AMS",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Standard",
    "credits_allocated": 28,
    "credits_used": 25,
    "credits_remaining": 3,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 620,
    "savings": 40,
    "tax_amount": 62,
    "payment_amount": 660,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 10,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-096",
    "employee_name": "Employee_96",
    "department": "Marketing",
    "office": "Tokyo",
    "role": "Analyst",
    "booking_id": "BK-1096",
    "booking_date": "2025-07-24",
    "booking_status": "completed",
    "route": "NRT → ICN",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 25,
    "credits_used": 20,
    "credits_remaining": 5,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 850,
    "savings": 55,
    "tax_amount": 85,
    "payment_amount": 900,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 12,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-097",
    "employee_name": "Employee_97",
    "department": "Sales",
    "office": "New York",
    "role": "Director",
    "booking_id": "BK-1097",
    "booking_date": "2025-07-26",
    "booking_status": "completed",
    "route": "JFK → CDG",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 48,
    "credits_remaining": 2,
    "baggage_credits": 5,
    "upgrade_credits": 5,
    "total_spend": 3100,
    "savings": 240,
    "tax_amount": 310,
    "payment_amount": 3300,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 3,
    "booking_changes": 2,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 3,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-098",
    "employee_name": "Employee_98",
    "department": "Engineering",
    "office": "San Francisco",
    "role": "Manager",
    "booking_id": "BK-1098",
    "booking_date": "2025-07-28",
    "booking_status": "completed",
    "route": "SFO → PDX",
    "zone": "Domestic-West",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 30,
    "credits_used": 20,
    "credits_remaining": 10,
    "baggage_credits": 3,
    "upgrade_credits": 2,
    "total_spend": 420,
    "savings": 25,
    "tax_amount": 42,
    "payment_amount": 445,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 9,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-099",
    "employee_name": "Employee_99",
    "department": "HR",
    "office": "London",
    "role": "Coordinator",
    "booking_id": "BK-1099",
    "booking_date": "2025-07-30",
    "booking_status": "completed",
    "route": "LHR → DUB",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Basic",
    "credits_allocated": 18,
    "credits_used": 15,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 390,
    "savings": 20,
    "tax_amount": 39,
    "payment_amount": 415,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 17,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-100",
    "employee_name": "Employee_100",
    "department": "Finance",
    "office": "Berlin",
    "role": "Analyst",
    "booking_id": "BK-1100",
    "booking_date": "2025-08-01",
    "booking_status": "completed",
    "route": "BER → MAD",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 22,
    "credits_used": 18,
    "credits_remaining": 4,
    "baggage_credits": 2,
    "upgrade_credits": 1,
    "total_spend": 580,
    "savings": 35,
    "tax_amount": 58,
    "payment_amount": 615,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 14,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },

  {
    "employee_id": "EMP-101",
    "employee_name": "Employee_101",
    "department": "Engineering",
    "office": "London",
    "role": "Senior Developer",
    "booking_id": "BK-1101",
    "booking_date": "2025-08-02",
    "booking_status": "completed",
    "route": "LHR → JFK",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Premium",
    "credits_allocated": 50,
    "credits_used": 42,
    "credits_remaining": 8,
    "baggage_credits": 5,
    "upgrade_credits": 2,
    "total_spend": 1200,
    "savings": 150,
    "tax_amount": 120,
    "payment_amount": 1320,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 3,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 1,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  },
  {
    "employee_id": "EMP-102",
    "employee_name": "Employee_102",
    "department": "Sales",
    "office": "Paris",
    "role": "Account Executive",
    "booking_id": "BK-1102",
    "booking_date": "2025-08-03",
    "booking_status": "pending",
    "route": "CDG → AMS",
    "zone": "Regional",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 15,
    "credits_used": 12,
    "credits_remaining": 3,
    "baggage_credits": 1,
    "upgrade_credits": 0,
    "total_spend": 320,
    "savings": 20,
    "tax_amount": 32,
    "payment_amount": 352,
    "payment_status": "unpaid",
    "active_user": true,
    "last_active_days_ago": 1,
    "booking_changes": 0,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-103",
    "employee_name": "Employee_103",
    "department": "HR",
    "office": "Berlin",
    "role": "Recruiter",
    "booking_id": "BK-1103",
    "booking_date": "2025-08-04",
    "booking_status": "cancelled",
    "route": "BER → FRA",
    "zone": "Domestic",
    "is_peak": false,
    "pass_type": "Standard",
    "credits_allocated": 10,
    "credits_used": 0,
    "credits_remaining": 10,
    "baggage_credits": 0,
    "upgrade_credits": 0,
    "total_spend": 0,
    "savings": 0,
    "tax_amount": 0,
    "payment_amount": 0,
    "payment_status": "refunded",
    "active_user": false,
    "last_active_days_ago": 45,
    "booking_changes": 0,
    "cancellations": 1,
    "no_shows": 0,
    "is_internation_flight": false,
    "extra_baggage_purchased": 0,
    "credit_topups": 0,
    "pass_extensions": 0,
    "upsell_usage": 0
  },
  {
    "employee_id": "EMP-104",
    "employee_name": "Employee_199",
    "department": "Marketing",
    "office": "New York",
    "role": "Creative Lead",
    "booking_id": "BK-1199",
    "booking_date": "2025-11-20",
    "booking_status": "completed",
    "route": "JFK → LHR",
    "zone": "International",
    "is_peak": true,
    "pass_type": "Executive",
    "credits_allocated": 80,
    "credits_used": 75,
    "credits_remaining": 5,
    "baggage_credits": 10,
    "upgrade_credits": 4,
    "total_spend": 2400,
    "savings": 400,
    "tax_amount": 240,
    "payment_amount": 2640,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 2,
    "booking_changes": 3,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 2,
    "credit_topups": 2,
    "pass_extensions": 1,
    "upsell_usage": 3
  },
  {
    "employee_id": "EMP-105",
    "employee_name": "Employee_200",
    "department": "Finance",
    "office": "Singapore",
    "role": "Director",
    "booking_id": "BK-1200",
    "booking_date": "2025-11-21",
    "booking_status": "completed",
    "route": "SIN → SYD",
    "zone": "International",
    "is_peak": false,
    "pass_type": "Premium",
    "credits_allocated": 60,
    "credits_used": 55,
    "credits_remaining": 5,
    "baggage_credits": 4,
    "upgrade_credits": 2,
    "total_spend": 1850,
    "savings": 210,
    "tax_amount": 185,
    "payment_amount": 2035,
    "payment_status": "paid",
    "active_user": true,
    "last_active_days_ago": 5,
    "booking_changes": 1,
    "cancellations": 0,
    "no_shows": 0,
    "is_internation_flight": true,
    "extra_baggage_purchased": 0,
    "credit_topups": 1,
    "pass_extensions": 0,
    "upsell_usage": 1
  }

]



// export const bookings:BookingRecord[]= [ 
//     { "employee_id": "EMP-001", "employee_name": "Employee_1",
// "department": "Marketing", "office": "London", "role": "Admin",
// "booking_id": "BK-9984", "booking_date": "2025-05-06", "booking_status":
// "completed", "route": "Route_9", "zone": "Domestic-East", "is_peak":
// false, "pass_type": "Premium", "credits_allocated": 6574,
// "credits_used": 2984, "credits_remaining": 3590, "baggage_credits": 477,
// "upgrade_credits": 132, "total_spend": 103956, "savings": 6065,
// "tax_amount": 11162, "payment_amount": 128287, "payment_status":
// "completed", "active_user": true, "last_active_days_ago": 17,
// "booking_changes": 4, "cancellations": 0, "no_shows": 1,
// "extra_baggage_purchased": 8, "credit_topups": 1, "pass_extensions": 0,
// "upsell_usage": 0 },
//  { "employee_id": "EMP-002", "employee_name":
// "Employee_2", "department": "Engineering", "office": "Singapore",
// "role": "Finance", "booking_id": "BK-2381", "booking_date":
// "2025-04-12", "booking_status": "completed", "route": "Route_14",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Premium", "credits_allocated": 4248, "credits_used": 1723,
// "credits_remaining": 2525, "baggage_credits": 356, "upgrade_credits":
// 148, "total_spend": 45500, "savings": 6186, "tax_amount": 12636,
// "payment_amount": 70015, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 34, "booking_changes": 6,
// "cancellations": 5, "no_shows": 0, "extra_baggage_purchased": 3,
// "credit_topups": 1, "pass_extensions": 0, "upsell_usage": 5 }, {
// "employee_id": "EMP-003", "employee_name": "Employee_3", "department":
// "Operations", "office": "Mumbai", "role": "Admin", "booking_id":
// "BK-2543", "booking_date": "2025-11-25", "booking_status": "completed",
// "route": "Route_18", "zone": "International-Asia", "is_peak": false,
// "pass_type": "Economy", "credits_allocated": 6930, "credits_used": 3601,
// "credits_remaining": 3329, "baggage_credits": 31, "upgrade_credits":
// 465, "total_spend": 82665, "savings": 8915, "tax_amount": 6081,
// "payment_amount": 105742, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 13, "booking_changes": 0,
// "cancellations": 4, "no_shows": 1, "extra_baggage_purchased": 2,
// "credit_topups": 1, "pass_extensions": 2, "upsell_usage": 4 }, {
// "employee_id": "EMP-004", "employee_name": "Employee_4", "department":
// "Engineering", "office": "Dubai", "role": "Admin", "booking_id":
// "BK-7936", "booking_date": "2025-06-10", "booking_status": "cancelled",
// "route": "Route_16", "zone": "Domestic-West", "is_peak": true,
// "pass_type": "Premium", "credits_allocated": 6414, "credits_used": 4042,
// "credits_remaining": 2372, "baggage_credits": 411, "upgrade_credits":
// 376, "total_spend": 71048, "savings": 15734, "tax_amount": 4384,
// "payment_amount": 78666, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 17, "booking_changes": 7,
// "cancellations": 5, "no_shows": 0, "extra_baggage_purchased": 2,
// "credit_topups": 3, "pass_extensions": 2, "upsell_usage": 1 }, {
// "employee_id": "EMP-005", "employee_name": "Employee_5", "department":
// "Engineering", "office": "Dubai", "role": "Executive", "booking_id":
// "BK-2816", "booking_date": "2025-02-14", "booking_status": "future",
// "route": "Route_2", "zone": "International-Asia", "is_peak": true,
// "pass_type": "Standard", "credits_allocated": 7417, "credits_used":
// 3092, "credits_remaining": 4325, "baggage_credits": 143,
// "upgrade_credits": 422, "total_spend": 65537, "savings": 14039,
// "tax_amount": 13101, "payment_amount": 81268, "payment_status":
// "processing", "active_user": false, "last_active_days_ago": 41,
// "booking_changes": 6, "cancellations": 1, "no_shows": 0,
// "extra_baggage_purchased": 2, "credit_topups": 5, "pass_extensions": 1,
// "upsell_usage": 3 }, { "employee_id": "EMP-006", "employee_name":
// "Employee_6", "department": "Marketing", "office": "New York", "role":
// "Finance", "booking_id": "BK-9087", "booking_date": "2025-02-01",
// "booking_status": "ongoing", "route": "Route_16", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 7647, "credits_used": 4209, "credits_remaining":
// 3438, "baggage_credits": 97, "upgrade_credits": 8, "total_spend":
// 105611, "savings": 24404, "tax_amount": 13856, "payment_amount": 128882,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 41, "booking_changes": 4, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-007",
// "employee_name": "Employee_7", "department": "Finance", "office":
// "Singapore", "role": "Finance", "booking_id": "BK-9940", "booking_date":
// "2025-02-27", "booking_status": "ongoing", "route": "Route_16", "zone":
// "Domestic-Central", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 7900, "credits_used": 3854, "credits_remaining":
// 4046, "baggage_credits": 53, "upgrade_credits": 422, "total_spend":
// 47988, "savings": 10363, "tax_amount": 6968, "payment_amount": 105394,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 26, "booking_changes": 0, "cancellations": 0,
// "no_shows": 0, "extra_baggage_purchased": 5, "credit_topups": 5,
// "pass_extensions": 0, "upsell_usage": 1 }, { "employee_id": "EMP-008",
// "employee_name": "Employee_8", "department": "Marketing", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-9904", "booking_date":
// "2025-09-05", "booking_status": "ongoing", "route": "Route_2", "zone":
// "Domestic-Central", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 6834, "credits_used": 3938, "credits_remaining":
// 2896, "baggage_credits": 219, "upgrade_credits": 356, "total_spend":
// 61876, "savings": 24792, "tax_amount": 5596, "payment_amount": 109572,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 33, "booking_changes": 6, "cancellations": 2,
// "no_shows": 2, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-009",
// "employee_name": "Employee_9", "department": "Operations", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-8668",
// "booking_date": "2025-07-07", "booking_status": "no_show", "route":
// "Route_17", "zone": "Domestic-East", "is_peak": false, "pass_type":
// "Premium", "credits_allocated": 7092, "credits_used": 3435,
// "credits_remaining": 3657, "baggage_credits": 495, "upgrade_credits":
// 172, "total_spend": 73598, "savings": 23819, "tax_amount": 5500,
// "payment_amount": 82184, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 16, "booking_changes": 10,
// "cancellations": 0, "no_shows": 2, "extra_baggage_purchased": 7,
// "credit_topups": 2, "pass_extensions": 1, "upsell_usage": 0 }, {
// "employee_id": "EMP-010", "employee_name": "Employee_10", "department":
// "HR", "office": "Singapore", "role": "Travel Manager", "booking_id":
// "BK-3692", "booking_date": "2025-07-06", "booking_status": "completed",
// "route": "Route_20", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Flexi", "credits_allocated": 4997, "credits_used": 2979,
// "credits_remaining": 2018, "baggage_credits": 201, "upgrade_credits":
// 233, "total_spend": 80641, "savings": 27806, "tax_amount": 8993,
// "payment_amount": 118296, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 27, "booking_changes": 0, "cancellations":
// 4, "no_shows": 1, "extra_baggage_purchased": 1, "credit_topups": 1,
// "pass_extensions": 1, "upsell_usage": 3 }, { "employee_id": "EMP-011",
// "employee_name": "Employee_11", "department": "Finance", "office": "New York", "role": "Finance", "booking_id": "BK-3182", "booking_date":
// "2025-02-16", "booking_status": "completed", "route": "Route_17",
// "zone": "Domestic-West", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 4997, "credits_used": 2050, "credits_remaining":
// 2947, "baggage_credits": 117, "upgrade_credits": 130, "total_spend":
// 56267, "savings": 27373, "tax_amount": 9031, "payment_amount": 63621,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 58, "booking_changes": 1, "cancellations": 0,
// "no_shows": 2, "extra_baggage_purchased": 6, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-012",
// "employee_name": "Employee_12", "department": "HR", "office":
// "Singapore", "role": "Admin", "booking_id": "BK-3024", "booking_date":
// "2025-06-29", "booking_status": "cancelled", "route": "Route_19",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 7063, "credits_used": 2972,
// "credits_remaining": 4091, "baggage_credits": 484, "upgrade_credits":
// 267, "total_spend": 40163, "savings": 5732, "tax_amount": 4320,
// "payment_amount": 132198, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 34, "booking_changes": 2,
// "cancellations": 0, "no_shows": 1, "extra_baggage_purchased": 1,
// "credit_topups": 2, "pass_extensions": 1, "upsell_usage": 2 }, {
// "employee_id": "EMP-013", "employee_name": "Employee_13", "department":
// "HR", "office": "London", "role": "Executive", "booking_id": "BK-3023",
// "booking_date": "2025-06-05", "booking_status": "completed", "route":
// "Route_7", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 7219, "credits_used": 1434,
// "credits_remaining": 5785, "baggage_credits": 29, "upgrade_credits":
// 342, "total_spend": 41675, "savings": 9842, "tax_amount": 6583,
// "payment_amount": 97711, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 54, "booking_changes": 2, "cancellations":
// 5, "no_shows": 2, "extra_baggage_purchased": 3, "credit_topups": 0,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-014",
// "employee_name": "Employee_14", "department": "HR", "office": "New York", "role": "Travel Manager", "booking_id": "BK-5163",
// "booking_date": "2025-08-10", "booking_status": "completed", "route":
// "Route_4", "zone": "Domestic-West", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 6739, "credits_used": 3161,
// "credits_remaining": 3578, "baggage_credits": 324, "upgrade_credits":
// 269, "total_spend": 55106, "savings": 18341, "tax_amount": 7827,
// "payment_amount": 132601, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 2, "booking_changes": 5, "cancellations":
// 5, "no_shows": 1, "extra_baggage_purchased": 2, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 4 }, { "employee_id": "EMP-015",
// "employee_name": "Employee_15", "department": "HR", "office":
// "Singapore", "role": "Admin", "booking_id": "BK-8840", "booking_date":
// "2025-06-30", "booking_status": "cancelled", "route": "Route_15",
// "zone": "Domestic-West", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 5967, "credits_used": 2573, "credits_remaining":
// 3394, "baggage_credits": 88, "upgrade_credits": 354, "total_spend":
// 43646, "savings": 8852, "tax_amount": 8317, "payment_amount": 81507,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 58, "booking_changes": 2, "cancellations": 0,
// "no_shows": 0, "extra_baggage_purchased": 6, "credit_topups": 4,
// "pass_extensions": 2, "upsell_usage": 1 }, { "employee_id": "EMP-016",
// "employee_name": "Employee_16", "department": "Operations", "office":
// "New York", "role": "Admin", "booking_id": "BK-6936", "booking_date":
// "2025-09-11", "booking_status": "cancelled", "route": "Route_10",
// "zone": "International-Asia", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 6887, "credits_used": 1005, "credits_remaining":
// 5882, "baggage_credits": 173, "upgrade_credits": 195, "total_spend":
// 119738, "savings": 29674, "tax_amount": 6913, "payment_amount": 148884,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 35, "booking_changes": 8, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 6, "credit_topups": 3,
// "pass_extensions": 2, "upsell_usage": 1 }, { "employee_id": "EMP-017",
// "employee_name": "Employee_17", "department": "Engineering", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-5471", "booking_date":
// "2025-01-09", "booking_status": "ongoing", "route": "Route_8", "zone":
// "Domestic-Central", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 5819, "credits_used": 4559, "credits_remaining":
// 1260, "baggage_credits": 92, "upgrade_credits": 332, "total_spend":
// 43097, "savings": 9304, "tax_amount": 13490, "payment_amount": 117603,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 43, "booking_changes": 7, "cancellations": 3,
// "no_shows": 2, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-018",
// "employee_name": "Employee_18", "department": "Operations", "office":
// "London", "role": "Finance", "booking_id": "BK-1679", "booking_date":
// "2025-06-11", "booking_status": "future", "route": "Route_13", "zone":
// "Domestic-West", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 4756, "credits_used": 4188, "credits_remaining":
// 568, "baggage_credits": 426, "upgrade_credits": 424, "total_spend":
// 92969, "savings": 10289, "tax_amount": 12846, "payment_amount": 94959,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 24, "booking_changes": 8, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 5, "credit_topups": 5,
// "pass_extensions": 1, "upsell_usage": 1 }, { "employee_id": "EMP-019",
// "employee_name": "Employee_19", "department": "Engineering", "office":
// "London", "role": "Executive", "booking_id": "BK-7995", "booking_date":
// "2025-01-08", "booking_status": "no_show", "route": "Route_7", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 4902, "credits_used": 1260, "credits_remaining":
// 3642, "baggage_credits": 147, "upgrade_credits": 84, "total_spend":
// 66783, "savings": 29547, "tax_amount": 9679, "payment_amount": 69298,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 44, "booking_changes": 3, "cancellations": 5,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 1, "upsell_usage": 3 }, { "employee_id": "EMP-020",
// "employee_name": "Employee_20", "department": "Operations", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-6309", "booking_date":
// "2025-08-06", "booking_status": "future", "route": "Route_1", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 4728, "credits_used": 2243, "credits_remaining":
// 2485, "baggage_credits": 275, "upgrade_credits": 25, "total_spend":
// 96995, "savings": 15786, "tax_amount": 14690, "payment_amount": 119895,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 10, "booking_changes": 0, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 3, "credit_topups": 3,
// "pass_extensions": 2, "upsell_usage": 3 }, { "employee_id": "EMP-021",
// "employee_name": "Employee_21", "department": "Finance", "office":
// "London", "role": "Admin", "booking_id": "BK-8415", "booking_date":
// "2025-08-22", "booking_status": "completed", "route": "Route_2", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 7044, "credits_used": 6331, "credits_remaining":
// 713, "baggage_credits": 420, "upgrade_credits": 125, "total_spend":
// 61706, "savings": 6839, "tax_amount": 4020, "payment_amount": 61822,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 17, "booking_changes": 6, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 5, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-022",
// "employee_name": "Employee_22", "department": "Operations", "office":
// "Mumbai", "role": "Admin", "booking_id": "BK-5725", "booking_date":
// "2025-09-17", "booking_status": "completed", "route": "Route_7", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 5912, "credits_used": 2561, "credits_remaining":
// 3351, "baggage_credits": 96, "upgrade_credits": 132, "total_spend":
// 71026, "savings": 20402, "tax_amount": 13139, "payment_amount": 79868,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 44, "booking_changes": 10, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 4,
// "pass_extensions": 2, "upsell_usage": 0 }, { "employee_id": "EMP-023",
// "employee_name": "Employee_23", "department": "Operations", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-8231",
// "booking_date": "2025-07-01", "booking_status": "completed", "route":
// "Route_4", "zone": "Domestic-West", "is_peak": true, "pass_type":
// "Standard", "credits_allocated": 6944, "credits_used": 2181,
// "credits_remaining": 4763, "baggage_credits": 493, "upgrade_credits":
// 364, "total_spend": 42248, "savings": 19332, "tax_amount": 4185,
// "payment_amount": 52712, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 15, "booking_changes": 10,
// "cancellations": 5, "no_shows": 0, "extra_baggage_purchased": 4,
// "credit_topups": 2, "pass_extensions": 1, "upsell_usage": 1 }, {
// "employee_id": "EMP-024", "employee_name": "Employee_24", "department":
// "Operations", "office": "Singapore", "role": "Executive", "booking_id":
// "BK-8117", "booking_date": "2025-05-06", "booking_status": "completed",
// "route": "Route_10", "zone": "Domestic-West", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 7645, "credits_used": 6522,
// "credits_remaining": 1123, "baggage_credits": 14, "upgrade_credits":
// 173, "total_spend": 49899, "savings": 10375, "tax_amount": 14077,
// "payment_amount": 54429, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 4, "booking_changes": 3, "cancellations":
// 4, "no_shows": 2, "extra_baggage_purchased": 5, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-025",
// "employee_name": "Employee_25", "department": "Operations", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-3585",
// "booking_date": "2025-06-07", "booking_status": "no_show", "route":
// "Route_20", "zone": "Domestic-Central", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 6761, "credits_used": 3412,
// "credits_remaining": 3349, "baggage_credits": 500, "upgrade_credits":
// 311, "total_spend": 54291, "savings": 28159, "tax_amount": 11058,
// "payment_amount": 64320, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 49, "booking_changes": 5, "cancellations":
// 4, "no_shows": 0, "extra_baggage_purchased": 3, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-026",
// "employee_name": "Employee_26", "department": "Marketing", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-3474", "booking_date":
// "2025-07-06", "booking_status": "completed", "route": "Route_7", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 5106, "credits_used": 2693, "credits_remaining":
// 2413, "baggage_credits": 178, "upgrade_credits": 214, "total_spend":
// 108077, "savings": 28262, "tax_amount": 13705, "payment_amount": 121055,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 43, "booking_changes": 2, "cancellations": 4,
// "no_shows": 0, "extra_baggage_purchased": 4, "credit_topups": 5,
// "pass_extensions": 0, "upsell_usage": 0 }, { "employee_id": "EMP-027",
// "employee_name": "Employee_27", "department": "Operations", "office":
// "London", "role": "Admin", "booking_id": "BK-8686", "booking_date":
// "2025-07-18", "booking_status": "cancelled", "route": "Route_6", "zone":
// "Domestic-West", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 6155, "credits_used": 2807, "credits_remaining":
// 3348, "baggage_credits": 116, "upgrade_credits": 230, "total_spend":
// 65197, "savings": 23012, "tax_amount": 10410, "payment_amount": 91381,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 47, "booking_changes": 0, "cancellations": 3,
// "no_shows": 2, "extra_baggage_purchased": 5, "credit_topups": 3,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-028",
// "employee_name": "Employee_28", "department": "Engineering", "office":
// "Mumbai", "role": "Finance", "booking_id": "BK-7071", "booking_date":
// "2025-02-16", "booking_status": "completed", "route": "Route_20",
// "zone": "International-Europe", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 4720, "credits_used": 2014, "credits_remaining":
// 2706, "baggage_credits": 239, "upgrade_credits": 383, "total_spend":
// 121385, "savings": 14140, "tax_amount": 8960, "payment_amount": 121720,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 52, "booking_changes": 7, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 0, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 1 }, { "employee_id": "EMP-029",
// "employee_name": "Employee_29", "department": "Finance", "office":
// "Mumbai", "role": "Finance", "booking_id": "BK-5690", "booking_date":
// "2025-10-21", "booking_status": "no_show", "route": "Route_2", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 6457, "credits_used": 3506, "credits_remaining":
// 2951, "baggage_credits": 311, "upgrade_credits": 457, "total_spend":
// 42541, "savings": 15397, "tax_amount": 6027, "payment_amount": 146619,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 38, "booking_changes": 6, "cancellations": 5,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-030",
// "employee_name": "Employee_30", "department": "Finance", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-8032", "booking_date":
// "2025-03-04", "booking_status": "ongoing", "route": "Route_14", "zone":
// "Domestic-Central", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 4612, "credits_used": 2331, "credits_remaining":
// 2281, "baggage_credits": 70, "upgrade_credits": 262, "total_spend":
// 113802, "savings": 17991, "tax_amount": 7803, "payment_amount": 135020,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 44, "booking_changes": 2, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 5, "credit_topups": 3,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-031",
// "employee_name": "Employee_31", "department": "Engineering", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-2316", "booking_date":
// "2025-11-27", "booking_status": "ongoing", "route": "Route_18", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 5669, "credits_used": 1542, "credits_remaining":
// 4127, "baggage_credits": 146, "upgrade_credits": 330, "total_spend":
// 48423, "savings": 16747, "tax_amount": 4027, "payment_amount": 52289,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 4, "booking_changes": 0, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 6, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-032",
// "employee_name": "Employee_32", "department": "Operations", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-7838", "booking_date":
// "2025-08-27", "booking_status": "future", "route": "Route_13", "zone":
// "Domestic-West", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 7423, "credits_used": 7042, "credits_remaining":
// 381, "baggage_credits": 341, "upgrade_credits": 167, "total_spend":
// 111158, "savings": 25746, "tax_amount": 9646, "payment_amount": 148334,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 55, "booking_changes": 9, "cancellations": 3,
// "no_shows": 2, "extra_baggage_purchased": 0, "credit_topups": 1,
// "pass_extensions": 2, "upsell_usage": 0 }, { "employee_id": "EMP-033",
// "employee_name": "Employee_33", "department": "HR", "office": "New York", "role": "Finance", "booking_id": "BK-1153", "booking_date":
// "2025-07-04", "booking_status": "cancelled", "route": "Route_15",
// "zone": "Domestic-West", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 7955, "credits_used": 2916, "credits_remaining":
// 5039, "baggage_credits": 420, "upgrade_credits": 299, "total_spend":
// 42438, "savings": 16382, "tax_amount": 12779, "payment_amount": 139085,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 50, "booking_changes": 2, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 3, "credit_topups": 3,
// "pass_extensions": 1, "upsell_usage": 2 }, { "employee_id": "EMP-034",
// "employee_name": "Employee_34", "department": "Operations", "office":
// "New York", "role": "Finance", "booking_id": "BK-6312", "booking_date":
// "2025-07-27", "booking_status": "ongoing", "route": "Route_15", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 4745, "credits_used": 4421, "credits_remaining":
// 324, "baggage_credits": 500, "upgrade_credits": 434, "total_spend":
// 77261, "savings": 21003, "tax_amount": 9462, "payment_amount": 110953,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 33, "booking_changes": 0, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 1, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 0 }, { "employee_id": "EMP-035",
// "employee_name": "Employee_35", "department": "Sales", "office":
// "Dubai", "role": "Admin", "booking_id": "BK-2341", "booking_date":
// "2025-05-11", "booking_status": "future", "route": "Route_6", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 6440, "credits_used": 2130, "credits_remaining":
// 4310, "baggage_credits": 430, "upgrade_credits": 419, "total_spend":
// 51725, "savings": 6029, "tax_amount": 8059, "payment_amount": 127928,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 10, "booking_changes": 2, "cancellations": 0,
// "no_shows": 0, "extra_baggage_purchased": 2, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-036",
// "employee_name": "Employee_36", "department": "Operations", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-1754",
// "booking_date": "2025-12-04", "booking_status": "completed", "route":
// "Route_5", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 5156, "credits_used": 1244,
// "credits_remaining": 3912, "baggage_credits": 121, "upgrade_credits":
// 61, "total_spend": 43761, "savings": 19459, "tax_amount": 10266,
// "payment_amount": 132567, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 32, "booking_changes": 6,
// "cancellations": 5, "no_shows": 2, "extra_baggage_purchased": 8,
// "credit_topups": 2, "pass_extensions": 2, "upsell_usage": 1 }, {
// "employee_id": "EMP-037", "employee_name": "Employee_37", "department":
// "Finance", "office": "New York", "role": "Finance", "booking_id":
// "BK-3403", "booking_date": "2025-01-05", "booking_status": "future",
// "route": "Route_13", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Flexi", "credits_allocated": 6238, "credits_used": 2813,
// "credits_remaining": 3425, "baggage_credits": 41, "upgrade_credits":
// 406, "total_spend": 77760, "savings": 29914, "tax_amount": 6288,
// "payment_amount": 141191, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 28, "booking_changes": 10,
// "cancellations": 3, "no_shows": 2, "extra_baggage_purchased": 0,
// "credit_topups": 4, "pass_extensions": 2, "upsell_usage": 0 }, {
// "employee_id": "EMP-038", "employee_name": "Employee_38", "department":
// "Marketing", "office": "New York", "role": "Executive", "booking_id":
// "BK-2560", "booking_date": "2025-01-20", "booking_status": "completed",
// "route": "Route_18", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Flexi", "credits_allocated": 6355, "credits_used": 3176,
// "credits_remaining": 3179, "baggage_credits": 192, "upgrade_credits":
// 85, "total_spend": 47085, "savings": 27931, "tax_amount": 5180,
// "payment_amount": 52235, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 58, "booking_changes": 5, "cancellations":
// 3, "no_shows": 1, "extra_baggage_purchased": 2, "credit_topups": 0,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-039",
// "employee_name": "Employee_39", "department": "Engineering", "office":
// "New York", "role": "Admin", "booking_id": "BK-1230", "booking_date":
// "2025-02-09", "booking_status": "future", "route": "Route_10", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 7514, "credits_used": 5525, "credits_remaining":
// 1989, "baggage_credits": 112, "upgrade_credits": 431, "total_spend":
// 50004, "savings": 18169, "tax_amount": 9253, "payment_amount": 125702,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 54, "booking_changes": 10, "cancellations": 2,
// "no_shows": 2, "extra_baggage_purchased": 7, "credit_topups": 2,
// "pass_extensions": 1, "upsell_usage": 5 }, { "employee_id": "EMP-040",
// "employee_name": "Employee_40", "department": "HR", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-2388",
// "booking_date": "2025-06-12", "booking_status": "cancelled", "route":
// "Route_12", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 5383, "credits_used": 3037,
// "credits_remaining": 2346, "baggage_credits": 199, "upgrade_credits":
// 147, "total_spend": 97817, "savings": 24913, "tax_amount": 4205,
// "payment_amount": 122703, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 33, "booking_changes": 6, "cancellations":
// 5, "no_shows": 0, "extra_baggage_purchased": 0, "credit_topups": 3,
// "pass_extensions": 2, "upsell_usage": 3 }, { "employee_id": "EMP-041",
// "employee_name": "Employee_41", "department": "Engineering", "office":
// "London", "role": "Finance", "booking_id": "BK-3684", "booking_date":
// "2025-06-24", "booking_status": "cancelled", "route": "Route_2", "zone":
// "Domestic-Central", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 4278, "credits_used": 3874, "credits_remaining":
// 404, "baggage_credits": 342, "upgrade_credits": 493, "total_spend":
// 59199, "savings": 16571, "tax_amount": 9504, "payment_amount": 133309,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 54, "booking_changes": 4, "cancellations": 1,
// "no_shows": 0, "extra_baggage_purchased": 4, "credit_topups": 3,
// "pass_extensions": 2, "upsell_usage": 4 }, { "employee_id": "EMP-042",
// "employee_name": "Employee_42", "department": "HR", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-2321",
// "booking_date": "2025-12-21", "booking_status": "ongoing", "route":
// "Route_8", "zone": "Domestic-East", "is_peak": true, "pass_type":
// "Economy", "credits_allocated": 6964, "credits_used": 5816,
// "credits_remaining": 1148, "baggage_credits": 195, "upgrade_credits":
// 72, "total_spend": 85922, "savings": 29471, "tax_amount": 14489,
// "payment_amount": 104930, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 43, "booking_changes": 4, "cancellations":
// 5, "no_shows": 1, "extra_baggage_purchased": 6, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 4 }, { "employee_id": "EMP-043",
// "employee_name": "Employee_43", "department": "Marketing", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-9729", "booking_date":
// "2025-09-08", "booking_status": "future", "route": "Route_2", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 4099, "credits_used": 3326, "credits_remaining":
// 773, "baggage_credits": 114, "upgrade_credits": 24, "total_spend":
// 56127, "savings": 11168, "tax_amount": 10708, "payment_amount": 57545,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 18, "booking_changes": 6, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 8, "credit_topups": 0,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-044",
// "employee_name": "Employee_44", "department": "Engineering", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-5833",
// "booking_date": "2025-11-10", "booking_status": "cancelled", "route":
// "Route_8", "zone": "International-Europe", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 5438, "credits_used": 2765,
// "credits_remaining": 2673, "baggage_credits": 421, "upgrade_credits":
// 22, "total_spend": 72428, "savings": 6992, "tax_amount": 3587,
// "payment_amount": 118649, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 30, "booking_changes": 1, "cancellations":
// 4, "no_shows": 1, "extra_baggage_purchased": 8, "credit_topups": 1,
// "pass_extensions": 2, "upsell_usage": 2 }, { "employee_id": "EMP-045",
// "employee_name": "Employee_45", "department": "HR", "office": "London",
// "role": "Travel Manager", "booking_id": "BK-2847", "booking_date":
// "2025-02-10", "booking_status": "future", "route": "Route_3", "zone":
// "International-Asia", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 7571, "credits_used": 6945, "credits_remaining":
// 626, "baggage_credits": 151, "upgrade_credits": 0, "total_spend": 54172,
// "savings": 22959, "tax_amount": 5606, "payment_amount": 79989,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 5, "booking_changes": 3, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 8, "credit_topups": 5,
// "pass_extensions": 3, "upsell_usage": 3 }, { "employee_id": "EMP-046",
// "employee_name": "Employee_46", "department": "HR", "office": "Mumbai",
// "role": "Finance", "booking_id": "BK-1642", "booking_date":
// "2025-06-29", "booking_status": "ongoing", "route": "Route_4", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 5486, "credits_used": 3245, "credits_remaining":
// 2241, "baggage_credits": 392, "upgrade_credits": 107, "total_spend":
// 62842, "savings": 16265, "tax_amount": 4689, "payment_amount": 95467,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 57, "booking_changes": 1, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 1,
// "pass_extensions": 1, "upsell_usage": 3 }, { "employee_id": "EMP-047",
// "employee_name": "Employee_47", "department": "HR", "office": "Dubai",
// "role": "Executive", "booking_id": "BK-1154", "booking_date":
// "2025-10-21", "booking_status": "future", "route": "Route_19", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 6234, "credits_used": 5586, "credits_remaining":
// 648, "baggage_credits": 16, "upgrade_credits": 208, "total_spend":
// 43626, "savings": 26925, "tax_amount": 11633, "payment_amount": 54355,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 19, "booking_changes": 8, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 5, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-048",
// "employee_name": "Employee_48", "department": "Sales", "office": "New York", "role": "Travel Manager", "booking_id": "BK-8654",
// "booking_date": "2025-06-13", "booking_status": "completed", "route":
// "Route_1", "zone": "Domestic-Central", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 6459, "credits_used": 6402,
// "credits_remaining": 57, "baggage_credits": 205, "upgrade_credits": 405,
// "total_spend": 82336, "savings": 13423, "tax_amount": 11425,
// "payment_amount": 145240, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 4, "booking_changes": 2, "cancellations":
// 5, "no_shows": 1, "extra_baggage_purchased": 7, "credit_topups": 4,
// "pass_extensions": 2, "upsell_usage": 4 }, { "employee_id": "EMP-049",
// "employee_name": "Employee_49", "department": "HR", "office": "Mumbai",
// "role": "Executive", "booking_id": "BK-5375", "booking_date":
// "2025-08-16", "booking_status": "cancelled", "route": "Route_12",
// "zone": "International-Europe", "is_peak": true, "pass_type":
// "Standard", "credits_allocated": 7551, "credits_used": 5895,
// "credits_remaining": 1656, "baggage_credits": 257, "upgrade_credits":
// 54, "total_spend": 107885, "savings": 5825, "tax_amount": 11832,
// "payment_amount": 130511, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 49, "booking_changes": 1, "cancellations":
// 5, "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 4 }, { "employee_id": "EMP-050",
// "employee_name": "Employee_50", "department": "Operations", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-9509", "booking_date":
// "2025-04-06", "booking_status": "future", "route": "Route_9", "zone":
// "Domestic-West", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 5826, "credits_used": 1459, "credits_remaining":
// 4367, "baggage_credits": 10, "upgrade_credits": 173, "total_spend":
// 115774, "savings": 13192, "tax_amount": 10482, "payment_amount": 135338,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 18, "booking_changes": 3, "cancellations": 0,
// "no_shows": 2, "extra_baggage_purchased": 3, "credit_topups": 3,
// "pass_extensions": 0, "upsell_usage": 1 }, { "employee_id": "EMP-051",
// "employee_name": "Employee_51", "department": "Marketing", "office":
// "New York", "role": "Admin", "booking_id": "BK-6142", "booking_date":
// "2025-06-28", "booking_status": "cancelled", "route": "Route_4", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 7664, "credits_used": 3216, "credits_remaining":
// 4448, "baggage_credits": 272, "upgrade_credits": 363, "total_spend":
// 69558, "savings": 26957, "tax_amount": 11021, "payment_amount": 118195,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 19, "booking_changes": 2, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 1, "upsell_usage": 1 }, { "employee_id": "EMP-052",
// "employee_name": "Employee_52", "department": "Engineering", "office":
// "New York", "role": "Finance", "booking_id": "BK-2028", "booking_date":
// "2025-04-15", "booking_status": "completed", "route": "Route_14",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 5987, "credits_used": 4554,
// "credits_remaining": 1433, "baggage_credits": 88, "upgrade_credits":
// 447, "total_spend": 91931, "savings": 20429, "tax_amount": 5817,
// "payment_amount": 131807, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 21, "booking_changes": 3, "cancellations":
// 0, "no_shows": 2, "extra_baggage_purchased": 7, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-053",
// "employee_name": "Employee_53", "department": "Engineering", "office":
// "Dubai", "role": "Admin", "booking_id": "BK-2429", "booking_date":
// "2025-02-09", "booking_status": "cancelled", "route": "Route_11",
// "zone": "International-Asia", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 6615, "credits_used": 3916, "credits_remaining":
// 2699, "baggage_credits": 121, "upgrade_credits": 73, "total_spend":
// 62353, "savings": 18554, "tax_amount": 10875, "payment_amount": 79232,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 9, "booking_changes": 3, "cancellations": 0,
// "no_shows": 2, "extra_baggage_purchased": 4, "credit_topups": 5,
// "pass_extensions": 0, "upsell_usage": 0 }, { "employee_id": "EMP-054",
// "employee_name": "Employee_54", "department": "Engineering", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-3452", "booking_date":
// "2025-12-17", "booking_status": "future", "route": "Route_1", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 4629, "credits_used": 1463, "credits_remaining":
// 3166, "baggage_credits": 436, "upgrade_credits": 170, "total_spend":
// 43059, "savings": 15150, "tax_amount": 13771, "payment_amount": 107816,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 41, "booking_changes": 0, "cancellations": 2,
// "no_shows": 0, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-055",
// "employee_name": "Employee_55", "department": "Sales", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-9672",
// "booking_date": "2025-06-30", "booking_status": "no_show", "route":
// "Route_13", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 7863, "credits_used": 5564,
// "credits_remaining": 2299, "baggage_credits": 368, "upgrade_credits":
// 271, "total_spend": 104408, "savings": 19697, "tax_amount": 4945,
// "payment_amount": 126828, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 38, "booking_changes": 10,
// "cancellations": 5, "no_shows": 2, "extra_baggage_purchased": 6,
// "credit_topups": 2, "pass_extensions": 3, "upsell_usage": 0 }, {
// "employee_id": "EMP-056", "employee_name": "Employee_56", "department":
// "Finance", "office": "Mumbai", "role": "Finance", "booking_id":
// "BK-3390", "booking_date": "2025-10-10", "booking_status": "no_show",
// "route": "Route_14", "zone": "International-Asia", "is_peak": true,
// "pass_type": "Standard", "credits_allocated": 4892, "credits_used":
// 3293, "credits_remaining": 1599, "baggage_credits": 190,
// "upgrade_credits": 378, "total_spend": 63450, "savings": 25668,
// "tax_amount": 14208, "payment_amount": 66552, "payment_status":
// "processing", "active_user": false, "last_active_days_ago": 44,
// "booking_changes": 10, "cancellations": 4, "no_shows": 1,
// "extra_baggage_purchased": 1, "credit_topups": 0, "pass_extensions": 0,
// "upsell_usage": 3 }, { "employee_id": "EMP-057", "employee_name":
// "Employee_57", "department": "HR", "office": "Singapore", "role":
// "Executive", "booking_id": "BK-5228", "booking_date": "2025-06-22",
// "booking_status": "no_show", "route": "Route_9", "zone":
// "Domestic-Central", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 4621, "credits_used": 2661, "credits_remaining":
// 1960, "baggage_credits": 15, "upgrade_credits": 264, "total_spend":
// 108551, "savings": 12836, "tax_amount": 6628, "payment_amount": 124617,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 49, "booking_changes": 3, "cancellations": 5,
// "no_shows": 2, "extra_baggage_purchased": 8, "credit_topups": 3,
// "pass_extensions": 3, "upsell_usage": 4 }, { "employee_id": "EMP-058",
// "employee_name": "Employee_58", "department": "Engineering", "office":
// "New York", "role": "Executive", "booking_id": "BK-7447",
// "booking_date": "2025-12-12", "booking_status": "no_show", "route":
// "Route_14", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Standard", "credits_allocated": 7066, "credits_used":
// 5218, "credits_remaining": 1848, "baggage_credits": 375,
// "upgrade_credits": 500, "total_spend": 50618, "savings": 27252,
// "tax_amount": 12386, "payment_amount": 52893, "payment_status":
// "completed", "active_user": true, "last_active_days_ago": 17,
// "booking_changes": 7, "cancellations": 4, "no_shows": 2,
// "extra_baggage_purchased": 1, "credit_topups": 2, "pass_extensions": 3,
// "upsell_usage": 0 }, { "employee_id": "EMP-059", "employee_name":
// "Employee_59", "department": "Marketing", "office": "London", "role":
// "Travel Manager", "booking_id": "BK-3929", "booking_date": "2025-08-05",
// "booking_status": "ongoing", "route": "Route_9", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 6368, "credits_used": 5095, "credits_remaining":
// 1273, "baggage_credits": 174, "upgrade_credits": 126, "total_spend":
// 117844, "savings": 17674, "tax_amount": 5378, "payment_amount": 134055,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 18, "booking_changes": 9, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 3,
// "pass_extensions": 1, "upsell_usage": 1 }, { "employee_id": "EMP-060",
// "employee_name": "Employee_60", "department": "Finance", "office": "New York", "role": "Admin", "booking_id": "BK-2586", "booking_date":
// "2025-04-16", "booking_status": "completed", "route": "Route_4", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 7190, "credits_used": 2336, "credits_remaining":
// 4854, "baggage_credits": 440, "upgrade_credits": 468, "total_spend":
// 58631, "savings": 12217, "tax_amount": 5964, "payment_amount": 60186,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 32, "booking_changes": 4, "cancellations": 3,
// "no_shows": 2, "extra_baggage_purchased": 5, "credit_topups": 3,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-061",
// "employee_name": "Employee_61", "department": "Operations", "office":
// "Dubai", "role": "Admin", "booking_id": "BK-8152", "booking_date":
// "2025-12-13", "booking_status": "ongoing", "route": "Route_3", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 5351, "credits_used": 2395, "credits_remaining":
// 2956, "baggage_credits": 323, "upgrade_credits": 316, "total_spend":
// 47136, "savings": 5553, "tax_amount": 6821, "payment_amount": 62148,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 23, "booking_changes": 8, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 1,
// "pass_extensions": 0, "upsell_usage": 0 }, { "employee_id": "EMP-062",
// "employee_name": "Employee_62", "department": "Sales", "office":
// "Singapore", "role": "Finance", "booking_id": "BK-3946", "booking_date":
// "2025-01-22", "booking_status": "no_show", "route": "Route_3", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 6134, "credits_used": 3388, "credits_remaining":
// 2746, "baggage_credits": 251, "upgrade_credits": 27, "total_spend":
// 53783, "savings": 29226, "tax_amount": 10809, "payment_amount": 113291,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 6, "booking_changes": 9, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 1, "credit_topups": 5,
// "pass_extensions": 1, "upsell_usage": 2 }, { "employee_id": "EMP-063",
// "employee_name": "Employee_63", "department": "Marketing", "office":
// "New York", "role": "Admin", "booking_id": "BK-8415", "booking_date":
// "2025-09-16", "booking_status": "completed", "route": "Route_18",
// "zone": "International-Europe", "is_peak": true, "pass_type":
// "Standard", "credits_allocated": 6525, "credits_used": 1423,
// "credits_remaining": 5102, "baggage_credits": 226, "upgrade_credits":
// 192, "total_spend": 55398, "savings": 14138, "tax_amount": 8537,
// "payment_amount": 107686, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 6, "booking_changes": 5, "cancellations":
// 4, "no_shows": 0, "extra_baggage_purchased": 5, "credit_topups": 3,
// "pass_extensions": 0, "upsell_usage": 4 }, { "employee_id": "EMP-064",
// "employee_name": "Employee_64", "department": "Operations", "office":
// "Mumbai", "role": "Finance", "booking_id": "BK-7571", "booking_date":
// "2025-01-11", "booking_status": "future", "route": "Route_9", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 6166, "credits_used": 2847, "credits_remaining":
// 3319, "baggage_credits": 430, "upgrade_credits": 122, "total_spend":
// 46957, "savings": 21334, "tax_amount": 4175, "payment_amount": 67765,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 26, "booking_changes": 9, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 3, "credit_topups": 0,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-065",
// "employee_name": "Employee_65", "department": "Sales", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-3384", "booking_date":
// "2025-06-21", "booking_status": "cancelled", "route": "Route_19",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 6419, "credits_used": 3921,
// "credits_remaining": 2498, "baggage_credits": 321, "upgrade_credits":
// 445, "total_spend": 47946, "savings": 5025, "tax_amount": 11550,
// "payment_amount": 59892, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 32, "booking_changes": 4,
// "cancellations": 4, "no_shows": 2, "extra_baggage_purchased": 0,
// "credit_topups": 1, "pass_extensions": 2, "upsell_usage": 5 }, {
// "employee_id": "EMP-066", "employee_name": "Employee_66", "department":
// "Marketing", "office": "Dubai", "role": "Travel Manager", "booking_id":
// "BK-9340", "booking_date": "2025-12-12", "booking_status": "future",
// "route": "Route_6", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Premium", "credits_allocated": 6110, "credits_used": 1480,
// "credits_remaining": 4630, "baggage_credits": 377, "upgrade_credits":
// 491, "total_spend": 41478, "savings": 25597, "tax_amount": 4086,
// "payment_amount": 51786, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 53, "booking_changes": 4,
// "cancellations": 2, "no_shows": 2, "extra_baggage_purchased": 8,
// "credit_topups": 2, "pass_extensions": 2, "upsell_usage": 4 }, {
// "employee_id": "EMP-067", "employee_name": "Employee_67", "department":
// "Engineering", "office": "London", "role": "Executive", "booking_id":
// "BK-2580", "booking_date": "2025-05-10", "booking_status": "future",
// "route": "Route_13", "zone": "Domestic-West", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 7056, "credits_used": 2035,
// "credits_remaining": 5021, "baggage_credits": 166, "upgrade_credits":
// 496, "total_spend": 63731, "savings": 16328, "tax_amount": 13518,
// "payment_amount": 84705, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 16, "booking_changes": 7, "cancellations":
// 3, "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-068",
// "employee_name": "Employee_68", "department": "HR", "office": "Mumbai",
// "role": "Admin", "booking_id": "BK-7826", "booking_date": "2025-02-13",
// "booking_status": "future", "route": "Route_10", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 4898, "credits_used": 2638, "credits_remaining":
// 2260, "baggage_credits": 434, "upgrade_credits": 172, "total_spend":
// 54240, "savings": 19508, "tax_amount": 11398, "payment_amount": 116186,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 17, "booking_changes": 6, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 3, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-069",
// "employee_name": "Employee_69", "department": "Finance", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-8078", "booking_date":
// "2025-07-14", "booking_status": "cancelled", "route": "Route_3", "zone":
// "Domestic-Central", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 5711, "credits_used": 3794, "credits_remaining":
// 1917, "baggage_credits": 44, "upgrade_credits": 242, "total_spend":
// 94990, "savings": 17778, "tax_amount": 13503, "payment_amount": 105298,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 24, "booking_changes": 8, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 2, "upsell_usage": 5 }, { "employee_id": "EMP-070",
// "employee_name": "Employee_70", "department": "Finance", "office": "New York", "role": "Finance", "booking_id": "BK-8531", "booking_date":
// "2025-12-07", "booking_status": "cancelled", "route": "Route_16",
// "zone": "International-Europe", "is_peak": true, "pass_type":
// "Standard", "credits_allocated": 7427, "credits_used": 4243,
// "credits_remaining": 3184, "baggage_credits": 411, "upgrade_credits": 4,
// "total_spend": 41915, "savings": 16836, "tax_amount": 6791,
// "payment_amount": 97351, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 5, "booking_changes": 10, "cancellations":
// 5, "no_shows": 0, "extra_baggage_purchased": 3, "credit_topups": 1,
// "pass_extensions": 1, "upsell_usage": 3 }, { "employee_id": "EMP-071",
// "employee_name": "Employee_71", "department": "Engineering", "office":
// "London", "role": "Executive", "booking_id": "BK-2240", "booking_date":
// "2025-05-30", "booking_status": "cancelled", "route": "Route_4", "zone":
// "Domestic-Central", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 4666, "credits_used": 1980, "credits_remaining":
// 2686, "baggage_credits": 224, "upgrade_credits": 189, "total_spend":
// 84827, "savings": 28853, "tax_amount": 12104, "payment_amount": 110567,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 31, "booking_changes": 5, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 1, "credit_topups": 5,
// "pass_extensions": 3, "upsell_usage": 4 }, { "employee_id": "EMP-072",
// "employee_name": "Employee_72", "department": "Operations", "office":
// "London", "role": "Finance", "booking_id": "BK-9069", "booking_date":
// "2025-07-31", "booking_status": "future", "route": "Route_11", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 7061, "credits_used": 6026, "credits_remaining":
// 1035, "baggage_credits": 53, "upgrade_credits": 258, "total_spend":
// 51593, "savings": 23630, "tax_amount": 4306, "payment_amount": 53504,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 40, "booking_changes": 10, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 6, "credit_topups": 3,
// "pass_extensions": 3, "upsell_usage": 3 }, { "employee_id": "EMP-073",
// "employee_name": "Employee_73", "department": "Sales", "office": "New York", "role": "Executive", "booking_id": "BK-1306", "booking_date":
// "2025-03-03", "booking_status": "no_show", "route": "Route_14", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 6404, "credits_used": 4438, "credits_remaining":
// 1966, "baggage_credits": 167, "upgrade_credits": 15, "total_spend":
// 50762, "savings": 16317, "tax_amount": 8385, "payment_amount": 99761,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 50, "booking_changes": 8, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 7, "credit_topups": 4,
// "pass_extensions": 1, "upsell_usage": 0 }, { "employee_id": "EMP-074",
// "employee_name": "Employee_74", "department": "Operations", "office":
// "Mumbai", "role": "Admin", "booking_id": "BK-4512", "booking_date":
// "2025-03-01", "booking_status": "ongoing", "route": "Route_7", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 7260, "credits_used": 2021, "credits_remaining":
// 5239, "baggage_credits": 177, "upgrade_credits": 96, "total_spend":
// 75618, "savings": 23208, "tax_amount": 9827, "payment_amount": 99154,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 31, "booking_changes": 5, "cancellations": 5,
// "no_shows": 2, "extra_baggage_purchased": 4, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 4 }, { "employee_id": "EMP-075",
// "employee_name": "Employee_75", "department": "Finance", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-3590",
// "booking_date": "2025-01-11", "booking_status": "future", "route":
// "Route_8", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 7817, "credits_used": 4383,
// "credits_remaining": 3434, "baggage_credits": 9, "upgrade_credits": 207,
// "total_spend": 40425, "savings": 21269, "tax_amount": 4161,
// "payment_amount": 83361, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 52, "booking_changes": 8, "cancellations":
// 0, "no_shows": 2, "extra_baggage_purchased": 2, "credit_topups": 5,
// "pass_extensions": 3, "upsell_usage": 0 }, { "employee_id": "EMP-076",
// "employee_name": "Employee_76", "department": "Engineering", "office":
// "London", "role": "Executive", "booking_id": "BK-2565", "booking_date":
// "2025-02-12", "booking_status": "cancelled", "route": "Route_8", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 4605, "credits_used": 3337, "credits_remaining":
// 1268, "baggage_credits": 466, "upgrade_credits": 120, "total_spend":
// 86048, "savings": 24920, "tax_amount": 6242, "payment_amount": 108380,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 34, "booking_changes": 5, "cancellations": 5,
// "no_shows": 0, "extra_baggage_purchased": 0, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 1 }, { "employee_id": "EMP-077",
// "employee_name": "Employee_77", "department": "HR", "office": "Mumbai",
// "role": "Finance", "booking_id": "BK-4407", "booking_date":
// "2025-09-11", "booking_status": "no_show", "route": "Route_2", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 7763, "credits_used": 6423, "credits_remaining":
// 1340, "baggage_credits": 482, "upgrade_credits": 193, "total_spend":
// 128572, "savings": 16947, "tax_amount": 5495, "payment_amount": 146390,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 8, "booking_changes": 0, "cancellations": 2,
// "no_shows": 2, "extra_baggage_purchased": 4, "credit_topups": 0,
// "pass_extensions": 2, "upsell_usage": 3 }, { "employee_id": "EMP-078",
// "employee_name": "Employee_78", "department": "Operations", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-1483",
// "booking_date": "2025-06-12", "booking_status": "cancelled", "route":
// "Route_9", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 5643, "credits_used": 3071,
// "credits_remaining": 2572, "baggage_credits": 298, "upgrade_credits":
// 134, "total_spend": 58765, "savings": 17623, "tax_amount": 13736,
// "payment_amount": 102262, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 7, "booking_changes": 10,
// "cancellations": 1, "no_shows": 0, "extra_baggage_purchased": 4,
// "credit_topups": 2, "pass_extensions": 2, "upsell_usage": 1 }, {
// "employee_id": "EMP-079", "employee_name": "Employee_79", "department":
// "Marketing", "office": "Mumbai", "role": "Finance", "booking_id":
// "BK-7907", "booking_date": "2025-03-20", "booking_status": "no_show",
// "route": "Route_15", "zone": "Domestic-West", "is_peak": true,
// "pass_type": "Premium", "credits_allocated": 7428, "credits_used": 5411,
// "credits_remaining": 2017, "baggage_credits": 398, "upgrade_credits":
// 347, "total_spend": 75241, "savings": 7087, "tax_amount": 4780,
// "payment_amount": 149616, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 19, "booking_changes": 5,
// "cancellations": 3, "no_shows": 2, "extra_baggage_purchased": 5,
// "credit_topups": 3, "pass_extensions": 1, "upsell_usage": 1 }, {
// "employee_id": "EMP-080", "employee_name": "Employee_80", "department":
// "HR", "office": "Mumbai", "role": "Travel Manager", "booking_id":
// "BK-2034", "booking_date": "2025-02-09", "booking_status": "completed",
// "route": "Route_3", "zone": "Domestic-East", "is_peak": true,
// "pass_type": "Standard", "credits_allocated": 7181, "credits_used":
// 2085, "credits_remaining": 5096, "baggage_credits": 10,
// "upgrade_credits": 158, "total_spend": 42729, "savings": 6739,
// "tax_amount": 14377, "payment_amount": 68635, "payment_status":
// "completed", "active_user": true, "last_active_days_ago": 41,
// "booking_changes": 2, "cancellations": 0, "no_shows": 2,
// "extra_baggage_purchased": 0, "credit_topups": 4, "pass_extensions": 3,
// "upsell_usage": 5 }, { "employee_id": "EMP-081", "employee_name":
// "Employee_81", "department": "Sales", "office": "Singapore", "role":
// "Travel Manager", "booking_id": "BK-8266", "booking_date": "2025-12-16",
// "booking_status": "future", "route": "Route_19", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 6512, "credits_used": 5036, "credits_remaining":
// 1476, "baggage_credits": 101, "upgrade_credits": 236, "total_spend":
// 113555, "savings": 11807, "tax_amount": 8526, "payment_amount": 149702,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 23, "booking_changes": 7, "cancellations": 4,
// "no_shows": 2, "extra_baggage_purchased": 3, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-082",
// "employee_name": "Employee_82", "department": "Finance", "office":
// "Singapore", "role": "Admin", "booking_id": "BK-8549", "booking_date":
// "2025-02-03", "booking_status": "cancelled", "route": "Route_6", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 5639, "credits_used": 4178, "credits_remaining":
// 1461, "baggage_credits": 130, "upgrade_credits": 458, "total_spend":
// 69602, "savings": 15851, "tax_amount": 14739, "payment_amount": 106929,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 56, "booking_changes": 3, "cancellations": 3,
// "no_shows": 2, "extra_baggage_purchased": 7, "credit_topups": 3,
// "pass_extensions": 1, "upsell_usage": 2 }, { "employee_id": "EMP-083",
// "employee_name": "Employee_83", "department": "HR", "office": "New York", "role": "Executive", "booking_id": "BK-9460", "booking_date":
// "2025-02-18", "booking_status": "ongoing", "route": "Route_13", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 7209, "credits_used": 3048, "credits_remaining":
// 4161, "baggage_credits": 11, "upgrade_credits": 82, "total_spend":
// 66098, "savings": 22114, "tax_amount": 11444, "payment_amount": 92881,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 34, "booking_changes": 3, "cancellations": 5,
// "no_shows": 0, "extra_baggage_purchased": 7, "credit_topups": 3,
// "pass_extensions": 1, "upsell_usage": 5 }, { "employee_id": "EMP-084",
// "employee_name": "Employee_84", "department": "HR", "office": "London",
// "role": "Travel Manager", "booking_id": "BK-2715", "booking_date":
// "2025-03-05", "booking_status": "cancelled", "route": "Route_8", "zone":
// "International-Asia", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 5634, "credits_used": 2389, "credits_remaining":
// 3245, "baggage_credits": 201, "upgrade_credits": 188, "total_spend":
// 59630, "savings": 23503, "tax_amount": 12510, "payment_amount": 104709,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 23, "booking_changes": 2, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 1, "upsell_usage": 0 }, { "employee_id": "EMP-085",
// "employee_name": "Employee_85", "department": "Marketing", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-1562",
// "booking_date": "2025-02-09", "booking_status": "future", "route":
// "Route_9", "zone": "Domestic-East", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 6360, "credits_used": 1356,
// "credits_remaining": 5004, "baggage_credits": 75, "upgrade_credits":
// 352, "total_spend": 53164, "savings": 15466, "tax_amount": 9201,
// "payment_amount": 67698, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 31, "booking_changes": 7, "cancellations":
// 2, "no_shows": 2, "extra_baggage_purchased": 2, "credit_topups": 0,
// "pass_extensions": 2, "upsell_usage": 3 }, { "employee_id": "EMP-086",
// "employee_name": "Employee_86", "department": "Marketing", "office":
// "London", "role": "Finance", "booking_id": "BK-7431", "booking_date":
// "2025-09-12", "booking_status": "no_show", "route": "Route_8", "zone":
// "International-Asia", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 7347, "credits_used": 1607, "credits_remaining":
// 5740, "baggage_credits": 466, "upgrade_credits": 160, "total_spend":
// 40063, "savings": 17546, "tax_amount": 13265, "payment_amount": 123368,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 44, "booking_changes": 0, "cancellations": 4,
// "no_shows": 1, "extra_baggage_purchased": 6, "credit_topups": 1,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-087",
// "employee_name": "Employee_87", "department": "Engineering", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-5919", "booking_date":
// "2025-02-18", "booking_status": "future", "route": "Route_19", "zone":
// "International-Asia", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 6054, "credits_used": 4558, "credits_remaining":
// 1496, "baggage_credits": 456, "upgrade_credits": 52, "total_spend":
// 60315, "savings": 11042, "tax_amount": 4698, "payment_amount": 101017,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 8, "booking_changes": 8, "cancellations": 1,
// "no_shows": 0, "extra_baggage_purchased": 3, "credit_topups": 0,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-088",
// "employee_name": "Employee_88", "department": "Operations", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-7218",
// "booking_date": "2025-10-30", "booking_status": "cancelled", "route":
// "Route_8", "zone": "Domestic-East", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 4256, "credits_used": 2898,
// "credits_remaining": 1358, "baggage_credits": 209, "upgrade_credits":
// 36, "total_spend": 128145, "savings": 13400, "tax_amount": 6920,
// "payment_amount": 133701, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 29, "booking_changes": 7,
// "cancellations": 3, "no_shows": 1, "extra_baggage_purchased": 1,
// "credit_topups": 5, "pass_extensions": 3, "upsell_usage": 4 }, {
// "employee_id": "EMP-089", "employee_name": "Employee_89", "department":
// "Engineering", "office": "London", "role": "Finance", "booking_id":
// "BK-5858", "booking_date": "2025-08-07", "booking_status": "future",
// "route": "Route_13", "zone": "Domestic-East", "is_peak": false,
// "pass_type": "Standard", "credits_allocated": 5069, "credits_used":
// 4239, "credits_remaining": 830, "baggage_credits": 394,
// "upgrade_credits": 292, "total_spend": 44754, "savings": 24321,
// "tax_amount": 12469, "payment_amount": 94338, "payment_status":
// "pending", "active_user": true, "last_active_days_ago": 31,
// "booking_changes": 4, "cancellations": 1, "no_shows": 0,
// "extra_baggage_purchased": 0, "credit_topups": 0, "pass_extensions": 1,
// "upsell_usage": 2 }, { "employee_id": "EMP-090", "employee_name":
// "Employee_90", "department": "Marketing", "office": "New York", "role":
// "Admin", "booking_id": "BK-4206", "booking_date": "2025-08-25",
// "booking_status": "completed", "route": "Route_5", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 4238, "credits_used": 2933, "credits_remaining":
// 1305, "baggage_credits": 168, "upgrade_credits": 16, "total_spend":
// 86796, "savings": 21771, "tax_amount": 5259, "payment_amount": 89911,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 56, "booking_changes": 6, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 0, "credit_topups": 5,
// "pass_extensions": 2, "upsell_usage": 3 }, { "employee_id": "EMP-091",
// "employee_name": "Employee_91", "department": "Marketing", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-2381", "booking_date":
// "2025-04-14", "booking_status": "completed", "route": "Route_11",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 5834, "credits_used": 3006,
// "credits_remaining": 2828, "baggage_credits": 257, "upgrade_credits":
// 328, "total_spend": 72105, "savings": 28857, "tax_amount": 10799,
// "payment_amount": 106269, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 41, "booking_changes": 1, "cancellations":
// 1, "no_shows": 2, "extra_baggage_purchased": 4, "credit_topups": 3,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-092",
// "employee_name": "Employee_92", "department": "Sales", "office": "New York", "role": "Executive", "booking_id": "BK-5681", "booking_date":
// "2025-10-20", "booking_status": "future", "route": "Route_20", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 5937, "credits_used": 3969, "credits_remaining":
// 1968, "baggage_credits": 342, "upgrade_credits": 486, "total_spend":
// 79928, "savings": 10085, "tax_amount": 10028, "payment_amount": 98252,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 59, "booking_changes": 0, "cancellations": 5,
// "no_shows": 1, "extra_baggage_purchased": 7, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-093",
// "employee_name": "Employee_93", "department": "Finance", "office": "New York", "role": "Executive", "booking_id": "BK-7659", "booking_date":
// "2025-01-13", "booking_status": "future", "route": "Route_14", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 7997, "credits_used": 6695, "credits_remaining":
// 1302, "baggage_credits": 254, "upgrade_credits": 116, "total_spend":
// 68218, "savings": 18517, "tax_amount": 13018, "payment_amount": 82227,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 38, "booking_changes": 1, "cancellations": 1,
// "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 2 }, { "employee_id": "EMP-094",
// "employee_name": "Employee_94", "department": "HR", "office": "London",
// "role": "Admin", "booking_id": "BK-8641", "booking_date": "2025-04-12",
// "booking_status": "future", "route": "Route_3", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 7440, "credits_used": 7187, "credits_remaining":
// 253, "baggage_credits": 333, "upgrade_credits": 327, "total_spend":
// 76664, "savings": 12764, "tax_amount": 8408, "payment_amount": 104621,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 0, "booking_changes": 10, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 0, "credit_topups": 5,
// "pass_extensions": 2, "upsell_usage": 1 }, { "employee_id": "EMP-095",
// "employee_name": "Employee_95", "department": "Operations", "office":
// "London", "role": "Executive", "booking_id": "BK-5085", "booking_date":
// "2025-10-03", "booking_status": "ongoing", "route": "Route_12", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 4398, "credits_used": 2159, "credits_remaining":
// 2239, "baggage_credits": 47, "upgrade_credits": 446, "total_spend":
// 56047, "savings": 7013, "tax_amount": 6046, "payment_amount": 110837,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 29, "booking_changes": 8, "cancellations": 4,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 1, "upsell_usage": 0 }, { "employee_id": "EMP-096",
// "employee_name": "Employee_96", "department": "Operations", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-8724",
// "booking_date": "2025-11-03", "booking_status": "no_show", "route":
// "Route_12", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Premium", "credits_allocated": 7830, "credits_used": 2243,
// "credits_remaining": 5587, "baggage_credits": 255, "upgrade_credits":
// 404, "total_spend": 57572, "savings": 9130, "tax_amount": 5589,
// "payment_amount": 125752, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 0, "booking_changes": 10,
// "cancellations": 2, "no_shows": 2, "extra_baggage_purchased": 4,
// "credit_topups": 4, "pass_extensions": 1, "upsell_usage": 0 }, {
// "employee_id": "EMP-097", "employee_name": "Employee_97", "department":
// "Finance", "office": "Mumbai", "role": "Admin", "booking_id": "BK-5307",
// "booking_date": "2025-08-11", "booking_status": "no_show", "route":
// "Route_1", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 4856, "credits_used": 4197,
// "credits_remaining": 659, "baggage_credits": 138, "upgrade_credits": 91,
// "total_spend": 44389, "savings": 21163, "tax_amount": 8512,
// "payment_amount": 81881, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 46, "booking_changes": 8, "cancellations":
// 2, "no_shows": 2, "extra_baggage_purchased": 5, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-098",
// "employee_name": "Employee_98", "department": "HR", "office": "Dubai",
// "role": "Executive", "booking_id": "BK-6389", "booking_date":
// "2025-07-14", "booking_status": "future", "route": "Route_16", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 4843, "credits_used": 4629, "credits_remaining":
// 214, "baggage_credits": 341, "upgrade_credits": 33, "total_spend":
// 41708, "savings": 21177, "tax_amount": 11831, "payment_amount": 54782,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 14, "booking_changes": 2, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 1, "credit_topups": 0,
// "pass_extensions": 1, "upsell_usage": 4 }, { "employee_id": "EMP-099",
// "employee_name": "Employee_99", "department": "Sales", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-3747", "booking_date":
// "2025-04-20", "booking_status": "completed", "route": "Route_12",
// "zone": "Domestic-Central", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 4656, "credits_used": 4217, "credits_remaining":
// 439, "baggage_credits": 382, "upgrade_credits": 41, "total_spend":
// 85950, "savings": 9532, "tax_amount": 14107, "payment_amount": 129797,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 17, "booking_changes": 9, "cancellations": 4,
// "no_shows": 1, "extra_baggage_purchased": 8, "credit_topups": 1,
// "pass_extensions": 1, "upsell_usage": 3 }, { "employee_id": "EMP-100",
// "employee_name": "Employee_100", "department": "Engineering", "office":
// "New York", "role": "Executive", "booking_id": "BK-7646",
// "booking_date": "2025-02-16", "booking_status": "completed", "route":
// "Route_18", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 6584, "credits_used": 3075,
// "credits_remaining": 3509, "baggage_credits": 91, "upgrade_credits":
// 366, "total_spend": 66535, "savings": 7854, "tax_amount": 4623,
// "payment_amount": 91484, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 30, "booking_changes": 3,
// "cancellations": 0, "no_shows": 0, "extra_baggage_purchased": 1,
// "credit_topups": 3, "pass_extensions": 3, "upsell_usage": 4 }, {
// "employee_id": "EMP-101", "employee_name": "Employee_101", "department":
// "Sales", "office": "New York", "role": "Travel Manager", "booking_id":
// "BK-8197", "booking_date": "2025-03-09", "booking_status": "future",
// "route": "Route_9", "zone": "Domestic-West", "is_peak": true,
// "pass_type": "Economy", "credits_allocated": 7491, "credits_used": 2983,
// "credits_remaining": 4508, "baggage_credits": 284, "upgrade_credits":
// 416, "total_spend": 52321, "savings": 18283, "tax_amount": 7322,
// "payment_amount": 54865, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 31, "booking_changes": 4,
// "cancellations": 2, "no_shows": 1, "extra_baggage_purchased": 6,
// "credit_topups": 3, "pass_extensions": 2, "upsell_usage": 1 }, {
// "employee_id": "EMP-102", "employee_name": "Employee_102", "department":
// "Marketing", "office": "Singapore", "role": "Executive", "booking_id":
// "BK-8905", "booking_date": "2025-11-06", "booking_status": "ongoing",
// "route": "Route_1", "zone": "Domestic-Central", "is_peak": true,
// "pass_type": "Flexi", "credits_allocated": 7306, "credits_used": 3935,
// "credits_remaining": 3371, "baggage_credits": 81, "upgrade_credits":
// 486, "total_spend": 62034, "savings": 6513, "tax_amount": 7026,
// "payment_amount": 141629, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 12, "booking_changes": 5, "cancellations":
// 3, "no_shows": 2, "extra_baggage_purchased": 3, "credit_topups": 3,
// "pass_extensions": 3, "upsell_usage": 4 }, { "employee_id": "EMP-103",
// "employee_name": "Employee_103", "department": "Engineering", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-9378",
// "booking_date": "2025-02-27", "booking_status": "ongoing", "route":
// "Route_2", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 7184, "credits_used": 1691,
// "credits_remaining": 5493, "baggage_credits": 177, "upgrade_credits":
// 381, "total_spend": 123949, "savings": 9273, "tax_amount": 10249,
// "payment_amount": 126951, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 26, "booking_changes": 5, "cancellations":
// 2, "no_shows": 0, "extra_baggage_purchased": 6, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 0 }, { "employee_id": "EMP-104",
// "employee_name": "Employee_104", "department": "HR", "office": "London",
// "role": "Executive", "booking_id": "BK-5324", "booking_date":
// "2025-07-16", "booking_status": "ongoing", "route": "Route_7", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 5567, "credits_used": 5507, "credits_remaining":
// 60, "baggage_credits": 379, "upgrade_credits": 291, "total_spend":
// 56670, "savings": 13539, "tax_amount": 13816, "payment_amount": 112824,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 51, "booking_changes": 0, "cancellations": 3,
// "no_shows": 2, "extra_baggage_purchased": 7, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-105",
// "employee_name": "Employee_105", "department": "Operations", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-6902", "booking_date":
// "2025-12-08", "booking_status": "ongoing", "route": "Route_17", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 6891, "credits_used": 1617, "credits_remaining":
// 5274, "baggage_credits": 155, "upgrade_credits": 174, "total_spend":
// 97728, "savings": 6415, "tax_amount": 9775, "payment_amount": 105181,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 22, "booking_changes": 2, "cancellations": 5,
// "no_shows": 1, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 1, "upsell_usage": 2 }, { "employee_id": "EMP-106",
// "employee_name": "Employee_106", "department": "Operations", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-9612",
// "booking_date": "2025-01-04", "booking_status": "ongoing", "route":
// "Route_16", "zone": "International-Asia", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 7089, "credits_used": 4301,
// "credits_remaining": 2788, "baggage_credits": 89, "upgrade_credits": 86,
// "total_spend": 94132, "savings": 23352, "tax_amount": 9423,
// "payment_amount": 128352, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 24, "booking_changes": 7,
// "cancellations": 5, "no_shows": 0, "extra_baggage_purchased": 8,
// "credit_topups": 3, "pass_extensions": 1, "upsell_usage": 0 }, {
// "employee_id": "EMP-107", "employee_name": "Employee_107", "department":
// "Engineering", "office": "Singapore", "role": "Travel Manager",
// "booking_id": "BK-9510", "booking_date": "2025-11-28", "booking_status":
// "ongoing", "route": "Route_7", "zone": "International-Asia", "is_peak":
// true, "pass_type": "Premium", "credits_allocated": 4983, "credits_used":
// 4429, "credits_remaining": 554, "baggage_credits": 173,
// "upgrade_credits": 189, "total_spend": 112481, "savings": 28488,
// "tax_amount": 5146, "payment_amount": 124622, "payment_status":
// "completed", "active_user": false, "last_active_days_ago": 49,
// "booking_changes": 7, "cancellations": 2, "no_shows": 2,
// "extra_baggage_purchased": 2, "credit_topups": 4, "pass_extensions": 0,
// "upsell_usage": 3 }, { "employee_id": "EMP-108", "employee_name":
// "Employee_108", "department": "Marketing", "office": "New York", "role":
// "Travel Manager", "booking_id": "BK-2229", "booking_date": "2025-07-10",
// "booking_status": "ongoing", "route": "Route_11", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 5244, "credits_used": 3938, "credits_remaining":
// 1306, "baggage_credits": 386, "upgrade_credits": 481, "total_spend":
// 40247, "savings": 15432, "tax_amount": 5589, "payment_amount": 98351,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 47, "booking_changes": 6, "cancellations": 3,
// "no_shows": 1, "extra_baggage_purchased": 2, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-109",
// "employee_name": "Employee_109", "department": "Operations", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-8149",
// "booking_date": "2025-09-12", "booking_status": "future", "route":
// "Route_1", "zone": "Domestic-East", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 5551, "credits_used": 1808,
// "credits_remaining": 3743, "baggage_credits": 259, "upgrade_credits":
// 54, "total_spend": 51392, "savings": 5201, "tax_amount": 9422,
// "payment_amount": 64529, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 31, "booking_changes": 2, "cancellations":
// 1, "no_shows": 2, "extra_baggage_purchased": 2, "credit_topups": 5,
// "pass_extensions": 1, "upsell_usage": 3 }, { "employee_id": "EMP-110",
// "employee_name": "Employee_110", "department": "Engineering", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-9922", "booking_date":
// "2025-07-29", "booking_status": "future", "route": "Route_11", "zone":
// "International-Asia", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 5105, "credits_used": 2917, "credits_remaining":
// 2188, "baggage_credits": 339, "upgrade_credits": 208, "total_spend":
// 40693, "savings": 9536, "tax_amount": 12482, "payment_amount": 58564,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 32, "booking_changes": 9, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 2, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 2 }, { "employee_id": "EMP-111",
// "employee_name": "Employee_111", "department": "Sales", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-2631",
// "booking_date": "2025-05-01", "booking_status": "no_show", "route":
// "Route_6", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Premium", "credits_allocated": 7175, "credits_used": 1990,
// "credits_remaining": 5185, "baggage_credits": 196, "upgrade_credits":
// 468, "total_spend": 84484, "savings": 8973, "tax_amount": 5618,
// "payment_amount": 100059, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 33, "booking_changes": 8, "cancellations":
// 4, "no_shows": 2, "extra_baggage_purchased": 2, "credit_topups": 5,
// "pass_extensions": 2, "upsell_usage": 0 }, { "employee_id": "EMP-112",
// "employee_name": "Employee_112", "department": "Marketing", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-8759",
// "booking_date": "2025-11-08", "booking_status": "ongoing", "route":
// "Route_17", "zone": "Domestic-West", "is_peak": true, "pass_type":
// "Flexi", "credits_allocated": 5482, "credits_used": 1379,
// "credits_remaining": 4103, "baggage_credits": 75, "upgrade_credits":
// 197, "total_spend": 73521, "savings": 26802, "tax_amount": 3086,
// "payment_amount": 98302, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 59, "booking_changes": 3,
// "cancellations": 5, "no_shows": 1, "extra_baggage_purchased": 1,
// "credit_topups": 4, "pass_extensions": 0, "upsell_usage": 1 }, {
// "employee_id": "EMP-113", "employee_name": "Employee_113", "department":
// "Engineering", "office": "New York", "role": "Admin", "booking_id":
// "BK-3989", "booking_date": "2025-10-14", "booking_status": "cancelled",
// "route": "Route_14", "zone": "Domestic-East", "is_peak": false,
// "pass_type": "Economy", "credits_allocated": 4599, "credits_used": 1307,
// "credits_remaining": 3292, "baggage_credits": 297, "upgrade_credits":
// 105, "total_spend": 125266, "savings": 29231, "tax_amount": 13141,
// "payment_amount": 137837, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 27, "booking_changes": 2, "cancellations":
// 0, "no_shows": 2, "extra_baggage_purchased": 3, "credit_topups": 0,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-114",
// "employee_name": "Employee_114", "department": "Marketing", "office":
// "New York", "role": "Travel Manager", "booking_id": "BK-3132",
// "booking_date": "2025-03-28", "booking_status": "cancelled", "route":
// "Route_19", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Economy", "credits_allocated": 7569, "credits_used": 5600,
// "credits_remaining": 1969, "baggage_credits": 98, "upgrade_credits": 35,
// "total_spend": 69092, "savings": 14412, "tax_amount": 9751,
// "payment_amount": 128440, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 51, "booking_changes": 5, "cancellations":
// 2, "no_shows": 1, "extra_baggage_purchased": 1, "credit_topups": 4,
// "pass_extensions": 1, "upsell_usage": 2 }, { "employee_id": "EMP-115",
// "employee_name": "Employee_115", "department": "Operations", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-8767", "booking_date":
// "2025-06-07", "booking_status": "completed", "route": "Route_18",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Premium", "credits_allocated": 5930, "credits_used": 1116,
// "credits_remaining": 4814, "baggage_credits": 359, "upgrade_credits":
// 58, "total_spend": 40450, "savings": 25401, "tax_amount": 5757,
// "payment_amount": 83902, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 21, "booking_changes": 4, "cancellations":
// 3, "no_shows": 0, "extra_baggage_purchased": 6, "credit_topups": 2,
// "pass_extensions": 1, "upsell_usage": 4 }, { "employee_id": "EMP-116",
// "employee_name": "Employee_116", "department": "Operations", "office":
// "New York", "role": "Admin", "booking_id": "BK-3474", "booking_date":
// "2025-05-21", "booking_status": "cancelled", "route": "Route_5", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 7293, "credits_used": 1092, "credits_remaining":
// 6201, "baggage_credits": 441, "upgrade_credits": 359, "total_spend":
// 48334, "savings": 19028, "tax_amount": 10046, "payment_amount": 66754,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 52, "booking_changes": 5, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 5, "credit_topups": 0,
// "pass_extensions": 3, "upsell_usage": 4 }, { "employee_id": "EMP-117",
// "employee_name": "Employee_117", "department": "Engineering", "office":
// "London", "role": "Travel Manager", "booking_id": "BK-7028",
// "booking_date": "2025-03-17", "booking_status": "no_show", "route":
// "Route_8", "zone": "International-Asia", "is_peak": true, "pass_type":
// "Flexi", "credits_allocated": 4187, "credits_used": 2680,
// "credits_remaining": 1507, "baggage_credits": 157, "upgrade_credits": 0,
// "total_spend": 106840, "savings": 17685, "tax_amount": 11845,
// "payment_amount": 123391, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 29, "booking_changes": 6, "cancellations":
// 2, "no_shows": 2, "extra_baggage_purchased": 5, "credit_topups": 4,
// "pass_extensions": 2, "upsell_usage": 4 }, { "employee_id": "EMP-118",
// "employee_name": "Employee_118", "department": "HR", "office": "Mumbai",
// "role": "Finance", "booking_id": "BK-2780", "booking_date":
// "2025-11-22", "booking_status": "ongoing", "route": "Route_7", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 6245, "credits_used": 1480, "credits_remaining":
// 4765, "baggage_credits": 331, "upgrade_credits": 370, "total_spend":
// 52251, "savings": 22624, "tax_amount": 5145, "payment_amount": 136062,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 53, "booking_changes": 0, "cancellations": 5,
// "no_shows": 0, "extra_baggage_purchased": 7, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 2 }, { "employee_id": "EMP-119",
// "employee_name": "Employee_119", "department": "Marketing", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-8577", "booking_date":
// "2025-12-31", "booking_status": "no_show", "route": "Route_9", "zone":
// "Domestic-Central", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 6969, "credits_used": 3927, "credits_remaining":
// 3042, "baggage_credits": 170, "upgrade_credits": 279, "total_spend":
// 57007, "savings": 6425, "tax_amount": 12238, "payment_amount": 73789,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 33, "booking_changes": 5, "cancellations": 4,
// "no_shows": 0, "extra_baggage_purchased": 6, "credit_topups": 0,
// "pass_extensions": 2, "upsell_usage": 2 }, { "employee_id": "EMP-120",
// "employee_name": "Employee_120", "department": "Operations", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-7587",
// "booking_date": "2025-02-02", "booking_status": "future", "route":
// "Route_15", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Premium", "credits_allocated": 7517, "credits_used": 3891,
// "credits_remaining": 3626, "baggage_credits": 356, "upgrade_credits":
// 84, "total_spend": 41043, "savings": 25308, "tax_amount": 3473,
// "payment_amount": 64815, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 9, "booking_changes": 5, "cancellations":
// 2, "no_shows": 1, "extra_baggage_purchased": 0, "credit_topups": 1,
// "pass_extensions": 2, "upsell_usage": 1 }, { "employee_id": "EMP-121",
// "employee_name": "Employee_121", "department": "Sales", "office":
// "London", "role": "Travel Manager", "booking_id": "BK-7532",
// "booking_date": "2025-03-06", "booking_status": "completed", "route":
// "Route_6", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 4027, "credits_used": 3556,
// "credits_remaining": 471, "baggage_credits": 192, "upgrade_credits":
// 148, "total_spend": 105218, "savings": 26353, "tax_amount": 5508,
// "payment_amount": 137248, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 0, "booking_changes": 7, "cancellations":
// 3, "no_shows": 2, "extra_baggage_purchased": 7, "credit_topups": 5,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-122",
// "employee_name": "Employee_122", "department": "Finance", "office":
// "Singapore", "role": "Admin", "booking_id": "BK-7836", "booking_date":
// "2025-10-16", "booking_status": "future", "route": "Route_11", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 7248, "credits_used": 6120, "credits_remaining":
// 1128, "baggage_credits": 207, "upgrade_credits": 39, "total_spend":
// 54652, "savings": 16549, "tax_amount": 9109, "payment_amount": 78087,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 16, "booking_changes": 10, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 6, "credit_topups": 5,
// "pass_extensions": 1, "upsell_usage": 4 }, { "employee_id": "EMP-123",
// "employee_name": "Employee_123", "department": "Marketing", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-1842", "booking_date":
// "2025-05-05", "booking_status": "completed", "route": "Route_20",
// "zone": "Domestic-Central", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 4383, "credits_used": 2395, "credits_remaining":
// 1988, "baggage_credits": 293, "upgrade_credits": 71, "total_spend":
// 57484, "savings": 12211, "tax_amount": 4110, "payment_amount": 77470,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 21, "booking_changes": 10, "cancellations": 5,
// "no_shows": 0, "extra_baggage_purchased": 1, "credit_topups": 5,
// "pass_extensions": 1, "upsell_usage": 2 }, { "employee_id": "EMP-124",
// "employee_name": "Employee_124", "department": "Operations", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-5213",
// "booking_date": "2025-04-29", "booking_status": "ongoing", "route":
// "Route_20", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 6559, "credits_used": 2198,
// "credits_remaining": 4361, "baggage_credits": 147, "upgrade_credits":
// 71, "total_spend": 41110, "savings": 5374, "tax_amount": 5359,
// "payment_amount": 71021, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 23, "booking_changes": 10,
// "cancellations": 0, "no_shows": 2, "extra_baggage_purchased": 5,
// "credit_topups": 4, "pass_extensions": 0, "upsell_usage": 3 }, {
// "employee_id": "EMP-125", "employee_name": "Employee_125", "department":
// "Finance", "office": "Mumbai", "role": "Travel Manager", "booking_id":
// "BK-1127", "booking_date": "2025-01-30", "booking_status": "completed",
// "route": "Route_18", "zone": "Domestic-East", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 7488, "credits_used": 2034,
// "credits_remaining": 5454, "baggage_credits": 238, "upgrade_credits":
// 198, "total_spend": 63022, "savings": 21168, "tax_amount": 5320,
// "payment_amount": 88692, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 12, "booking_changes": 4, "cancellations":
// 4, "no_shows": 0, "extra_baggage_purchased": 2, "credit_topups": 3,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-126",
// "employee_name": "Employee_126", "department": "Sales", "office": "New York", "role": "Travel Manager", "booking_id": "BK-6870",
// "booking_date": "2025-04-24", "booking_status": "no_show", "route":
// "Route_13", "zone": "Domestic-Central", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 7529, "credits_used": 3265,
// "credits_remaining": 4264, "baggage_credits": 488, "upgrade_credits":
// 134, "total_spend": 44625, "savings": 26683, "tax_amount": 11648,
// "payment_amount": 66282, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 33, "booking_changes": 0,
// "cancellations": 1, "no_shows": 1, "extra_baggage_purchased": 0,
// "credit_topups": 0, "pass_extensions": 0, "upsell_usage": 4 }, {
// "employee_id": "EMP-127", "employee_name": "Employee_127", "department":
// "HR", "office": "London", "role": "Admin", "booking_id": "BK-3108",
// "booking_date": "2025-04-06", "booking_status": "no_show", "route":
// "Route_4", "zone": "International-Asia", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 7396, "credits_used": 6235,
// "credits_remaining": 1161, "baggage_credits": 1, "upgrade_credits": 344,
// "total_spend": 56585, "savings": 16670, "tax_amount": 10152,
// "payment_amount": 98962, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 44, "booking_changes": 4, "cancellations":
// 5, "no_shows": 2, "extra_baggage_purchased": 3, "credit_topups": 0,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-128",
// "employee_name": "Employee_128", "department": "Marketing", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-2460",
// "booking_date": "2025-10-07", "booking_status": "cancelled", "route":
// "Route_13", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 7798, "credits_used": 4964,
// "credits_remaining": 2834, "baggage_credits": 403, "upgrade_credits":
// 79, "total_spend": 86772, "savings": 26794, "tax_amount": 4761,
// "payment_amount": 88321, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 0, "booking_changes": 4, "cancellations":
// 1, "no_shows": 1, "extra_baggage_purchased": 1, "credit_topups": 3,
// "pass_extensions": 0, "upsell_usage": 3 }, { "employee_id": "EMP-129",
// "employee_name": "Employee_129", "department": "HR", "office": "Dubai",
// "role": "Executive", "booking_id": "BK-8359", "booking_date":
// "2025-12-20", "booking_status": "future", "route": "Route_10", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 5066, "credits_used": 1894, "credits_remaining":
// 3172, "baggage_credits": 451, "upgrade_credits": 184, "total_spend":
// 52482, "savings": 16006, "tax_amount": 11403, "payment_amount": 90584,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 48, "booking_changes": 1, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 4, "credit_topups": 0,
// "pass_extensions": 2, "upsell_usage": 4 }, { "employee_id": "EMP-130",
// "employee_name": "Employee_130", "department": "Operations", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-3007",
// "booking_date": "2025-04-09", "booking_status": "future", "route":
// "Route_5", "zone": "Domestic-Central", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 4803, "credits_used": 4662,
// "credits_remaining": 141, "baggage_credits": 342, "upgrade_credits":
// 203, "total_spend": 91746, "savings": 12692, "tax_amount": 4143,
// "payment_amount": 112355, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 47, "booking_changes": 3,
// "cancellations": 4, "no_shows": 0, "extra_baggage_purchased": 7,
// "credit_topups": 3, "pass_extensions": 1, "upsell_usage": 1 }, {
// "employee_id": "EMP-131", "employee_name": "Employee_131", "department":
// "Marketing", "office": "London", "role": "Executive", "booking_id":
// "BK-5801", "booking_date": "2025-10-10", "booking_status": "no_show",
// "route": "Route_1", "zone": "Domestic-East", "is_peak": true,
// "pass_type": "Flexi", "credits_allocated": 4620, "credits_used": 1711,
// "credits_remaining": 2909, "baggage_credits": 464, "upgrade_credits":
// 159, "total_spend": 48816, "savings": 21235, "tax_amount": 12652,
// "payment_amount": 51289, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 1, "booking_changes": 4, "cancellations":
// 4, "no_shows": 0, "extra_baggage_purchased": 6, "credit_topups": 3,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-132",
// "employee_name": "Employee_132", "department": "Finance", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-9918", "booking_date":
// "2025-08-05", "booking_status": "completed", "route": "Route_13",
// "zone": "Domestic-Central", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 5111, "credits_used": 1229, "credits_remaining":
// 3882, "baggage_credits": 369, "upgrade_credits": 198, "total_spend":
// 47812, "savings": 16619, "tax_amount": 11488, "payment_amount": 101859,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 31, "booking_changes": 4, "cancellations": 5,
// "no_shows": 2, "extra_baggage_purchased": 1, "credit_topups": 1,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-133",
// "employee_name": "Employee_133", "department": "Finance", "office": "New York", "role": "Executive", "booking_id": "BK-2557", "booking_date":
// "2025-12-28", "booking_status": "completed", "route": "Route_1", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 6468, "credits_used": 2818, "credits_remaining":
// 3650, "baggage_credits": 315, "upgrade_credits": 444, "total_spend":
// 93861, "savings": 11259, "tax_amount": 4950, "payment_amount": 122985,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 21, "booking_changes": 3, "cancellations": 5,
// "no_shows": 2, "extra_baggage_purchased": 0, "credit_topups": 3,
// "pass_extensions": 0, "upsell_usage": 4 }, { "employee_id": "EMP-134",
// "employee_name": "Employee_134", "department": "Operations", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-7382", "booking_date":
// "2025-01-04", "booking_status": "completed", "route": "Route_16",
// "zone": "Domestic-East", "is_peak": false, "pass_type": "Economy",
// "credits_allocated": 7882, "credits_used": 6105, "credits_remaining":
// 1777, "baggage_credits": 358, "upgrade_credits": 90, "total_spend":
// 108199, "savings": 29458, "tax_amount": 5395, "payment_amount": 132493,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 31, "booking_changes": 5, "cancellations": 2,
// "no_shows": 0, "extra_baggage_purchased": 0, "credit_topups": 0,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-135",
// "employee_name": "Employee_135", "department": "Operations", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-8482",
// "booking_date": "2025-06-29", "booking_status": "ongoing", "route":
// "Route_8", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Standard", "credits_allocated": 4078, "credits_used":
// 2247, "credits_remaining": 1831, "baggage_credits": 437,
// "upgrade_credits": 475, "total_spend": 64626, "savings": 15577,
// "tax_amount": 8338, "payment_amount": 109220, "payment_status":
// "processing", "active_user": false, "last_active_days_ago": 56,
// "booking_changes": 9, "cancellations": 5, "no_shows": 1,
// "extra_baggage_purchased": 5, "credit_topups": 1, "pass_extensions": 1,
// "upsell_usage": 5 }, { "employee_id": "EMP-136", "employee_name":
// "Employee_136", "department": "Sales", "office": "Mumbai", "role":
// "Admin", "booking_id": "BK-6049", "booking_date": "2025-05-05",
// "booking_status": "no_show", "route": "Route_10", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 5234, "credits_used": 3187, "credits_remaining":
// 2047, "baggage_credits": 153, "upgrade_credits": 373, "total_spend":
// 50170, "savings": 24158, "tax_amount": 7344, "payment_amount": 52675,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 48, "booking_changes": 9, "cancellations": 5,
// "no_shows": 0, "extra_baggage_purchased": 5, "credit_topups": 2,
// "pass_extensions": 1, "upsell_usage": 1 }, { "employee_id": "EMP-137",
// "employee_name": "Employee_137", "department": "Finance", "office": "New York", "role": "Admin", "booking_id": "BK-4499", "booking_date":
// "2025-02-04", "booking_status": "no_show", "route": "Route_6", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 5037, "credits_used": 1241, "credits_remaining":
// 3796, "baggage_credits": 379, "upgrade_credits": 258, "total_spend":
// 43650, "savings": 18232, "tax_amount": 4897, "payment_amount": 51503,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 1, "booking_changes": 0, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 6, "credit_topups": 0,
// "pass_extensions": 1, "upsell_usage": 4 }, { "employee_id": "EMP-138",
// "employee_name": "Employee_138", "department": "Operations", "office":
// "London", "role": "Travel Manager", "booking_id": "BK-9632",
// "booking_date": "2025-01-04", "booking_status": "completed", "route":
// "Route_11", "zone": "Domestic-Central", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 6447, "credits_used": 5908,
// "credits_remaining": 539, "baggage_credits": 33, "upgrade_credits": 200,
// "total_spend": 43565, "savings": 7605, "tax_amount": 14120,
// "payment_amount": 54803, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 13, "booking_changes": 3,
// "cancellations": 4, "no_shows": 2, "extra_baggage_purchased": 5,
// "credit_topups": 0, "pass_extensions": 3, "upsell_usage": 2 }, {
// "employee_id": "EMP-139", "employee_name": "Employee_139", "department":
// "HR", "office": "Singapore", "role": "Admin", "booking_id": "BK-5209",
// "booking_date": "2025-08-01", "booking_status": "future", "route":
// "Route_14", "zone": "International-Asia", "is_peak": true, "pass_type":
// "Economy", "credits_allocated": 6879, "credits_used": 1518,
// "credits_remaining": 5361, "baggage_credits": 384, "upgrade_credits":
// 352, "total_spend": 64625, "savings": 24372, "tax_amount": 8140,
// "payment_amount": 92341, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 20, "booking_changes": 4, "cancellations":
// 0, "no_shows": 1, "extra_baggage_purchased": 2, "credit_topups": 4,
// "pass_extensions": 1, "upsell_usage": 3 }, { "employee_id": "EMP-140",
// "employee_name": "Employee_140", "department": "Finance", "office":
// "London", "role": "Executive", "booking_id": "BK-6891", "booking_date":
// "2025-04-21", "booking_status": "completed", "route": "Route_8", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Flexi",
// "credits_allocated": 6867, "credits_used": 6398, "credits_remaining":
// 469, "baggage_credits": 403, "upgrade_credits": 76, "total_spend":
// 43512, "savings": 12397, "tax_amount": 4790, "payment_amount": 70842,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 57, "booking_changes": 6, "cancellations": 1,
// "no_shows": 0, "extra_baggage_purchased": 3, "credit_topups": 3,
// "pass_extensions": 0, "upsell_usage": 1 }, { "employee_id": "EMP-141",
// "employee_name": "Employee_141", "department": "HR", "office": "New York", "role": "Finance", "booking_id": "BK-7249", "booking_date":
// "2025-04-03", "booking_status": "no_show", "route": "Route_9", "zone":
// "Domestic-West", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 7952, "credits_used": 7395, "credits_remaining":
// 557, "baggage_credits": 415, "upgrade_credits": 96, "total_spend":
// 74074, "savings": 6430, "tax_amount": 5374, "payment_amount": 127663,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 41, "booking_changes": 4, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 6, "credit_topups": 4,
// "pass_extensions": 0, "upsell_usage": 1 }, { "employee_id": "EMP-142",
// "employee_name": "Employee_142", "department": "Sales", "office":
// "Dubai", "role": "Admin", "booking_id": "BK-6571", "booking_date":
// "2025-06-12", "booking_status": "cancelled", "route": "Route_6", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 5564, "credits_used": 1496, "credits_remaining":
// 4068, "baggage_credits": 338, "upgrade_credits": 487, "total_spend":
// 43726, "savings": 22855, "tax_amount": 10874, "payment_amount": 50543,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 45, "booking_changes": 5, "cancellations": 5,
// "no_shows": 0, "extra_baggage_purchased": 4, "credit_topups": 1,
// "pass_extensions": 1, "upsell_usage": 5 }, { "employee_id": "EMP-143",
// "employee_name": "Employee_143", "department": "Marketing", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-9983",
// "booking_date": "2025-09-29", "booking_status": "cancelled", "route":
// "Route_2", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 6398, "credits_used": 6028,
// "credits_remaining": 370, "baggage_credits": 158, "upgrade_credits":
// 302, "total_spend": 63938, "savings": 25222, "tax_amount": 13343,
// "payment_amount": 81063, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 17, "booking_changes": 4,
// "cancellations": 4, "no_shows": 1, "extra_baggage_purchased": 7,
// "credit_topups": 3, "pass_extensions": 1, "upsell_usage": 1 }, {
// "employee_id": "EMP-144", "employee_name": "Employee_144", "department":
// "Operations", "office": "Singapore", "role": "Admin", "booking_id":
// "BK-7451", "booking_date": "2025-03-26", "booking_status": "no_show",
// "route": "Route_1", "zone": "International-Asia", "is_peak": true,
// "pass_type": "Flexi", "credits_allocated": 4640, "credits_used": 3269,
// "credits_remaining": 1371, "baggage_credits": 400, "upgrade_credits":
// 172, "total_spend": 99956, "savings": 10178, "tax_amount": 7899,
// "payment_amount": 132714, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 30, "booking_changes": 3, "cancellations":
// 1, "no_shows": 2, "extra_baggage_purchased": 3, "credit_topups": 0,
// "pass_extensions": 0, "upsell_usage": 4 }, { "employee_id": "EMP-145",
// "employee_name": "Employee_145", "department": "Operations", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-3789",
// "booking_date": "2025-06-28", "booking_status": "ongoing", "route":
// "Route_7", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 4364, "credits_used": 2446,
// "credits_remaining": 1918, "baggage_credits": 384, "upgrade_credits":
// 110, "total_spend": 114263, "savings": 10141, "tax_amount": 10115,
// "payment_amount": 133005, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 58, "booking_changes": 1,
// "cancellations": 0, "no_shows": 0, "extra_baggage_purchased": 6,
// "credit_topups": 1, "pass_extensions": 1, "upsell_usage": 1 }, {
// "employee_id": "EMP-146", "employee_name": "Employee_146", "department":
// "Finance", "office": "Singapore", "role": "Travel Manager",
// "booking_id": "BK-5490", "booking_date": "2025-12-19", "booking_status":
// "completed", "route": "Route_4", "zone": "Domestic-West", "is_peak":
// true, "pass_type": "Standard", "credits_allocated": 6752,
// "credits_used": 3358, "credits_remaining": 3394, "baggage_credits": 473,
// "upgrade_credits": 126, "total_spend": 52269, "savings": 6011,
// "tax_amount": 10714, "payment_amount": 81418, "payment_status":
// "processing", "active_user": false, "last_active_days_ago": 59,
// "booking_changes": 6, "cancellations": 1, "no_shows": 2,
// "extra_baggage_purchased": 8, "credit_topups": 2, "pass_extensions": 3,
// "upsell_usage": 5 }, { "employee_id": "EMP-147", "employee_name":
// "Employee_147", "department": "Operations", "office": "London", "role":
// "Travel Manager", "booking_id": "BK-1620", "booking_date": "2025-06-09",
// "booking_status": "completed", "route": "Route_16", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 7445, "credits_used": 2627, "credits_remaining":
// 4818, "baggage_credits": 198, "upgrade_credits": 28, "total_spend":
// 46876, "savings": 6164, "tax_amount": 3284, "payment_amount": 75186,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 25, "booking_changes": 10, "cancellations": 0,
// "no_shows": 2, "extra_baggage_purchased": 2, "credit_topups": 4,
// "pass_extensions": 2, "upsell_usage": 3 }, { "employee_id": "EMP-148",
// "employee_name": "Employee_148", "department": "Marketing", "office":
// "New York", "role": "Admin", "booking_id": "BK-5750", "booking_date":
// "2025-10-07", "booking_status": "ongoing", "route": "Route_15", "zone":
// "Domestic-Central", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 7247, "credits_used": 7224, "credits_remaining":
// 23, "baggage_credits": 439, "upgrade_credits": 182, "total_spend":
// 52628, "savings": 11030, "tax_amount": 8352, "payment_amount": 83497,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 4, "booking_changes": 4, "cancellations": 0,
// "no_shows": 0, "extra_baggage_purchased": 1, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 3 }, { "employee_id": "EMP-149",
// "employee_name": "Employee_149", "department": "Operations", "office":
// "New York", "role": "Finance", "booking_id": "BK-8329", "booking_date":
// "2025-10-31", "booking_status": "completed", "route": "Route_19",
// "zone": "International-Europe", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 6796, "credits_used": 1410, "credits_remaining":
// 5386, "baggage_credits": 147, "upgrade_credits": 391, "total_spend":
// 41848, "savings": 10279, "tax_amount": 13530, "payment_amount": 80957,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 49, "booking_changes": 6, "cancellations": 3,
// "no_shows": 1, "extra_baggage_purchased": 5, "credit_topups": 4,
// "pass_extensions": 2, "upsell_usage": 2 }, { "employee_id": "EMP-150",
// "employee_name": "Employee_150", "department": "Operations", "office":
// "Singapore", "role": "Finance", "booking_id": "BK-5400", "booking_date":
// "2025-12-27", "booking_status": "completed", "route": "Route_5", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 6430, "credits_used": 2872, "credits_remaining":
// 3558, "baggage_credits": 40, "upgrade_credits": 289, "total_spend":
// 44179, "savings": 14958, "tax_amount": 10142, "payment_amount": 72596,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 25, "booking_changes": 7, "cancellations": 0,
// "no_shows": 1, "extra_baggage_purchased": 1, "credit_topups": 1,
// "pass_extensions": 2, "upsell_usage": 5 }, { "employee_id": "EMP-151",
// "employee_name": "Employee_151", "department": "Operations", "office":
// "Singapore", "role": "Finance", "booking_id": "BK-6081", "booking_date":
// "2025-02-02", "booking_status": "no_show", "route": "Route_7", "zone":
// "Domestic-Central", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 6975, "credits_used": 3881, "credits_remaining":
// 3094, "baggage_credits": 484, "upgrade_credits": 291, "total_spend":
// 109773, "savings": 29915, "tax_amount": 7305, "payment_amount": 115763,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 11, "booking_changes": 10, "cancellations": 5,
// "no_shows": 1, "extra_baggage_purchased": 3, "credit_topups": 3,
// "pass_extensions": 2, "upsell_usage": 2 }, { "employee_id": "EMP-152",
// "employee_name": "Employee_152", "department": "Sales", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-7216",
// "booking_date": "2025-03-26", "booking_status": "ongoing", "route":
// "Route_16", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Standard", "credits_allocated": 4504, "credits_used": 3739,
// "credits_remaining": 765, "baggage_credits": 70, "upgrade_credits": 6,
// "total_spend": 88157, "savings": 15649, "tax_amount": 14443,
// "payment_amount": 136292, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 24, "booking_changes": 2,
// "cancellations": 4, "no_shows": 0, "extra_baggage_purchased": 6,
// "credit_topups": 2, "pass_extensions": 2, "upsell_usage": 4 }, {
// "employee_id": "EMP-153", "employee_name": "Employee_153", "department":
// "Sales", "office": "New York", "role": "Admin", "booking_id": "BK-3497",
// "booking_date": "2025-09-15", "booking_status": "future", "route":
// "Route_9", "zone": "International-Asia", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 7825, "credits_used": 2994,
// "credits_remaining": 4831, "baggage_credits": 91, "upgrade_credits":
// 316, "total_spend": 115237, "savings": 20703, "tax_amount": 4081,
// "payment_amount": 117486, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 16, "booking_changes": 6,
// "cancellations": 0, "no_shows": 0, "extra_baggage_purchased": 2,
// "credit_topups": 2, "pass_extensions": 3, "upsell_usage": 0 }, {
// "employee_id": "EMP-154", "employee_name": "Employee_154", "department":
// "HR", "office": "Singapore", "role": "Travel Manager", "booking_id":
// "BK-3900", "booking_date": "2025-11-14", "booking_status": "ongoing",
// "route": "Route_3", "zone": "Domestic-West", "is_peak": false,
// "pass_type": "Economy", "credits_allocated": 4560, "credits_used": 4386,
// "credits_remaining": 174, "baggage_credits": 13, "upgrade_credits": 40,
// "total_spend": 45208, "savings": 25162, "tax_amount": 7775,
// "payment_amount": 83418, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 15, "booking_changes": 10,
// "cancellations": 1, "no_shows": 2, "extra_baggage_purchased": 8,
// "credit_topups": 5, "pass_extensions": 0, "upsell_usage": 1 }, {
// "employee_id": "EMP-155", "employee_name": "Employee_155", "department":
// "Operations", "office": "Mumbai", "role": "Admin", "booking_id":
// "BK-4648", "booking_date": "2025-04-22", "booking_status": "no_show",
// "route": "Route_2", "zone": "Domestic-Central", "is_peak": true,
// "pass_type": "Economy", "credits_allocated": 6119, "credits_used": 2337,
// "credits_remaining": 3782, "baggage_credits": 446, "upgrade_credits":
// 315, "total_spend": 58683, "savings": 11686, "tax_amount": 4826,
// "payment_amount": 60469, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 12, "booking_changes": 9, "cancellations":
// 3, "no_shows": 1, "extra_baggage_purchased": 6, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 3 }, { "employee_id": "EMP-156",
// "employee_name": "Employee_156", "department": "Operations", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-8819",
// "booking_date": "2025-11-16", "booking_status": "completed", "route":
// "Route_5", "zone": "International-Asia", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 4509, "credits_used": 1767,
// "credits_remaining": 2742, "baggage_credits": 247, "upgrade_credits":
// 437, "total_spend": 134547, "savings": 17192, "tax_amount": 13083,
// "payment_amount": 143717, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 60, "booking_changes": 4, "cancellations":
// 0, "no_shows": 0, "extra_baggage_purchased": 4, "credit_topups": 1,
// "pass_extensions": 0, "upsell_usage": 1 }, { "employee_id": "EMP-157",
// "employee_name": "Employee_157", "department": "Operations", "office":
// "New York", "role": "Travel Manager", "booking_id": "BK-9200",
// "booking_date": "2025-01-18", "booking_status": "ongoing", "route":
// "Route_14", "zone": "Domestic-East", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 7693, "credits_used": 3868,
// "credits_remaining": 3825, "baggage_credits": 329, "upgrade_credits":
// 184, "total_spend": 85434, "savings": 23198, "tax_amount": 11552,
// "payment_amount": 103909, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 37, "booking_changes": 1, "cancellations":
// 2, "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 0 }, { "employee_id": "EMP-158",
// "employee_name": "Employee_158", "department": "Marketing", "office":
// "New York", "role": "Finance", "booking_id": "BK-4277", "booking_date":
// "2025-03-25", "booking_status": "completed", "route": "Route_14",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 7075, "credits_used": 1742,
// "credits_remaining": 5333, "baggage_credits": 322, "upgrade_credits":
// 194, "total_spend": 42343, "savings": 24602, "tax_amount": 5790,
// "payment_amount": 82439, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 14, "booking_changes": 8,
// "cancellations": 4, "no_shows": 0, "extra_baggage_purchased": 6,
// "credit_topups": 3, "pass_extensions": 2, "upsell_usage": 2 }, {
// "employee_id": "EMP-159", "employee_name": "Employee_159", "department":
// "Sales", "office": "New York", "role": "Executive", "booking_id":
// "BK-1636", "booking_date": "2025-05-27", "booking_status": "future",
// "route": "Route_15", "zone": "Domestic-Central", "is_peak": false,
// "pass_type": "Economy", "credits_allocated": 7648, "credits_used": 5542,
// "credits_remaining": 2106, "baggage_credits": 142, "upgrade_credits":
// 53, "total_spend": 54022, "savings": 17548, "tax_amount": 11639,
// "payment_amount": 63394, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 34, "booking_changes": 0,
// "cancellations": 4, "no_shows": 1, "extra_baggage_purchased": 3,
// "credit_topups": 5, "pass_extensions": 0, "upsell_usage": 4 }, {
// "employee_id": "EMP-160", "employee_name": "Employee_160", "department":
// "Finance", "office": "New York", "role": "Finance", "booking_id":
// "BK-9964", "booking_date": "2025-01-14", "booking_status": "ongoing",
// "route": "Route_20", "zone": "Domestic-East", "is_peak": true,
// "pass_type": "Premium", "credits_allocated": 5334, "credits_used": 4936,
// "credits_remaining": 398, "baggage_credits": 435, "upgrade_credits":
// 208, "total_spend": 53847, "savings": 11350, "tax_amount": 7041,
// "payment_amount": 95667, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 9, "booking_changes": 9, "cancellations":
// 4, "no_shows": 2, "extra_baggage_purchased": 6, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 2 }, { "employee_id": "EMP-161",
// "employee_name": "Employee_161", "department": "Engineering", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-1198", "booking_date":
// "2025-03-04", "booking_status": "ongoing", "route": "Route_6", "zone":
// "International-Asia", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 5787, "credits_used": 2840, "credits_remaining":
// 2947, "baggage_credits": 232, "upgrade_credits": 476, "total_spend":
// 92770, "savings": 27343, "tax_amount": 9124, "payment_amount": 121940,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 54, "booking_changes": 0, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 7, "credit_topups": 5,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-162",
// "employee_name": "Employee_162", "department": "Finance", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-7956", "booking_date":
// "2025-04-20", "booking_status": "completed", "route": "Route_10",
// "zone": "International-Europe", "is_peak": false, "pass_type":
// "Premium", "credits_allocated": 4502, "credits_used": 2692,
// "credits_remaining": 1810, "baggage_credits": 112, "upgrade_credits":
// 429, "total_spend": 62080, "savings": 9743, "tax_amount": 7619,
// "payment_amount": 97334, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 15, "booking_changes": 6,
// "cancellations": 3, "no_shows": 0, "extra_baggage_purchased": 2,
// "credit_topups": 4, "pass_extensions": 3, "upsell_usage": 3 }, {
// "employee_id": "EMP-163", "employee_name": "Employee_163", "department":
// "Marketing", "office": "Dubai", "role": "Travel Manager", "booking_id":
// "BK-3957", "booking_date": "2025-06-18", "booking_status": "future",
// "route": "Route_6", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 5634, "credits_used": 3871,
// "credits_remaining": 1763, "baggage_credits": 277, "upgrade_credits":
// 33, "total_spend": 80510, "savings": 22553, "tax_amount": 10936,
// "payment_amount": 85141, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 25, "booking_changes": 7, "cancellations":
// 4, "no_shows": 0, "extra_baggage_purchased": 0, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-164",
// "employee_name": "Employee_164", "department": "HR", "office": "New York", "role": "Admin", "booking_id": "BK-3043", "booking_date":
// "2025-08-24", "booking_status": "cancelled", "route": "Route_5", "zone":
// "International-Asia", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 7722, "credits_used": 1590, "credits_remaining":
// 6132, "baggage_credits": 355, "upgrade_credits": 199, "total_spend":
// 58748, "savings": 20703, "tax_amount": 8947, "payment_amount": 65808,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 24, "booking_changes": 2, "cancellations": 2,
// "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 2, "upsell_usage": 4 }, { "employee_id": "EMP-165",
// "employee_name": "Employee_165", "department": "Marketing", "office":
// "New York", "role": "Executive", "booking_id": "BK-8933",
// "booking_date": "2025-12-12", "booking_status": "completed", "route":
// "Route_18", "zone": "International-Asia", "is_peak": true, "pass_type":
// "Standard", "credits_allocated": 6315, "credits_used": 1878,
// "credits_remaining": 4437, "baggage_credits": 428, "upgrade_credits":
// 16, "total_spend": 46877, "savings": 13802, "tax_amount": 7490,
// "payment_amount": 51296, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 31, "booking_changes": 10,
// "cancellations": 5, "no_shows": 0, "extra_baggage_purchased": 7,
// "credit_topups": 3, "pass_extensions": 2, "upsell_usage": 4 }, {
// "employee_id": "EMP-166", "employee_name": "Employee_166", "department":
// "Finance", "office": "Dubai", "role": "Finance", "booking_id":
// "BK-7538", "booking_date": "2025-11-16", "booking_status": "future",
// "route": "Route_15", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 6636, "credits_used": 4893,
// "credits_remaining": 1743, "baggage_credits": 368, "upgrade_credits":
// 255, "total_spend": 115999, "savings": 18711, "tax_amount": 7965,
// "payment_amount": 132958, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 22, "booking_changes": 8, "cancellations":
// 1, "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-167",
// "employee_name": "Employee_167", "department": "Engineering", "office":
// "London", "role": "Executive", "booking_id": "BK-9790", "booking_date":
// "2025-09-09", "booking_status": "ongoing", "route": "Route_18", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 7426, "credits_used": 3259, "credits_remaining":
// 4167, "baggage_credits": 292, "upgrade_credits": 25, "total_spend":
// 107486, "savings": 12936, "tax_amount": 9567, "payment_amount": 128735,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 53, "booking_changes": 1, "cancellations": 1,
// "no_shows": 0, "extra_baggage_purchased": 3, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-168",
// "employee_name": "Employee_168", "department": "Engineering", "office":
// "Mumbai", "role": "Executive", "booking_id": "BK-4299", "booking_date":
// "2025-10-27", "booking_status": "no_show", "route": "Route_12", "zone":
// "Domestic-East", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 4891, "credits_used": 3231, "credits_remaining":
// 1660, "baggage_credits": 70, "upgrade_credits": 112, "total_spend":
// 88244, "savings": 19385, "tax_amount": 10681, "payment_amount": 97866,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 20, "booking_changes": 0, "cancellations": 0,
// "no_shows": 2, "extra_baggage_purchased": 7, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 4 }, { "employee_id": "EMP-169",
// "employee_name": "Employee_169", "department": "HR", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-4041",
// "booking_date": "2025-05-17", "booking_status": "ongoing", "route":
// "Route_10", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 6235, "credits_used": 1798,
// "credits_remaining": 4437, "baggage_credits": 271, "upgrade_credits":
// 326, "total_spend": 52106, "savings": 13604, "tax_amount": 12072,
// "payment_amount": 86449, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 3, "booking_changes": 7, "cancellations":
// 1, "no_shows": 1, "extra_baggage_purchased": 1, "credit_topups": 4,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-170",
// "employee_name": "Employee_170", "department": "Finance", "office":
// "London", "role": "Finance", "booking_id": "BK-4783", "booking_date":
// "2025-10-11", "booking_status": "cancelled", "route": "Route_1", "zone":
// "Domestic-West", "is_peak": true, "pass_type": "Economy",
// "credits_allocated": 5945, "credits_used": 5788, "credits_remaining":
// 157, "baggage_credits": 379, "upgrade_credits": 101, "total_spend":
// 95329, "savings": 7721, "tax_amount": 7993, "payment_amount": 132329,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 28, "booking_changes": 9, "cancellations": 0,
// "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 2, "upsell_usage": 1 }, { "employee_id": "EMP-171",
// "employee_name": "Employee_171", "department": "Operations", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-2657",
// "booking_date": "2025-06-01", "booking_status": "no_show", "route":
// "Route_5", "zone": "Domestic-East", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 5997, "credits_used": 5091,
// "credits_remaining": 906, "baggage_credits": 349, "upgrade_credits":
// 404, "total_spend": 42627, "savings": 8270, "tax_amount": 10328,
// "payment_amount": 69082, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 18, "booking_changes": 9,
// "cancellations": 4, "no_shows": 2, "extra_baggage_purchased": 7,
// "credit_topups": 4, "pass_extensions": 1, "upsell_usage": 1 }, {
// "employee_id": "EMP-172", "employee_name": "Employee_172", "department":
// "Finance", "office": "Dubai", "role": "Travel Manager", "booking_id":
// "BK-5613", "booking_date": "2025-06-27", "booking_status": "no_show",
// "route": "Route_4", "zone": "International-Asia", "is_peak": false,
// "pass_type": "Economy", "credits_allocated": 5146, "credits_used": 1254,
// "credits_remaining": 3892, "baggage_credits": 426, "upgrade_credits":
// 460, "total_spend": 56637, "savings": 17412, "tax_amount": 12623,
// "payment_amount": 82374, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 50, "booking_changes": 2,
// "cancellations": 1, "no_shows": 0, "extra_baggage_purchased": 1,
// "credit_topups": 1, "pass_extensions": 1, "upsell_usage": 1 }, {
// "employee_id": "EMP-173", "employee_name": "Employee_173", "department":
// "Finance", "office": "New York", "role": "Travel Manager", "booking_id":
// "BK-3705", "booking_date": "2025-12-12", "booking_status": "no_show",
// "route": "Route_9", "zone": "Domestic-West", "is_peak": false,
// "pass_type": "Standard", "credits_allocated": 4758, "credits_used":
// 1146, "credits_remaining": 3612, "baggage_credits": 186,
// "upgrade_credits": 459, "total_spend": 107344, "savings": 5017,
// "tax_amount": 9576, "payment_amount": 134299, "payment_status":
// "processing", "active_user": true, "last_active_days_ago": 3,
// "booking_changes": 5, "cancellations": 0, "no_shows": 2,
// "extra_baggage_purchased": 0, "credit_topups": 1, "pass_extensions": 0,
// "upsell_usage": 5 }, { "employee_id": "EMP-174", "employee_name":
// "Employee_174", "department": "Engineering", "office": "Dubai", "role":
// "Executive", "booking_id": "BK-9794", "booking_date": "2025-01-30",
// "booking_status": "cancelled", "route": "Route_12", "zone":
// "Domestic-West", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 4699, "credits_used": 1878, "credits_remaining":
// 2821, "baggage_credits": 130, "upgrade_credits": 387, "total_spend":
// 78363, "savings": 8887, "tax_amount": 3209, "payment_amount": 133132,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 25, "booking_changes": 7, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 2, "credit_topups": 5,
// "pass_extensions": 2, "upsell_usage": 4 }, { "employee_id": "EMP-175",
// "employee_name": "Employee_175", "department": "Sales", "office":
// "Singapore", "role": "Executive", "booking_id": "BK-9167",
// "booking_date": "2025-04-17", "booking_status": "future", "route":
// "Route_13", "zone": "International-Asia", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 6862, "credits_used": 4751,
// "credits_remaining": 2111, "baggage_credits": 187, "upgrade_credits":
// 18, "total_spend": 75134, "savings": 7557, "tax_amount": 8631,
// "payment_amount": 86986, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 9, "booking_changes": 5, "cancellations":
// 0, "no_shows": 1, "extra_baggage_purchased": 0, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-176",
// "employee_name": "Employee_176", "department": "Marketing", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-9014", "booking_date":
// "2025-02-06", "booking_status": "ongoing", "route": "Route_17", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Flexi",
// "credits_allocated": 7500, "credits_used": 1901, "credits_remaining":
// 5599, "baggage_credits": 364, "upgrade_credits": 342, "total_spend":
// 46253, "savings": 26922, "tax_amount": 7479, "payment_amount": 65368,
// "payment_status": "completed", "active_user": true,
// "last_active_days_ago": 6, "booking_changes": 5, "cancellations": 1,
// "no_shows": 1, "extra_baggage_purchased": 5, "credit_topups": 1,
// "pass_extensions": 3, "upsell_usage": 5 }, { "employee_id": "EMP-177",
// "employee_name": "Employee_177", "department": "HR", "office": "London",
// "role": "Admin", "booking_id": "BK-9670", "booking_date": "2025-08-15",
// "booking_status": "ongoing", "route": "Route_1", "zone":
// "International-Europe", "is_peak": false, "pass_type": "Premium",
// "credits_allocated": 5883, "credits_used": 4156, "credits_remaining":
// 1727, "baggage_credits": 437, "upgrade_credits": 475, "total_spend":
// 40908, "savings": 18024, "tax_amount": 13762, "payment_amount": 59200,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 59, "booking_changes": 0, "cancellations": 2,
// "no_shows": 0, "extra_baggage_purchased": 3, "credit_topups": 2,
// "pass_extensions": 1, "upsell_usage": 0 }, { "employee_id": "EMP-178",
// "employee_name": "Employee_178", "department": "Operations", "office":
// "Singapore", "role": "Admin", "booking_id": "BK-9739", "booking_date":
// "2025-01-02", "booking_status": "ongoing", "route": "Route_4", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 7611, "credits_used": 6845, "credits_remaining":
// 766, "baggage_credits": 167, "upgrade_credits": 247, "total_spend":
// 72842, "savings": 21490, "tax_amount": 13604, "payment_amount": 113885,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 56, "booking_changes": 4, "cancellations": 5,
// "no_shows": 2, "extra_baggage_purchased": 5, "credit_topups": 5,
// "pass_extensions": 2, "upsell_usage": 5 }, { "employee_id": "EMP-179",
// "employee_name": "Employee_179", "department": "Engineering", "office":
// "New York", "role": "Executive", "booking_id": "BK-1195",
// "booking_date": "2025-09-07", "booking_status": "no_show", "route":
// "Route_6", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 6651, "credits_used": 2565,
// "credits_remaining": 4086, "baggage_credits": 7, "upgrade_credits": 407,
// "total_spend": 45703, "savings": 27564, "tax_amount": 9704,
// "payment_amount": 70402, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 54, "booking_changes": 5, "cancellations":
// 3, "no_shows": 1, "extra_baggage_purchased": 5, "credit_topups": 5,
// "pass_extensions": 0, "upsell_usage": 0 }, { "employee_id": "EMP-180",
// "employee_name": "Employee_180", "department": "Engineering", "office":
// "London", "role": "Admin", "booking_id": "BK-4864", "booking_date":
// "2025-11-16", "booking_status": "cancelled", "route": "Route_9", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 4907, "credits_used": 2073, "credits_remaining":
// 2834, "baggage_credits": 317, "upgrade_credits": 169, "total_spend":
// 42972, "savings": 9175, "tax_amount": 10154, "payment_amount": 90418,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 43, "booking_changes": 6, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 4, "credit_topups": 1,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-181",
// "employee_name": "Employee_181", "department": "Marketing", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-7571",
// "booking_date": "2025-03-26", "booking_status": "ongoing", "route":
// "Route_9", "zone": "International-Europe", "is_peak": false,
// "pass_type": "Flexi", "credits_allocated": 6933, "credits_used": 5854,
// "credits_remaining": 1079, "baggage_credits": 458, "upgrade_credits":
// 484, "total_spend": 92765, "savings": 26539, "tax_amount": 6810,
// "payment_amount": 147145, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 26, "booking_changes": 5, "cancellations":
// 5, "no_shows": 1, "extra_baggage_purchased": 0, "credit_topups": 1,
// "pass_extensions": 1, "upsell_usage": 2 }, { "employee_id": "EMP-182",
// "employee_name": "Employee_182", "department": "HR", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-2298",
// "booking_date": "2025-04-11", "booking_status": "no_show", "route":
// "Route_11", "zone": "Domestic-Central", "is_peak": false, "pass_type":
// "Flexi", "credits_allocated": 5669, "credits_used": 3028,
// "credits_remaining": 2641, "baggage_credits": 373, "upgrade_credits":
// 297, "total_spend": 71021, "savings": 6913, "tax_amount": 3362,
// "payment_amount": 71849, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 25, "booking_changes": 9,
// "cancellations": 4, "no_shows": 1, "extra_baggage_purchased": 4,
// "credit_topups": 0, "pass_extensions": 1, "upsell_usage": 0 }, {
// "employee_id": "EMP-183", "employee_name": "Employee_183", "department":
// "Operations", "office": "Singapore", "role": "Executive", "booking_id":
// "BK-9840", "booking_date": "2025-05-27", "booking_status": "cancelled",
// "route": "Route_16", "zone": "Domestic-Central", "is_peak": true,
// "pass_type": "Economy", "credits_allocated": 6462, "credits_used": 1063,
// "credits_remaining": 5399, "baggage_credits": 495, "upgrade_credits":
// 471, "total_spend": 68566, "savings": 8001, "tax_amount": 6398,
// "payment_amount": 71706, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 6, "booking_changes": 0, "cancellations":
// 2, "no_shows": 0, "extra_baggage_purchased": 3, "credit_topups": 5,
// "pass_extensions": 1, "upsell_usage": 0 }, { "employee_id": "EMP-184",
// "employee_name": "Employee_184", "department": "Marketing", "office":
// "Dubai", "role": "Travel Manager", "booking_id": "BK-4453",
// "booking_date": "2025-07-13", "booking_status": "ongoing", "route":
// "Route_14", "zone": "Domestic-West", "is_peak": true, "pass_type":
// "Standard", "credits_allocated": 6093, "credits_used": 5796,
// "credits_remaining": 297, "baggage_credits": 164, "upgrade_credits":
// 493, "total_spend": 84300, "savings": 16663, "tax_amount": 10280,
// "payment_amount": 97408, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 60, "booking_changes": 1, "cancellations":
// 2, "no_shows": 2, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 4 }, { "employee_id": "EMP-185",
// "employee_name": "Employee_185", "department": "HR", "office": "New York", "role": "Admin", "booking_id": "BK-6615", "booking_date":
// "2025-04-18", "booking_status": "ongoing", "route": "Route_9", "zone":
// "International-Asia", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 4566, "credits_used": 2185, "credits_remaining":
// 2381, "baggage_credits": 350, "upgrade_credits": 171, "total_spend":
// 54087, "savings": 20662, "tax_amount": 6461, "payment_amount": 89981,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 17, "booking_changes": 4, "cancellations": 2,
// "no_shows": 1, "extra_baggage_purchased": 0, "credit_topups": 3,
// "pass_extensions": 2, "upsell_usage": 3 }, { "employee_id": "EMP-186",
// "employee_name": "Employee_186", "department": "Engineering", "office":
// "New York", "role": "Travel Manager", "booking_id": "BK-9332",
// "booking_date": "2025-08-27", "booking_status": "ongoing", "route":
// "Route_2", "zone": "Domestic-East", "is_peak": true, "pass_type":
// "Premium", "credits_allocated": 7741, "credits_used": 6985,
// "credits_remaining": 756, "baggage_credits": 419, "upgrade_credits":
// 217, "total_spend": 51319, "savings": 24427, "tax_amount": 5168,
// "payment_amount": 118529, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 44, "booking_changes": 6,
// "cancellations": 1, "no_shows": 1, "extra_baggage_purchased": 6,
// "credit_topups": 5, "pass_extensions": 0, "upsell_usage": 3 }, {
// "employee_id": "EMP-187", "employee_name": "Employee_187", "department":
// "Sales", "office": "Dubai", "role": "Finance", "booking_id": "BK-8776",
// "booking_date": "2025-02-07", "booking_status": "completed", "route":
// "Route_15", "zone": "Domestic-Central", "is_peak": true, "pass_type":
// "Economy", "credits_allocated": 5315, "credits_used": 5069,
// "credits_remaining": 246, "baggage_credits": 353, "upgrade_credits":
// 481, "total_spend": 72777, "savings": 14157, "tax_amount": 11415,
// "payment_amount": 118575, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 31, "booking_changes": 3,
// "cancellations": 5, "no_shows": 2, "extra_baggage_purchased": 1,
// "credit_topups": 4, "pass_extensions": 2, "upsell_usage": 3 }, {
// "employee_id": "EMP-188", "employee_name": "Employee_188", "department":
// "Engineering", "office": "Singapore", "role": "Travel Manager",
// "booking_id": "BK-7587", "booking_date": "2025-03-19", "booking_status":
// "no_show", "route": "Route_4", "zone": "Domestic-West", "is_peak":
// false, "pass_type": "Standard", "credits_allocated": 4264,
// "credits_used": 2477, "credits_remaining": 1787, "baggage_credits": 254,
// "upgrade_credits": 74, "total_spend": 47834, "savings": 10670,
// "tax_amount": 8954, "payment_amount": 53086, "payment_status":
// "processing", "active_user": false, "last_active_days_ago": 18,
// "booking_changes": 4, "cancellations": 4, "no_shows": 0,
// "extra_baggage_purchased": 0, "credit_topups": 5, "pass_extensions": 3,
// "upsell_usage": 4 }, { "employee_id": "EMP-189", "employee_name":
// "Employee_189", "department": "Finance", "office": "New York", "role":
// "Travel Manager", "booking_id": "BK-9708", "booking_date": "2025-09-11",
// "booking_status": "cancelled", "route": "Route_3", "zone":
// "International-Europe", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 4996, "credits_used": 1535, "credits_remaining":
// 3461, "baggage_credits": 12, "upgrade_credits": 113, "total_spend":
// 106666, "savings": 20371, "tax_amount": 6255, "payment_amount": 118657,
// "payment_status": "processing", "active_user": false,
// "last_active_days_ago": 41, "booking_changes": 9, "cancellations": 3,
// "no_shows": 1, "extra_baggage_purchased": 2, "credit_topups": 5,
// "pass_extensions": 0, "upsell_usage": 5 }, { "employee_id": "EMP-190",
// "employee_name": "Employee_190", "department": "Operations", "office":
// "Dubai", "role": "Finance", "booking_id": "BK-5732", "booking_date":
// "2025-03-10", "booking_status": "ongoing", "route": "Route_15", "zone":
// "Domestic-East", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 5784, "credits_used": 4736, "credits_remaining":
// 1048, "baggage_credits": 165, "upgrade_credits": 315, "total_spend":
// 60278, "savings": 29273, "tax_amount": 6151, "payment_amount": 86135,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 26, "booking_changes": 9, "cancellations": 3,
// "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 2,
// "pass_extensions": 0, "upsell_usage": 4 }, { "employee_id": "EMP-191",
// "employee_name": "Employee_191", "department": "Engineering", "office":
// "Dubai", "role": "Admin", "booking_id": "BK-8531", "booking_date":
// "2025-11-10", "booking_status": "no_show", "route": "Route_19", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 4944, "credits_used": 4341, "credits_remaining":
// 603, "baggage_credits": 435, "upgrade_credits": 262, "total_spend":
// 81355, "savings": 11463, "tax_amount": 3252, "payment_amount": 132493,
// "payment_status": "pending", "active_user": true,
// "last_active_days_ago": 14, "booking_changes": 4, "cancellations": 5,
// "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 0,
// "pass_extensions": 3, "upsell_usage": 2 }, { "employee_id": "EMP-192",
// "employee_name": "Employee_192", "department": "Engineering", "office":
// "Dubai", "role": "Executive", "booking_id": "BK-5230", "booking_date":
// "2025-06-14", "booking_status": "no_show", "route": "Route_13", "zone":
// "Domestic-West", "is_peak": false, "pass_type": "Standard",
// "credits_allocated": 4011, "credits_used": 1988, "credits_remaining":
// 2023, "baggage_credits": 91, "upgrade_credits": 207, "total_spend":
// 98666, "savings": 5295, "tax_amount": 13590, "payment_amount": 120327,
// "payment_status": "pending", "active_user": false,
// "last_active_days_ago": 42, "booking_changes": 1, "cancellations": 1,
// "no_shows": 2, "extra_baggage_purchased": 1, "credit_topups": 0,
// "pass_extensions": 2, "upsell_usage": 1 }, { "employee_id": "EMP-193",
// "employee_name": "Employee_193", "department": "HR", "office": "London",
// "role": "Admin", "booking_id": "BK-5863", "booking_date": "2025-11-12",
// "booking_status": "ongoing", "route": "Route_18", "zone":
// "Domestic-Central", "is_peak": true, "pass_type": "Standard",
// "credits_allocated": 6762, "credits_used": 3665, "credits_remaining":
// 3097, "baggage_credits": 180, "upgrade_credits": 279, "total_spend":
// 52503, "savings": 23558, "tax_amount": 9823, "payment_amount": 86349,
// "payment_status": "completed", "active_user": false,
// "last_active_days_ago": 13, "booking_changes": 4, "cancellations": 5,
// "no_shows": 1, "extra_baggage_purchased": 7, "credit_topups": 0,
// "pass_extensions": 1, "upsell_usage": 4 }, { "employee_id": "EMP-194",
// "employee_name": "Employee_194", "department": "Engineering", "office":
// "Mumbai", "role": "Admin", "booking_id": "BK-6489", "booking_date":
// "2025-05-31", "booking_status": "cancelled", "route": "Route_13",
// "zone": "Domestic-Central", "is_peak": true, "pass_type": "Premium",
// "credits_allocated": 4971, "credits_used": 1508, "credits_remaining":
// 3463, "baggage_credits": 377, "upgrade_credits": 224, "total_spend":
// 50235, "savings": 19944, "tax_amount": 6663, "payment_amount": 56519,
// "payment_status": "processing", "active_user": true,
// "last_active_days_ago": 35, "booking_changes": 10, "cancellations": 4,
// "no_shows": 0, "extra_baggage_purchased": 1, "credit_topups": 2,
// "pass_extensions": 3, "upsell_usage": 1 }, { "employee_id": "EMP-195",
// "employee_name": "Employee_195", "department": "Operations", "office":
// "Singapore", "role": "Travel Manager", "booking_id": "BK-3093",
// "booking_date": "2025-01-16", "booking_status": "completed", "route":
// "Route_16", "zone": "Domestic-East", "is_peak": true, "pass_type":
// "Flexi", "credits_allocated": 6507, "credits_used": 3569,
// "credits_remaining": 2938, "baggage_credits": 19, "upgrade_credits":
// 373, "total_spend": 67729, "savings": 17973, "tax_amount": 6875,
// "payment_amount": 77819, "payment_status": "processing", "active_user":
// true, "last_active_days_ago": 54, "booking_changes": 0, "cancellations":
// 5, "no_shows": 0, "extra_baggage_purchased": 8, "credit_topups": 5,
// "pass_extensions": 1, "upsell_usage": 1 }, { "employee_id": "EMP-196",
// "employee_name": "Employee_196", "department": "Finance", "office":
// "London", "role": "Travel Manager", "booking_id": "BK-5569",
// "booking_date": "2025-06-05", "booking_status": "no_show", "route":
// "Route_4", "zone": "Domestic-West", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 5363, "credits_used": 4867,
// "credits_remaining": 496, "baggage_credits": 389, "upgrade_credits":
// 356, "total_spend": 66103, "savings": 22410, "tax_amount": 6429,
// "payment_amount": 83116, "payment_status": "pending", "active_user":
// true, "last_active_days_ago": 10, "booking_changes": 0, "cancellations":
// 3, "no_shows": 1, "extra_baggage_purchased": 0, "credit_topups": 0,
// "pass_extensions": 1, "upsell_usage": 0 }, { "employee_id": "EMP-197",
// "employee_name": "Employee_197", "department": "Operations", "office":
// "Mumbai", "role": "Travel Manager", "booking_id": "BK-1252",
// "booking_date": "2025-07-28", "booking_status": "future", "route":
// "Route_12", "zone": "International-Europe", "is_peak": true,
// "pass_type": "Premium", "credits_allocated": 4068, "credits_used": 3756,
// "credits_remaining": 312, "baggage_credits": 58, "upgrade_credits": 89,
// "total_spend": 76492, "savings": 6458, "tax_amount": 3723,
// "payment_amount": 134878, "payment_status": "processing", "active_user":
// false, "last_active_days_ago": 44, "booking_changes": 6,
// "cancellations": 4, "no_shows": 0, "extra_baggage_purchased": 8,
// "credit_topups": 3, "pass_extensions": 0, "upsell_usage": 3 }, {
// "employee_id": "EMP-198", "employee_name": "Employee_198", "department":
// "Finance", "office": "London", "role": "Executive", "booking_id":
// "BK-7651", "booking_date": "2025-08-19", "booking_status": "cancelled",
// "route": "Route_20", "zone": "Domestic-Central", "is_peak": false,
// "pass_type": "Premium", "credits_allocated": 6273, "credits_used": 4432,
// "credits_remaining": 1841, "baggage_credits": 182, "upgrade_credits":
// 122, "total_spend": 67498, "savings": 26737, "tax_amount": 7630,
// "payment_amount": 78427, "payment_status": "pending", "active_user":
// false, "last_active_days_ago": 31, "booking_changes": 3,
// "cancellations": 4, "no_shows": 0, "extra_baggage_purchased": 3,
// "credit_topups": 1, "pass_extensions": 3, "upsell_usage": 0 }, {
// "employee_id": "EMP-199", "employee_name": "Employee_199", "department":
// "Engineering", "office": "New York", "role": "Admin", "booking_id":
// "BK-6726", "booking_date": "2025-10-23", "booking_status": "no_show",
// "route": "Route_8", "zone": "International-Asia", "is_peak": true,
// "pass_type": "Economy", "credits_allocated": 6703, "credits_used": 6672,
// "credits_remaining": 31, "baggage_credits": 482, "upgrade_credits": 337,
// "total_spend": 41541, "savings": 8557, "tax_amount": 14842,
// "payment_amount": 67113, "payment_status": "completed", "active_user":
// false, "last_active_days_ago": 50, "booking_changes": 2,
// "cancellations": 4, "no_shows": 0, "extra_baggage_purchased": 1,
// "credit_topups": 2, "pass_extensions": 0, "upsell_usage": 2 }, {
// "employee_id": "EMP-200", "employee_name": "Employee_200", "department":
// "HR", "office": "London", "role": "Finance", "booking_id": "BK-4047",
// "booking_date": "2025-12-17", "booking_status": "cancelled", "route":
// "Route_5", "zone": "Domestic-East", "is_peak": false, "pass_type":
// "Economy", "credits_allocated": 7497, "credits_used": 2301,
// "credits_remaining": 5196, "baggage_credits": 391, "upgrade_credits":
// 484, "total_spend": 51793, "savings": 23632, "tax_amount": 5594,
// "payment_amount": 61505, "payment_status": "completed", "active_user":
// true, "last_active_days_ago": 41, "booking_changes": 10,
// "cancellations": 4, "no_shows": 1, "extra_baggage_purchased": 8,
// "credit_topups": 2, "pass_extensions": 1, "upsell_usage": 5 }]
