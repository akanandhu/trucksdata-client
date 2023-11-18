import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: {
    currentTab: "Trucks",
    id: 1,
  },
  popular: {
    currentTab: "Trucks",
    id: 1,
  },
  upcoming: {
    currentTab: "Trucks",
    id: 1,
  },
};

export const currentTabSlice = createSlice({
  name: "topfilter",
  initialState,
  reducers: {
    setCurrentBrandTab: (state, { payload }) => {
      state.brands.currentTab = payload?.brands?.vehicle;
      state.brands.id = payload?.brands?.id;
    },
    setCurrentPopularTab: (state, { payload }) => {
      state.popular.currentTab = payload?.popular?.vehicle;
      state.popular.id = payload?.popular?.id;
    },
    setCurrentUpcomingTab: (state, { payload }) => {
      state.upcoming.currentTab = payload?.upcoming?.vehicle;
      state.upcoming.id = payload?.upcoming?.id;
    },
  },
});

export const {
  setCurrentBrandTab,
  setCurrentPopularTab,
  setCurrentUpcomingTab,
} = currentTabSlice.actions;
export default currentTabSlice.reducer;
