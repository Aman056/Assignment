// src/Redux/Store/Store.js
import { configureStore,  } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import modelReducer from '../Slices/ModelSlice';
import EmployeeSlice from '../Slices/EmployeeSlice';

const store = configureStore({
  reducer: {   
    modal: modelReducer,
    employee:EmployeeSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],

});

export default store;
