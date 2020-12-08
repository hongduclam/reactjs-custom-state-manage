import React, { createContext, useReducer } from 'react';
import { useActions } from '../SAMPLE_COMPONENT/store/actions';

const StoreContext = createContext({});

const StoreProvider = ({ children, reducer, middleware, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const applyMiddleware = dispatch => action => {
    middleware(dispatch, action) || dispatch(action)
  };
  let enhancedDispatch = dispatch;
  if(dispatch) {
    enhancedDispatch = applyMiddleware(dispatch);
  }
  // Attach middleware to capture every dispatch
  const actions = useActions(state, enhancedDispatch);
  return (
    <StoreContext.Provider
      value={{ state, dispatch: enhancedDispatch, actions }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
