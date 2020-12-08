import {types} from './reducers';
import {createDocumentApi, getDocumentsApi, updateDocumentApi} from "../../Apis/sampleApis";


export const sampleMiddleware = (dispatch, action) => {
  console.log({action})
  if(action.type === types.GET_DOCUMENTS_START) {
    return getDocumentsApi().then((serverResponse) => {
      dispatch({type: types.GET_DOCUMENTS_SUCCESS, payload: serverResponse})
    })
  }
  else if(action.type === types.CREATE_DOCUMENT_START) {
    return createDocumentApi(action.payload).then((serverResponse) => {
      dispatch({type: types.CREATE_DOCUMENT_SUCCESS, payload: serverResponse})
    })
  }
  else if(action.type === types.UPDATE_DOCUMENT_START) {
    return updateDocumentApi(action.payload).then((serverResponse) => {
      dispatch({type: types.UPDATE_DOCUMENT_SUCCESS, payload: serverResponse})
    })
  }
  return false;
};
