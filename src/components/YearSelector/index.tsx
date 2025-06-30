import React from "react";

interface YearSelectorProps {
  year: number;
  setYear: (year: number) => void;
  years: number[];
}

const YearSelector: React.FC<YearSelectorProps> = ({
  year,
  setYear,
  years,
}) => {
  return (
    <select
      className="border rounded-md pl-3 pr-12 py-2 bg-white border-[#EDF1F8] font-bold text-[#242257] min-w-[120px] focus:outline-none cursor-pointer"
      value={year}
      onChange={(e) => setYear(Number(e.target.value))}
      style={{
        appearance: "none",
        background: `url('data:image/svg+xml;utf8,<svg fill="black" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5.516 7.548a.625.625 0 0 1 .884-.032L10 11.003l3.6-3.487a.625.625 0 1 1 .852.914l-4.025 3.9a.625.625 0 0 1-.852 0l-4.025-3.9a.625.625 0 0 1-.032-.882z"/></svg>') no-repeat right 1rem center/1em auto`,
      }}
      aria-label="Выбор года"
    >
      {years.map((y) => (
        <option key={y} value={y}>{`Year ${y}`}</option>
      ))}
    </select>
  );
};

export default YearSelector;
