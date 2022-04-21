import { Fragment, ReactNode } from "react";

import "../../styles/global.scss";

interface IStorybookProps {
  children: ReactNode;
}

const SbWrapper = ({ children }: IStorybookProps) => {
  return <Fragment>{children}</Fragment>;
};

export { SbWrapper };
