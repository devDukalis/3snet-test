import type { FC } from "react";

import YearSelector from "../../components/YearSelector";
import PrevBtn from "../../components/PrevBtn";
import NextBtn from "../../components/NextBtn";
import AddPlanBtn from "../../components/AddPlanBtn";

import { YEARS } from "../../utils/const";

interface Props {
  year: number;
  setYear: (year: number) => void;
  years: number[];
  handlePrev: () => void;
  handleNext: () => void;
  handleAddPlan?: () => void;
}

const ControlPanel: FC<Props> = ({
  year,
  setYear,
  handlePrev,
  handleNext,
  handleAddPlan,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <YearSelector year={year} setYear={setYear} years={YEARS} />

      <div className="flex items-center gap-2">
        <PrevBtn onClick={handlePrev} />
        <NextBtn onClick={handleNext} />
        <AddPlanBtn onClick={handleAddPlan} value="Add plan" />
      </div>
    </div>
  );
};

export default ControlPanel;
