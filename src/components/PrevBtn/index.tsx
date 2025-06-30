import { type FC } from "react";

interface Props {
  onClick: () => void;
}

const PrevBtn: FC<Props> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Предыдущий месяц"
    className="mr-2 border border-[#EDF1F8] rounded-lg w-9 h-9 flex items-center justify-center text-[#242257] bg-white hover:bg-[#F0F2F8] transition cursor-pointer"
  >
    &lt;
  </button>
);

export default PrevBtn;
