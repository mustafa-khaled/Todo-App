import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    setTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
