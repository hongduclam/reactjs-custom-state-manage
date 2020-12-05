import {types} from './reducers';
import getDocumentsApi from "./getDocumentsApi";

export const applyMiddleware = dispatch => action => {
  if(action.type === types.GET_DOCUMENTS_START) {
    getDocumentsApi().then((serverResponse) => {
      dispatch({type: types.GET_DOCUMENTS_SUCCESS, payload: serverResponse})
    })
  }
}
