import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import compareSlice from "../features/compare/compareSlice";
import vehicleTypeSlice from "../features/vehicleType/vehicleTypeSlice";
import manufacturerSlice from "../features/manufacturer/manufacturerSlice";

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        compare: compareSlice,
        vehicle: vehicleTypeSlice,
        manufacturer: manufacturerSlice
    },
});
