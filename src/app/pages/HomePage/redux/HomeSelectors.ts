import { RootState } from 'store/RootState';

const getHomeState = (state: RootState) => state['home-state'];
export const getNumClicks = (state: RootState) => getHomeState(state).numClicks;
