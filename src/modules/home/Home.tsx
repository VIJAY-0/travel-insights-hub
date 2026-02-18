// src/components/home/HomeMain.tsx

import React from "react";
import {
    Plane,
    Hotel,
    Calendar,
    CheckCircle2,
    Clock,
    ArrowRight,
    MapPin,
    Briefcase,
} from "lucide-react";

import HeroSearch from "./components/HeroSearch";
import UpcomingTripCard from "./components/UpcomingTripCard";
/* ---------------- Mock data ---------------- */

const personalStats: StatItem[] = [
    { label: "Upcoming bookings", value: 2, icon: Calendar, severity: "warning" },
    { label: "Trips this month", value: 1, icon: Plane, severity: "info" },
    { label: "Approved trips", value: 3, icon: CheckCircle2, severity: "success" },
    { label: "Linked memberships", value: 4, icon: Briefcase, severity: "neutral" },
];


const upcomingCompanyTrips = [
    {
        id: "t1",
        destination: "Bangalore",
        purpose: "Client visit – ABC Corp",
        from: "12 Mar 2026",
        to: "15 Mar 2026",
        bookingDeadline: "5 Mar 2026",
    },
    {
        id: "t2",
        destination: "Delhi",
        purpose: "Quarterly review meeting",
        from: "20 Mar 2026",
        to: "22 Mar 2026",
        bookingDeadline: "12 Mar 2026",
    },
    {
        id: "t2",
        destination: "Delhi",
        purpose: "Quarterly review meeting",
        from: "20 Mar 2026",
        to: "22 Mar 2026",
        bookingDeadline: "12 Mar 2026",
    },
    {
        id: "t2",
        destination: "Delhi",
        purpose: "Quarterly review meeting",
        from: "20 Mar 2026",
        to: "22 Mar 2026",
        bookingDeadline: "12 Mar 2026",
    },
];

const quickActions = [
    {
        title: "Book a flight",
        description: "Search and book flights for your business trip.",
        icon: Plane,
    },
    {
        title: "Book a hotel",
        description: "Find company-preferred hotels and rates.",
        icon: Hotel,
    },
    {
        title: "Plan a new trip",
        description: "Create a self-initiated business trip.",
        icon: Calendar,
    },
];

const recentActivity = [
    {
        id: "a1",
        text: "Your Bangalore hotel booking was confirmed.",
        time: "15 minutes ago",
    },
    {
        id: "a2",
        text: "Manager approved your Delhi trip request.",
        time: "Today, 10:20 AM",
    },
    {
        id: "a3",
        text: "Flight changed by travel desk for Mumbai trip.",
        time: "Yesterday, 6:40 PM",
    },
];

/* ---------------- Component ---------------- */

const Home: React.FC = () => {
    return (
        <div className="w-full overflow-x-hidden">

            {/* HERO */}
            <HeroSearch />

            {/* PERSONAL SNAPSHOT */}
            <section className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                    {personalStats.map((item) => (
                        <PersonalStatCard key={item.label} item={item} />
                    ))}
                </div>
            </section>

            {/* UPCOMING COMPANY TRIPS */}
            <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
                <div className="mb-4">
                    <h1 className="text-lg font-semibold text-slate-900">
                        Upcoming company trips
                    </h1>
                    <p className="text-sm text-slate-500">
                        Trips created by your manager. Please complete your booking.
                    </p>
                </div>

                {/* Mobile = vertical list (NO horizontal scroll) */}
                <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    {upcomingCompanyTrips.map((trip) => (
                        <UpcomingTripCard
                            key={trip.id}
                            trip={trip}
                            onBook={(t) => {
                                console.log("Book trip", t.id);
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* QUICK ACTIONS */}
            <section className="bg-slate-50 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
                    <div className="mb-5">
                        <h2 className="text-lg font-semibold text-slate-900">
                            What would you like to do?
                        </h2>
                        <p className="text-sm text-slate-500">
                            Start a new booking or plan your own trip.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {quickActions.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="text-sm font-semibold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {item.description}
                                    </p>

                                    <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
                                        Start
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* RECENT ACTIVITY */}
            <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Your recent activity
                    </h2>
                    <p className="text-sm text-slate-500">
                        Updates related to your bookings and approvals.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {recentActivity.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl border border-slate-100 bg-white p-4"
                        >
                            <p className="text-sm text-slate-800">{item.text}</p>
                            <p className="mt-1 text-xs text-slate-500">{item.time}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-4 pb-10 sm:pb-16">
                <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white sm:p-10 sm:rounded-3xl sm:flex sm:items-center sm:justify-between sm:gap-6">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Ready to book your next business trip?
                        </h3>
                        <p className="mt-2 text-sm text-white/80">
                            Start a new booking or complete one of your assigned company trips.
                        </p>
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-white px-6 py-3 font-medium text-indigo-700 sm:mt-0 sm:w-auto">
                        Start booking
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;



type Severity = "info" | "success" | "warning" | "neutral";

type StatItem = {
    label: string;
    value: number;
    icon: React.ElementType;
    severity: Severity;
};

const SEVERITY_STYLES: Record<
    Severity,
    {
        card: string;
        iconWrap: string;
        icon: string;
    }
> = {
    info: {
        card: "border-blue-100 bg-blue-50/40",
        iconWrap: "bg-blue-100",
        icon: "text-blue-600",
    },
    success: {
        card: "border-emerald-100 bg-emerald-50/40",
        iconWrap: "bg-emerald-100",
        icon: "text-emerald-600",
    },
    warning: {
        card: "border-amber-100 bg-amber-50/40",
        iconWrap: "bg-amber-100",
        icon: "text-amber-600",
    },
    neutral: {
        card: "border-slate-100 bg-white",
        iconWrap: "bg-slate-100",
        icon: "text-slate-600",
    },
};

interface PersonalStatCardProps {
    item: StatItem;
}

const PersonalStatCard = ({ item }: PersonalStatCardProps) => {
    const Icon = item.icon;
    const styles = SEVERITY_STYLES[item.severity];

    return (
        <div
            className={`
        flex items-center gap-3
        rounded-xl border p-4 shadow-sm
        h-[76px] min-w-[210px]
        ${styles.card}
      `}
        >
            <div
                className={`
          h-10 w-10 rounded-lg
          flex items-center justify-center
          shrink-0
          ${styles.iconWrap}
        `}
            >
                <Icon size={18} className={styles.icon} />
            </div>

            <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-slate-900 leading-tight">
                    {item.value}
                </p>
                <p className="text-xs text-slate-600 leading-tight truncate">
                    {item.label}
                </p>
            </div>
        </div>
    );
};
