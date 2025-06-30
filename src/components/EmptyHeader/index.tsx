import type { FC } from "react";

interface Props {
  className?: string;
  rowSpan?: number;
}

const EmptyHeader: FC<Props> = ({ className, rowSpan }) => {
  return <th className={className} rowSpan={rowSpan}></th>;
};

export default EmptyHeader;
