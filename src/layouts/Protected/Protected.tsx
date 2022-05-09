import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import "./styles.scss";

interface IProtectedProps {
  children: JSX.Element;
}

const Protected = ({ children }: IProtectedProps) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);

  const [showMenuNames, setShowMenuNames] = useState(true);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div id="c-protected">
      <Header onClickMenuIcon={() => setShowMenuNames(!showMenuNames)} />
      <div className="c-protected__content">
        <Menu showMenuNames={showMenuNames} />
        {children}
      </div>
    </div>
  );
};

export { Protected };
