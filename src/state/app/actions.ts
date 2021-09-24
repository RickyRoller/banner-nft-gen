import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { TemplateKeys } from 'banner-templates';
import { TemplateControls } from 'models/controls';
import { AppThunk } from '../store';

export const setTemplateId = createAction<TemplateKeys>('app/setTemplateId');

export const deployControls =
  createAction<TemplateControls>('app/deployControls');

export const updateControlValue = createAction<{
  property: string;
  value: any;
}>('app/updateControlValue');

// export const incrementAsyncThunk = createAsyncThunk(
//   'INCREMENT_THUNK',
//   async (amount: number, thunkAPI) =>
//     await new Promise<number>((resolve, reject) => {
//       setTimeout(() => {
//         resolve(amount);
//       }, 1000);
//     }),
// );
