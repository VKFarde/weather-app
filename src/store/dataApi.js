import { createSlice } from "@reduxjs/toolkit";

const initial = {
  value: "",
};

const dataApiSlice = createSlice({
  name: "data",
  initialState: initial,
  reducers: {
    setData: (state, action) => {
      // Assuming action.payload is the new data you want to set
      state.value = action.payload;
      console.log(action.payload);
    },

    clearData: (state) => {
      // Clears the data
      state.value = "";
    },
  },
});

export const { setData, clearData } = dataApiSlice.actions;
export const selectData = (state) => state.ApiData.value; // Fix the selector to correctly access the 'value' property
export default dataApiSlice.reducer;
