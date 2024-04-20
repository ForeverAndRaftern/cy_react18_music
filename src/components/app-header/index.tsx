import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { HeaderWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div>AppHeader</div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
