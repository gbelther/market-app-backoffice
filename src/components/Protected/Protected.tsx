import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { Header } from "../Header";

interface IProtectedProps {
  children: JSX.Element;
}

const Protected = ({ children }: IProtectedProps) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export { Protected };