import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { TemplateKeys } from 'banner-templates';
import { AppThunk } from '../store';

export const setTemplate = createAction<TemplateKeys>('app/setTemplate');

// export const incrementAsyncThunk = createAsyncThunk(
//   'INCREMENT_THUNK',
//   async (amount: number, thunkAPI) =>
//     await new Promise<number>((resolve, reject) => {
//       setTimeout(() => {
//         resolve(amount);
//       }, 1000);
//     }),
// );
