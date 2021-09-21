import { RootState } from 'state/store';

export const selectTemplateId = (state: RootState) => state.app.templateId;
