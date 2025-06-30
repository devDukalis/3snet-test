import type { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const EmptyRow: FC<Props> = ({ className, children }) => {
  return <tr className={className}>{children}</tr>;
};

export default EmptyRow;
