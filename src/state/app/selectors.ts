import { TemplateKeys } from 'banner-templates';
import { createSelector } from 'reselect';
import { RootState } from 'state/store';
import { TemplatesMap } from 'banner-templates';

export const selectTemplateId = (state: RootState) => state.app.templateId;
export const selectTemplate = createSelector(
  selectTemplateId,
  (id: TemplateKeys | null) => (id !== null ? TemplatesMap[id] : undefined),
);

export const selectControls = (state: RootState) => state.app.controls;
export const selectControlsState = (state: RootState) =>
  state.app.controlsState;

export const selectUserAddress = (state: RootState) => state.app.userAddress;
export const selectWalletStatus = (state: RootState) => state.app.walletStatus;
