import { useState, useCallback, useMemo } from "react";

import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Divider from "../../components/Divider";
import ControlPanel from "../../components/ControlPanel";
import DataTable from "../../components/DataTable";

import { useFetch } from "../../hooks/useFetch";
import {
  getCurrentMonthIndex,
  getCurrentYear,
  getVisibleMonths,
} from "../../utils";
import type { ApiResponse } from "../../models";
import { MONTHS, YEARS } from "../../utils/const";

export default function App() {
  const [monthStart, setMonthStart] = useState(getCurrentMonthIndex());
  const [year, setYear] = useState(getCurrentYear());

  const {
    data: tableData,
    loading,
    error,
  } = useFetch<ApiResponse>("/api.json");

  const handlePrev = useCallback(
    () => setMonthStart((prev) => (prev - 1 + 12) % 12),
    []
  );

  const handleNext = useCallback(
    () => setMonthStart((prev) => (prev + 1) % 12),
    []
  );

  const handleAddPlan = useCallback(() => alert("На стадии реализации!"), []);

  const visibleMonths = useMemo(
    () => getVisibleMonths(monthStart),
    [monthStart]
  );

  if (loading) return <Loader />;

  if (error || !tableData)
    return <ErrorMessage message={error?.message || "Что-то пошло не так!"} />;

  return (
    <div className="min-h-screen py-2">
      <div className="max-w-7xl mx-auto px-4">
        <Divider />

        <ControlPanel
          year={year}
          setYear={setYear}
          years={YEARS}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleAddPlan={handleAddPlan}
        />

        <DataTable
          visibleMonths={visibleMonths}
          tableData={tableData}
          MONTHS={MONTHS}
        />
      </div>
    </div>
  );
}
