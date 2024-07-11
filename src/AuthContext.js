import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check local storage for authentication state
        const authState = localStorage.getItem('isAuthenticated');
        if (authState) {
            setIsAuthenticated(JSON.parse(authState));
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};