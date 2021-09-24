import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { TemplateKeys } from 'banner-templates';
import { TemplateControls } from 'models/controls';
import { deployControls, setTemplateId, updateControlValue } from './actions';

interface AppState {
  templateId: TemplateKeys | null;
  controls: TemplateControls;
  controlsState: { [index: string]: any };
}

const initialState: AppState = {
  templateId: null,
  controls: [],
  controlsState: {},
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
    const controlsState = payload.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.property]: cur.default,
      }),
      {},
    );
    return {
      ...state,
      controls: payload,
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
});

export default appReducer;
