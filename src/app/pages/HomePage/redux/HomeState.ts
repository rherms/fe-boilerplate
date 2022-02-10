import { PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer } from "redux-injectors";
import { createSlice } from "utils/@reduxjs/toolkit";

export const HOME_ROOT_KEY = "home-state";

export interface HomeState {
  numClicks: number;
}

export const initialHomeState: HomeState = {
  numClicks: 0,
};

export const homeSlice = createSlice({
  name: HOME_ROOT_KEY,
  initialState: () => initialHomeState,
  reducers: {
    incrementClicks: state => {
      state.numClicks++;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.numClicks += action.payload;
    },
  },
});

export const useHomepageSlice = () => {
  useInjectReducer({ key: homeSlice.name, reducer: homeSlice.reducer });
  return { actions: homeSlice.actions };
};
