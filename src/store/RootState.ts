// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { HomeState, HOME_ROOT_KEY } from 'app/pages/HomePage/redux/HomeState';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  [HOME_ROOT_KEY]: HomeState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
