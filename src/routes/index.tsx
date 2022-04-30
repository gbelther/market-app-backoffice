import {
  BrowserRouter,
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";

import { Login, Subscribe } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="login" element={<Login />} />
        <Route path="subscribe" element={<Subscribe />} />
      </RoutesContainer>
    </BrowserRouter>
  );
};

export { Routes };
