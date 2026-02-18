import { Search } from "lucide-react";
import { Category } from "../types";
import { CATEGORIES } from "../constants";

interface Props {
  search: string;
  setSearch(v: string): void;
  category: Category;
  setCategory(c: Category): void;
}

export const MembershipFilters = ({
  search,
  setSearch,
  category,
  setCategory
}: Props) => {

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          className="pl-10 pr-4 py-2 rounded-xl border"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search…"
        />
      </div>

      <div className="flex gap-2">
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-xl text-xs font-bold ${
              c === category
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};
