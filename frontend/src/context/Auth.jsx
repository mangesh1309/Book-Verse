import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext with a default value
export const AuthContext = createContext({
  authUser: undefined,
  setAuthUser: () => {}
});

// Export the AuthProvider component
export function AuthProvider({ children }) {
  // Initialize authUser state from localStorage
  const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem("User");
    return user ? JSON.parse(user) : undefined;
  });

  // Store authUser in context
  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
