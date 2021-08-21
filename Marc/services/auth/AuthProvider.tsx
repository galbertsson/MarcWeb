import React, { FC, useEffect, useState } from 'react';
import User from '../../util/User';
import Auth from './Auth';

export const AuthContext = React.createContext<User | undefined>(undefined);

interface AuthProviderProps {}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const auth = Auth.getInstance();
    auth.addUserObserver((user) => {
      setUser(user);
    }, true);

    return () => {
      // TODO: Consider removing from observers
    };
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};
