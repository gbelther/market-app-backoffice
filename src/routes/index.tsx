import {
  BrowserRouter,
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";

import { Login } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="login" element={<Login />} />
      </RoutesContainer>
    </BrowserRouter>
  );
};

export { Routes };
