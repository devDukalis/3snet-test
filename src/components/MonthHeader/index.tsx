import { type FC } from "react";

interface Props {
  monthName: string;
}

const MonthHeader: FC<Props> = ({ monthName }) => (
  <th
    colSpan={2}
    className="text-left font-bold pl-2 py-2 border-t border-r border-[#EDF1F8]"
  >
    {monthName}
  </th>
);

export default MonthHeader;
