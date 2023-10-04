import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Manufacturer", icon: "icon-bed" },
    { id: 2, name: "Body Type", icon: "icon-destination" },
    { id: 3, name: "Application", icon: "icon-ski" },
    { id: 4, name: "GVW", icon: "icon-home" },
    { id: 5, name: "Power Source", icon: "icon-car" },
  ],
  currentTab: "Manufacturer",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
