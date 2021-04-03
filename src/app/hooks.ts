import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { RootState, AppThunk } from './store';

export const useAppDispatch = () => useDispatch<AppThunk>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;