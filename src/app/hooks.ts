import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
