import { createSlice } from "@reduxjs/toolkit";

import { createSession } from "./thunks/createSession";
import { IError } from "../../errors/IError";
import { TokenService } from "../../services/tokenService";
import { UsersService } from "../../services/usersService";

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserState {
  loading: boolean;
  user: IUser | null;
  error: IError | null;
}

const user = UsersService.getUserFromStorage();

const initialState: IUserState = {
  loading: false,
  user: user ?? null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      TokenService.logout();
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(createSession.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(createSession.fulfilled, (state, { payload }) => {
      const userData: IUser = {
        id: payload.user.id,
        name: payload.user.name,
        email: payload.user.email,
      };

      UsersService.setUserToStorage(userData);

      state.loading = false;
      state.error = null;
      state.user = userData;
    });
    addCase(createSession.rejected, (state, { payload }) => {
      const error: IError = {
        message: (payload as IError).message,
        statusCode: (payload as IError).statusCode,
      };

      state.loading = false;
      state.error = error;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
