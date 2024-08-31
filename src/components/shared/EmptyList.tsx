import * as React from "react";
import { cn } from "../../lib/utils";

interface EmptyListProps extends React.PropsWithChildren {
  className?: string;
}

export const EmptyList = (props: EmptyListProps): JSX.Element => {
  const { children, className } = props;
  return <p className={cn(className)}>{children}</p>;
};
