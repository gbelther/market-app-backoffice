import { createSlice } from "@reduxjs/toolkit";

import { createSession } from "./thunks/createSession";
import { IError } from "../../errors/IError";

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

const initialState: IUserState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
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

export default userSlice.reducer;
