import {types} from './reducers';

export const useActions = (state, dispatch) => ({
  getDocuments: () => dispatch({ type: types.GET_DOCUMENTS_START})
});
