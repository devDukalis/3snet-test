import { Fragment, type FC } from "react";

import { formatMoney, formatNumber } from "../../utils";
import type { MonthData } from "../../models";

interface Props {
  visibleMonths: number[];
  data: Record<number, MonthData>;
  label: string;
  isIncome?: boolean;
  rowClassName?: string;
}

const TotalRow: FC<Props> = ({
  visibleMonths,
  data,
  label,
  isIncome = true,
  rowClassName,
}) => (
  <tr className={rowClassName}>
    <th className="text-left text-[#242257] bg-white px-2 py-2 border-l border-[#EDF1F8] font-bold">
      {label}
    </th>
    {visibleMonths.map((mIdx) => (
      <Fragment key={mIdx}>
        <td className="text-[#242257] bg-white border-l border-[#EDF1F8] pl-2">
          {isIncome
            ? formatMoney(data[mIdx]?.plan?.income)
            : formatNumber(data[mIdx]?.plan?.activePartners)}
        </td>
        <td className="text-[#242257] bg-white border-r border-[#EDF1F8] pl-2">
          {isIncome
            ? formatMoney(data[mIdx]?.fact?.income)
            : formatNumber(data[mIdx]?.fact?.activePartners)}
        </td>
      </Fragment>
    ))}
    <td className="bg-white"></td>
  </tr>
);

export default TotalRow;
