const initialState = {
  documents: null,
  error: null
};

const types = {
  GET_DOCUMENTS_START: 'GET_DOCUMENTS_START',
  GET_DOCUMENTS_SUCCESS: 'GET_DOCUMENTS_SUCCESS',
  GET_DOCUMENTS_ERROR: 'GET_DOCUMENTS_ERROR',
};

const reducer = (state = initialState, action) => {
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
    default:
      return initialState

  }
}


export {initialState, types, reducer};
