const initialState = {
  documents: null,
  error: null,
  showDialog: false,
  documentEdit: null,
};

const types = {
  GET_DOCUMENTS_START: 'GET_DOCUMENTS_START',
  GET_DOCUMENTS_SUCCESS: 'GET_DOCUMENTS_SUCCESS',
  GET_DOCUMENTS_ERROR: 'GET_DOCUMENTS_ERROR',
  OPEN_DIALOG: 'OPEN_DIALOG',
  CLOSE_DIALOG: 'CLOSE_DIALOG',
  CREATE_DOCUMENT_START: 'CREATE_DOCUMENT_START',
  CREATE_DOCUMENT_SUCCESS: 'CREATE_DOCUMENT_SUCCESS',
  UPDATE_DOCUMENT_START: 'UPDATE_DOCUMENT_START',
  UPDATE_DOCUMENT_SUCCESS: 'UPDATE_DOCUMENT_SUCCESS',
};

const reducer = (state = initialState, action) => {
  console.log({reducer: {state, action} })
  switch (action.type) {
    case types.GET_DOCUMENTS_START:
      return {
        ...state,
        documents: null,
        error: null
      };
    case types.GET_DOCUMENTS_SUCCESS:
      return {
        ...state,
        documents: action.payload,
        error: null
      };
    case types.GET_DOCUMENTS_ERROR:
      return {
        ...state,
        error: action.error
      };
    case types.OPEN_DIALOG:
      return {
        ...state,
        showDialog: true,
        documentEdit: action.payload
      };
    case types.CLOSE_DIALOG:
      return {
        ...state,
        documentEdit: null,
        showDialog: false
      };
    case types.CREATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        documents: [...state.documents, {...action.payload, id: state.documents.length + 1}],
      };
    case types.UPDATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        documents: state.documents.map(doc => {
          if(doc.id === action.payload.id) {
            return {
              ...doc,
              name: action.payload.name,
              status: 0,
              statusDateTime: new Date().toISOString()
            }
          }
          return doc
        }),
      };
    default:
      return initialState

  }
}


export {initialState, types, reducer};
