import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Manufacturer", icon: "/icons/manufacture.png" },
    { id: 2, name: "Body Type", icon: "/icons/big-truck.png" },
    { id: 3, name: "Application", icon: "/icons/pick-up-truck.png" },
    { id: 4, name: "GVW", icon: "/icons/weighing.png" },
    { id: 5, name: "Power Source", icon: "/icons/diesel.png" },
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
