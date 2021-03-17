import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(initialState, reducer)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
