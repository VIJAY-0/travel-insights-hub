import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

export type UpcomingTrip = {
    id: string;
    destination: string;
    purpose: string;
    from: string;
    to: string;
    bookingDeadline: string;
};

interface Props {
    trip: UpcomingTrip;
    onBook?: (trip: UpcomingTrip) => void;
}

const UpcomingTripCard = ({ trip, onBook }: Props) => {
    return (
        <div
            className="    group    relative    rounded-2xl    border    border-slate-200    bg-gradient-to-br    from-white    to-slate-50    p-4    sm:p-5    shadow-sm    hover:shadow-md    hover:border-blue-200    transition-all    flex    flex-col    justify-between  ">
            {/* Top content */}
            <div>
                <div className="flex items-start gap-2">
                    <div
                        className="  mt-0.5  rounded-full  bg-blue-50  p-1.5  text-blue-600  group-hover:bg-blue-100  transition">
                        <MapPin size={14} />
                    </div>

                    <div>
                        <p className="font-semibold text-slate-900 leading-snug">
                            {trip.destination}
                        </p>

                        <p className="mt-0.5 text-sm text-slate-600">
                            {trip.purpose}
                        </p>
                    </div>
                </div>

                <div className="mt-3 space-y-1.5 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <Calendar size={14} className="shrink-0" />
                        <span>
                            {trip.from} – {trip.to}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-amber-600">
                        <Clock size={14} className="shrink-0" />
                        <span>Book by {trip.bookingDeadline}</span>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <button
                onClick={() => onBook?.(trip)}
                className=" mt-4 inline-flex items-center gap-2 self-start rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100 transition group-hover:translate-x-0.5 ">
                Book for this trip
                <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                />
            </button>
        </div>
    );
};

export default UpcomingTripCard;
