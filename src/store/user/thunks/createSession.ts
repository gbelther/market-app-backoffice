import { createAsyncThunk } from "@reduxjs/toolkit";

import { SessionsService } from "../../../services/sessionsService";
import { ErrorHandling } from "../../../errors/errorHandling/ErrorHandling";

interface IPayload {
  email: string;
  password: string;
}

export const createSession = createAsyncThunk(
  "user/session",
  async (payload: IPayload, { rejectWithValue }) => {
    try {
      const response = await SessionsService.createSession({
        email: "gabrielteste01@email.com",
        password: "teste123",
      });

      return response.data;
    } catch (error) {
      const errorHandling = new ErrorHandling(error);
      return rejectWithValue(errorHandling.error);
    }
  }
);
