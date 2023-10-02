import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import compareSlice from "../features/compare/compareSlice";

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        compare: compareSlice
    },
});
