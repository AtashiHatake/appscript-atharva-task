import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const filters = [
  { name: "CUSTOMIZABLE", hasToggle: true },
  { name: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { name: "OCCASION", options: ["Casual", "Formal", "Party"] },
  { name: "WORK", options: ["Office", "Outdoor", "Travel"] },
  { name: "FABRIC", options: ["Cotton", "Silk", "Leather", "Synthetic"] },
  { name: "SEGMENT", options: ["Premium", "Luxury", "Budget"] },
  { name: "SUITABLE FOR", options: ["Summer", "Winter", "All Season"] },
  { name: "RAW MATERIALS", options: ["Organic", "Recycled", "Natural"] },
  { name: "PATTERN", options: ["Solid", "Striped", "Printed"] },
];

const FilterSidebar = () => {
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

  const toggleFilter = (name: string) => {
    setExpandedFilter(expandedFilter === name ? null : name);
  };

  const toggleOption = (filterName: string, option: string) => {
    setSelectedOptions((prev) => {
      const current = prev[filterName] || [];
      return {
        ...prev,
        [filterName]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  return (
    <aside className="w-full">
      {filters.map((filter) => (
        <div key={filter.name} className="border-b border-border py-3">
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleFilter(filter.name)}
          >
            <span className="text-xs font-semibold tracking-wider text-foreground">
              {filter.name}
            </span>
            {filter.options && (
              expandedFilter === filter.name ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown size={14} />
              )
            )}
          </button>
          {!filter.hasToggle && (
            <p className="text-[11px] text-muted-foreground mt-1">All</p>
          )}
          {filter.hasToggle && (
            <div className="mt-2 flex items-center gap-2">
              <div className="w-1 h-4 bg-foreground" />
            </div>
          )}
          {expandedFilter === filter.name && filter.options && (
            <div className="mt-2 flex flex-col gap-2">
              <button
                className="text-[11px] text-muted-foreground underline text-left"
                onClick={() => setSelectedOptions((prev) => ({ ...prev, [filter.name]: [] }))}
              >
                Unselect All
              </button>
              {filter.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-xs text-foreground cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={(selectedOptions[filter.name] || []).includes(option)}
                    onChange={() => toggleOption(filter.name, option)}
                    className="w-3.5 h-3.5 accent-foreground"
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
