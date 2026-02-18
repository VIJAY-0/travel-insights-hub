import * as React from "react";
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import {
  Filter,
  ChevronDown,
  Calendar as CalendarIcon,
  X,
} from "lucide-react";

import { Button } from "@/components/dashboard/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/dashboard/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/dashboard/ui/command";
import { Calendar } from "@/components/dashboard/ui/calendar";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------
 Types
------------------------------------------------------- */

export type SelectOption = {
  label: string;
  value: string;
};

export type SectionFilter =
  | {
      id: string;
      type: "select";
      label: string;
      icon?: React.ElementType;
      options: SelectOption[];
      multi?: boolean;
    }
  | {
      id: string;
      type: "date-range";
      label: string;
      icon?: React.ElementType;
    };

export type SectionFilterValue =
  | string
  | string[]
  | DateRange;

type Props = {
  filters: SectionFilter[];
  value: Record<string, SectionFilterValue | undefined>;
  onChange: (value: Record<string, SectionFilterValue | undefined>) => void;
};

/* -------------------------------------------------------
 Main bar
------------------------------------------------------- */

export const SectionFilterBar: React.FC<Props> = ({
  filters,
  value,
  onChange,
}) => {
  const update = (id: string, v: SectionFilterValue | undefined) => {
    onChange({
      ...value,
      [id]: v,
    });
  };

  const clear = (id: string) => {
    const copy = { ...value };
    delete copy[id];
    onChange(copy);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 p-2 bg-slate-100/50 rounded-lg border border-slate-200/60">
      <div className="flex items-center gap-1.5 px-3 border-r border-slate-300 mr-1">
        <Filter className="w-3.5 h-3.5 text-slate-500" />
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          Filters
        </span>
      </div>

      {filters.map((filter) => {
        if (filter.type === "select") {
          return (
            <SelectFilterChip
              key={filter.id}
              filter={filter}
              value={value[filter.id] as string | string[] | undefined}
              onChange={(v) => update(filter.id, v)}
              onClear={() => clear(filter.id)}
            />
          );
        }

        if (filter.type === "date-range") {
          return (
            <DateRangeFilterChip
              key={filter.id}
              filter={filter}
              value={value[filter.id] as DateRange | undefined}
              onChange={(v) => update(filter.id, v)}
              onClear={() => clear(filter.id)}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

/* -------------------------------------------------------
 Select filter chip
------------------------------------------------------- */

function SelectFilterChip({
  filter,
  value,
  onChange,
  onClear,
}: {
  filter: Extract<SectionFilter, { type: "select" }>;
  value?: string | string[];
  onChange: (v: string | string[]) => void;
  onClear: () => void;
}) {
  const Icon = filter.icon;

  const selected = value
    ? Array.isArray(value)
      ? value
      : [value]
    : [];

  const label =
    selected.length === 0
      ? filter.label
      : filter.multi
      ? `${filter.label} (${selected.length})`
      : filter.options.find((o) => o.value === selected[0])?.label ??
        filter.label;

  const toggle = (val: string) => {
    if (!filter.multi) {
      onChange(val);
      return;
    }

    const set = new Set(selected);
    set.has(val) ? set.delete(val) : set.add(val);
    onChange(Array.from(set));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 bg-white border rounded-md text-xs font-medium shadow-sm hover:bg-slate-50",
            selected.length
              ? "border-slate-300 text-slate-700"
              : "border-slate-200 text-slate-600"
          )}
        >
          {Icon && <Icon className="w-3 h-3 text-slate-400" />}
          <span>{label}</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="p-0 w-56" align="start">
        <Command>
          <CommandEmpty>No options</CommandEmpty>

          <CommandGroup>
            {filter.options.map((o) => {
              const active = selected.includes(o.value);

              return (
                <CommandItem
                  key={o.value}
                  onSelect={() => toggle(o.value)}
                >
                  <div className="flex items-center gap-2">
                    {filter.multi && (
                      <div
                        className={cn(
                          "w-3.5 h-3.5 rounded border",
                          active
                            ? "bg-slate-900 border-slate-900"
                            : "border-slate-300"
                        )}
                      />
                    )}
                    <span>{o.label}</span>
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>

          {selected.length > 0 && (
            <div className="border-t p-2">
              <Button
                size="sm"
                variant="ghost"
                className="w-full text-xs"
                onClick={onClear}
              >
                Clear
              </Button>
            </div>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/* -------------------------------------------------------
 Date range chip
------------------------------------------------------- */

function DateRangeFilterChip({
  filter,
  value,
  onChange,
  onClear,
}: {
  filter: Extract<SectionFilter, { type: "date-range" }>;
  value?: DateRange;
  onChange: (v: DateRange | undefined) => void;
  onClear: () => void;
}) {
  const Icon = filter.icon ?? CalendarIcon;

  const label = value?.from
    ? value.to
      ? `${format(value.from, "dd MMM")} – ${format(
          value.to,
          "dd MMM"
        )}`
      : format(value.from, "dd MMM yyyy")
    : filter.label;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 bg-white border rounded-md text-xs font-medium shadow-sm hover:bg-slate-50",
            value?.from
              ? "border-slate-300 text-slate-700"
              : "border-slate-200 text-slate-600"
          )}
        >
          <Icon className="w-3 h-3 text-slate-400" />
          <span>{label}</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>
      </PopoverTrigger>
<PopoverContent
  align="start"
  className="p-3 w-auto max-w-[95vw]"
>
  <Calendar
    mode="range"
    selected={value}
    onSelect={onChange}
    numberOfMonths={1}
    className="sm:[&_.rdp-months]:flex-row [&_.rdp-months]:flex-col"
  />

  {value?.from && (
    <div className="pt-2 flex justify-end">
      <Button
        size="sm"
        variant="ghost"
        className="text-xs flex gap-1"
        onClick={onClear}
      >
        <X className="w-3 h-3" />
        Clear
      </Button>
    </div>
  )}
</PopoverContent>

    </Popover>
  );
}
