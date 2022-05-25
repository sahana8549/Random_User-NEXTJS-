import React, { createContext, useReducer, useState } from "react";
import actions from "./action";
import { INTIAL_STATE, reducer } from "./reducer";

export const RootContext = createContext({});
type ContextProps = {
  children: JSX.Element;
};
export const Rootprovider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, INTIAL_STATE);
  const action = actions(dispatch);
  return (
    <RootContext.Provider value={{ state, action }}>
      {children}
    </RootContext.Provider>
  );
};
