import React from 'react';

const customContext = React.createContext();

export function useCustomContext(){
    return React.useContext(customContext);
}

export default customContext;