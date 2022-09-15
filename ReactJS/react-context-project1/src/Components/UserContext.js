import React from 'react'

const UserContext = React.createContext();
export const ContextProvider = UserContext.Provider;
export const ContextConsumer = UserContext.Consumer