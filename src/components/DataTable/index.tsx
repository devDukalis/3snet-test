import { type FC } from "react";

import MonthHeader from "../../components/MonthHeader";
import MonthSubHeader from "../../components/MonthSubHeader";
import TotalRow from "../../components/TotalRow";
import ManagerRow from "../../components/ManagerRow";
import ManagerHeader from "../../components/ManagerHeader";

import { type ApiResponse, type MonthData } from "../../models";
import EmptyHeader from "../EmptyHeader";
import EmptyRow from "../EmptyRow";

interface Props {
  visibleMonths: number[];
  tableData: ApiResponse;
  MONTHS: string[];
}

const DataTable: FC<Props> = ({ visibleMonths, tableData, MONTHS }) => {
  // Преобразуем массив total в объект с ключами — индексами месяцев
  const totalDataByMonth: Record<number, MonthData> = {};

  tableData.data.total.forEach((item, idx) => {
    totalDataByMonth[idx] = {
      income: item.plan.income,
      activePartners: item.plan.activePartners,
      plan: item.plan,
      fact: item.fact,
    };
  });

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full text-[#242257] text-sm border-collapse border-[#EDF1F8] border-1">
        <thead>
          <tr className="bg-[#F7F9FB]">
            <EmptyHeader rowSpan={2} className="border border-[#EDF1F8]" />
            <EmptyHeader rowSpan={2} className="border border-[#EDF1F8]" />

            {visibleMonths.map((mIdx) => (
              <MonthHeader key={mIdx} monthName={MONTHS[mIdx]} />
            ))}

            <EmptyHeader className="w-8" />
          </tr>

          <EmptyRow className="bg-[#F7F9FB]">
            {visibleMonths.map((mIdx) => (
              <MonthSubHeader key={mIdx} />
            ))}
            <EmptyHeader className="border-b border-[#EDF1F8]" />
          </EmptyRow>

          <tr>
            <ManagerHeader />
          </tr>

          <TotalRow
            visibleMonths={visibleMonths}
            data={totalDataByMonth}
            label="Total income:"
            isIncome={false}
          />

          <TotalRow
            visibleMonths={visibleMonths}
            data={totalDataByMonth}
            label="Total active partners:"
            isIncome={false}
            rowClassName="border-b border-[#EDF1F8]"
          />
        </thead>

        <tbody>
          {tableData.data.table.map((manager) => (
            <ManagerRow
              key={manager.id}
              manager={manager}
              visibleMonths={visibleMonths}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
