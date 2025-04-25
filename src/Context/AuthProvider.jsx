import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Initialize local storage if needed
    if (!localStorage.getItem('employees')) {
      setLocalStorage();
    }
    
    // Get data from local storage
    const data = getLocalStorage();
    setUserData(data);
  }, []);

  // Sync userData changes with localStorage
  useEffect(() => {
    if (userData) {
      localStorage.setItem('employees', JSON.stringify(userData.employees || []));
      
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;