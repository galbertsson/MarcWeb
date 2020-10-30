import React, { FC, useEffect, useState } from 'react';
import request, { SuperAgentRequest } from 'superagent'
import User from '../../util/User';
import Auth from './Auth';

export const AuthContext = React.createContext<User | undefined>(undefined);

interface AuthProviderProps { }

export const AuthProvider: FC<AuthProviderProps> = (props) => {
    const [user, setUser] = useState<User | undefined>();

    useEffect(() => {
        const auth = Auth.getInstance();
        console.log('setting up observer!');
        auth.addUserObserver((user) => {
            console.log('Detected user change, updating state');
            setUser(user)
        });

        return () => {
            // TODO: Consider removing from observers
        }
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>

    )
}
