import React, { FC, useContext, useState } from 'react';
import { Auth } from './Auth';


interface AuthProviderProps {

}

// const auth = new Auth();

// export const AuthContext = React.createContext<Auth>(auth);

// Spara allt som auth kan behöva ha här
// Hur gör vi med login, out etc?
// Ska det gå igenom denna?
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    // const auth = useContext(AuthContext);

    return (
/*         <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider> */
        <span>foo</span>
    )
}
