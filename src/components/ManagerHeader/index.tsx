import type { FC } from "react";

const ManagerHeader: FC = () => {
  return (
    <th
      rowSpan={3}
      className="text-left pl-4 font-normal text-[#242257] bg-white align-middle"
    >
      Manager
    </th>
  );
};

export default ManagerHeader;
