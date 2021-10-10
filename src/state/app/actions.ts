import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { TemplateKeys } from 'banner-templates';
import { TemplateObjects } from 'models/templates';
import { connectWallet } from '../../components/services/wallet';

export const setTemplateId = createAction<TemplateKeys>('app/setTemplateId');

export const deployControls =
  createAction<TemplateObjects[]>('app/deployControls');

export const updateControlValue = createAction<{
  property: string;
  value: any;
}>('app/updateControlValue');

export const connectUserWallet = createAsyncThunk(
  'app/setUserAddress',
  connectWallet,
);

// export const incrementAsyncThunk = createAsyncThunk(
//   'INCREMENT_THUNK',
//   async (amount: number, thunkAPI) =>
//     await new Promise<number>((resolve, reject) => {
//       setTimeout(() => {
//         resolve(amount);
//       }, 1000);
//     }),
// );
