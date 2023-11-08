import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  theme: "dark" | "light";
}

const initialState: InitialState = {
  theme: "light",
};

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {},
});

export default appSettingsSlice.reducer;
