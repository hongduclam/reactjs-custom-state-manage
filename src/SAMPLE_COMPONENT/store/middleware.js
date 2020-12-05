import {types} from './reducers';
import {createDocumentApi, getDocumentsApi, updateDocumentApi} from "./apis";

export const applyMiddleware = dispatch => action => {
  console.log({action})
  if(action.type === types.GET_DOCUMENTS_START) {
    getDocumentsApi().then((serverResponse) => {
      dispatch({type: types.GET_DOCUMENTS_SUCCESS, payload: serverResponse})
    })
  }
  else if(action.type === types.CREATE_DOCUMENT_START) {
    createDocumentApi(action.payload).then((serverResponse) => {
      dispatch({type: types.CREATE_DOCUMENT_SUCCESS, payload: serverResponse})
    })
  }
  else if(action.type === types.UPDATE_DOCUMENT_START) {
    updateDocumentApi(action.payload).then((serverResponse) => {
      dispatch({type: types.UPDATE_DOCUMENT_SUCCESS, payload: serverResponse})
    })
  }
  else {
    dispatch(action)
  }
}
