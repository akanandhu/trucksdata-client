import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // tabs: [
    //   { id: 1, name: "Manufacturer", icon: "/icons/manufacture.png",iconWidth:"40px" },
    //   { id: 2, name: "Body Type", icon: "/icons/big-truck.png",iconWidth:"40px" },
    //   { id: 3, name: "Application", icon: "/icons/pick-up-truck.png",iconWidth:"40px" },
    //   { id: 4, name: "G V W", icon: "/icons/weight.png",iconWidth:"40px"},
    //   { id: 5, name: "Power Source", icon: "/icons/diesel.png",iconWidth:"40px" },
    // ],
    brands:{
        currentTab: "Trucks",
    }
  };

export const currentTabSlice = createSlice({
  name: "topfilter",
  initialState,
  reducers: {
    setCurrentBrandTab: (state, { payload }) => {
      state.brands.currentTab = payload;
    },
  },
});

export const { setCurrentBrandTab } = currentTabSlice.actions;
export default currentTabSlice.reducer;