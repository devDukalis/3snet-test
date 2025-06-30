import { Fragment, type FC } from "react";

import { formatMoney, formatNumber } from "../../utils";
import type { Manager } from "../../models";

interface Props {
  manager: Manager;
  visibleMonths: number[];
}

const ManagerRow: FC<Props> = ({ manager, visibleMonths }) => (
  <>
    <tr>
      <td
        rowSpan={2}
        className="text-left pl-6 bg-white font-semibold align-middle border-b border-t border-[#EDF1F8]"
      >
        {manager.adminName}
      </td>
      <td className="bg-white px-2 py-2 border border-[#EDF1F8]">Income:</td>
      {visibleMonths.map((mIdx, i) => {
        const month = manager.months[mIdx];
        if (!month) {
          return (
            <td
              key={i}
              rowSpan={2}
              colSpan={2}
              className="text-left bg-white text-[#B0B5C3] border border-[#EDF1F8] pl-2"
            >
              No data
            </td>
          );
        }
        return (
          <Fragment key={i}>
            <td className="bg-white border-l border-[#EDF1F8] pl-2">
              {formatMoney(month.plan?.income)}
            </td>
            <td className="bg-white pl-2">{formatMoney(month.fact?.income)}</td>
          </Fragment>
        );
      })}
      <td
        rowSpan={2}
        className="bg-white text-[#B0B5C3] align-middle text-center border border-[#EDF1F8]"
      >
        ...
      </td>
    </tr>
    <tr>
      <td className="bg-white px-2 py-2 border border-[#EDF1F8]">
        Active partners:
      </td>
      {visibleMonths.map((mIdx, i) => {
        const month = manager.months[mIdx];
        if (!month) return null;
        return (
          <Fragment key={i}>
            <td className="bg-white border-b border-[#EDF1F8] pl-2">
              {formatNumber(month.plan?.activePartners)}
            </td>
            <td className="bg-white border-b border-r border-[#EDF1F8] pl-2">
              {formatNumber(month.fact?.activePartners)}
            </td>
          </Fragment>
        );
      })}
    </tr>
  </>
);

export default ManagerRow;
