import { createReducer } from '@reduxjs/toolkit';
import { TemplateKeys } from 'banner-templates';
import { TemplateControls } from 'models/controls';
import { objectControlId } from 'utils/helpers';
import {
  deployControls,
  setTemplateId,
  connectUserWallet,
  updateControlValue,
} from './actions';
import { WalletStatus } from '../../models/WalletStatus';

interface AppState {
  templateId: TemplateKeys | null;
  controls: TemplateControls;
  controlsState: { [index: string]: any };
  userAddress: string;
  walletStatus: WalletStatus;
}

const initialState: AppState = {
  templateId: null,
  controls: [],
  controlsState: {},
  userAddress: '',
  walletStatus: WalletStatus.INIT,
};

const appReducer = createReducer(initialState, (app) => {
  app.addCase(
    setTemplateId,
    (state: AppState, { payload }): AppState => ({
      ...state,
      templateId: payload,
    }),
  );

  app.addCase(deployControls, (state: AppState, { payload }): AppState => {
    const controlsState = payload.reduce((acc, cur) => {
      const controlId = objectControlId(cur.id);
      const controls = cur.controls.reduce(
        (ac, cr) => ({
          ...ac,
          [controlId(cr.property)]: cr.default,
        }),
        {},
      );

      return {
        ...acc,
        ...controls,
      };
    }, {});
    return {
      ...state,
      controlsState,
    };
  });

  app.addCase(
    updateControlValue,
    (state: AppState, { payload }): AppState => ({
      ...state,
      controlsState: {
        ...state.controlsState,
        [payload.property]: payload.value,
      },
    }),
  );

  app.addCase(
    connectUserWallet.pending,
    (state: AppState): AppState => ({
      ...state,
      walletStatus: WalletStatus.CONNECTING,
    }),
  );

  app.addCase(
    connectUserWallet.fulfilled,
    (state: AppState, { payload }): AppState => ({
      ...state,
      userAddress: payload,
      walletStatus: WalletStatus.CONNECTED,
    }),
  );

  app.addCase(
    connectUserWallet.rejected,
    (state: AppState, { payload }): AppState => ({
      ...state,
      userAddress: '',
      walletStatus: WalletStatus.ERROR,
    }),
  );
});

export default appReducer;
