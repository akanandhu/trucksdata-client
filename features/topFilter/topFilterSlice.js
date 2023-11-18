import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // tabs: [
  //   { id: 1, name: "Manufacturer", icon: "/icons/manufacture.png",iconWidth:"40px" },
  //   { id: 2, name: "Body Type", icon: "/icons/big-truck.png",iconWidth:"40px" },
  //   { id: 3, name: "Application", icon: "/icons/pick-up-truck.png",iconWidth:"40px" },
  //   { id: 4, name: "G V W", icon: "/icons/weight.png",iconWidth:"40px"},
  //   { id: 5, name: "Power Source", icon: "/icons/diesel.png",iconWidth:"40px" },
  // ],
  brands: {
    currentTab: "Trucks",
    id: 1,
  },
  popular: {
    currentTab: "Trucks",
    id: 1,
  },
};

export const currentTabSlice = createSlice({
  name: "topfilter",
  initialState,
  reducers: {
    setCurrentBrandTab: (state, { payload }) => {
      state.brands.currentTab = payload.brands.vehicle;
      state.brands.id = payload.brands.id;
    },
    setCurrentPopularTab: (state, { payload }) => {
      state.popular.currentTab = payload.popular.vehicle;
      state.popular.id = payload.popular.id;
    }
  },
});

export const { setCurrentBrandTab,setCurrentPopularTab } = currentTabSlice.actions;
export default currentTabSlice.reducer;
