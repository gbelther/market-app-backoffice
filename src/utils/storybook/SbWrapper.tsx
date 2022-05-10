import { ReactNode } from "react";

import "../../styles/global.scss";

interface IStorybookProps {
  children: ReactNode;
}

const SbWrapper = ({ children }: IStorybookProps) => {
  return <div id="sb-wrapper">{children}</div>;
};

export { SbWrapper };
