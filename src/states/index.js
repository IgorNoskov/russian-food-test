import React, {createContext, useContext, useReducer} from 'react';

/**
 *
 * @type {React.Context<unknown>}
 */
export const StateContext = createContext();

/**
 * State provider.
 *
 * @param reducer
 * @param initialState
 * @param children
 * @return {*}
 * @constructor
 */
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
