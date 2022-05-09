import {
  BrowserRouter,
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";

import { Home, Login, Subscribe } from "../pages";
import { Protected } from "../layouts/Protected";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/login" element={<Login />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
      </RoutesContainer>
    </BrowserRouter>
  );
};

export { Routes };
