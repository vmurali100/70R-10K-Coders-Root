import React from 'react'

const userContext =React.createContext();
export const ContextProvider=userContext.Provider;
export const ContextConsumer=userContext.Consumer;