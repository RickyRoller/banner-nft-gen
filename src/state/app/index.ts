import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { TemplateKeys } from 'banner-templates';
import { setTemplate } from './actions';

interface AppState {
  templateId: TemplateKeys | null;
}

const initialState: AppState = {
  templateId: null,
};

const appReducer = createReducer(initialState, (app) => {
  app.addCase(
    setTemplate,
    (state: AppState, { payload }): AppState => ({
      ...state,
      templateId: payload,
    }),
  );
});

export default appReducer;
