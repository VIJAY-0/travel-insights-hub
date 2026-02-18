import React, { useState } from "react";
import { Search, Plane, Hotel, Calendar, Sparkles } from "lucide-react";

const HeroSearch: React.FC = () => {
  const [query, setQuery] = useState("");

  const suggestions = [
    { icon: <Plane size={16} />, text: "Book a flight to Bangalore next week" },
    { icon: <Hotel size={16} />, text: "Business hotels in Delhi near client office" },
    { icon: <Calendar size={16} />, text: "My upcoming approved trips" },
    { icon: <Sparkles size={16} />, text: "Company travel policy for international trips" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50">
      <div
        className="
          max-w-5xl
          mx-auto
          px-4
          pt-6
          pb-8
          sm:px-6
          sm:pt-12
          sm:pb-12
          md:pt-16
        "
      >
        {/* Headline */}
        <div className="text-center mb-4 sm:mb-8">
          <h1
            className="
              text-xl
              sm:text-3xl
              md:text-4xl
              font-semibold
              text-slate-900
              leading-tight
            "
          >
            Plan and book your business trips
          </h1>

          <p
            className="
              mt-2
              text-xs
              sm:text-base
              text-slate-500
              max-w-2xl
              mx-auto
            "
          >
            Book flights and hotels, check your upcoming trips and view company
            travel policies — all in one place.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <Search
                size={18}
                className="text-slate-400 group-focus-within:text-blue-600"
              />
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search trips, destinations, bookings or travel policy…"
              className="
                w-full
                py-3.5
                sm:py-5
                pl-10
                sm:pl-11
                pr-3
                sm:pr-4
                rounded-xl
                sm:rounded-2xl
                border
                border-slate-200
                bg-white
                text-sm
                sm:text-base
                shadow
                sm:shadow-lg
                outline-none
                focus:border-blue-400
                focus:ring-4
                focus:ring-blue-50
                transition
              "
            />
          </div>

          {/* Suggestions */}
          <div className="mt-4 sm:mt-6">
            <p
              className="
                text-[10px]
                sm:text-xs
                font-medium
                uppercase
                tracking-wide
                text-slate-400
                mb-2
                sm:mb-3
                text-center
              "
            >
              Suggested
            </p>

            {/* Mobile-first layout */}
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                -mx-4
                px-4
                pb-1
                sm:mx-0
                sm:px-0
                sm:flex-wrap
                sm:justify-center
                sm:overflow-visible
              "
            >
              {suggestions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(item.text)}
                  className="
                    shrink-0
                    flex
                    items-center
                    gap-2
                    px-3
                    sm:px-4
                    py-2
                    rounded-full
                    bg-white
                    border
                    border-slate-200
                    text-xs
                    sm:text-sm
                    text-slate-600
                    hover:text-blue-600
                    hover:border-blue-200
                    hover:bg-blue-50
                    shadow-sm
                    transition
                    whitespace-nowrap
                  "
                >
                  <span className="text-slate-500">{item.icon}</span>
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
