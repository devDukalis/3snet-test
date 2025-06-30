import { type FC } from "react";

interface Props {
  onClick?: () => void;
  value?: string;
}

const AddPlanBtn: FC<Props> = ({ onClick, value }) => (
  <button
    onClick={onClick}
    className="ml-2 rounded-lg px-5 py-2 bg-[#242257] text-white font-bold shadow hover:bg-[#37337a] transition cursor-pointer"
  >
    &#43; {value}
  </button>
);

export default AddPlanBtn;
