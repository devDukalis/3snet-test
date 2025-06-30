import { type FC } from "react";

const MonthSubHeader: FC = () => (
  <>
    <th className="text-left font-normal px-2 py-1 border-b border-[#EDF1F8]">
      Plan:
    </th>
    <th className="text-left font-normal px-2 py-1 border-b border-r border-[#EDF1F8]">
      Fact:
    </th>
  </>
);

export default MonthSubHeader;
