import {types} from './reducers';

export const useActions = (state, dispatch) => ({
  getDocuments: () => dispatch({ type: types.GET_DOCUMENTS_START}),
  showDialog: (documentEdit) => dispatch({ type: types.OPEN_DIALOG, payload: documentEdit}),
  closeDialog: () => dispatch({ type: types.CLOSE_DIALOG }),
  createDocument: (payload) => dispatch({ type: types.CREATE_DOCUMENT_START, payload }),
  updateDocument: (payload) => dispatch({ type: types.UPDATE_DOCUMENT_START, payload }),
});
