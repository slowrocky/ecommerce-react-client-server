import { createAsyncThunk } from "@reduxjs/toolkit";
import { isLoggedIn, login, register } from "../../apis/auth";

export const checkLoginStatus = createAsyncThunk(
  "auth/checkLogin",
  async (param, thunkAPI) => {
    try {
      const response = await isLoggedIn();

      return {
        cart: response.cart,
        isAuthenticated: true,
        user: response.user,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await login(credentials);
      return {
        user: response,
        isAuthenticated: true,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials, thunkAPI) => {
    try {
      await register(credentials);
      return {};
    } catch (error) {
      throw error;
    }
  }
);
