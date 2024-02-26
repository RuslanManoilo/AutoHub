import { combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice';

export const rootReducer = combineReducers({
  cars: carsReducer,
});
