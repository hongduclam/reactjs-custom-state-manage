import React, { createContext, useReducer } from 'react';
const StoreContext = createContext({});

const StoreProvider = ({ children, reducer, actions, middleware, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const applyMiddleware = dispatch => action => {
    middleware(dispatch, action) || dispatch(action)
  };
  let enhancedDispatch = dispatch;
  if(dispatch) {
    enhancedDispatch = applyMiddleware(dispatch);
  }
  // Attach middleware to capture every dispatch
  const enhancedActions = actions(state, enhancedDispatch);
  return (
    <StoreContext.Provider
      value={{ state, dispatch: enhancedDispatch, actions: enhancedActions }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
