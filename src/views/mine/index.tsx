import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Main: FC<IProps> = () => {
  return <div>Main</div>;
};

export default memo(Main);
