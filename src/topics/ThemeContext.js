// Step 1: Create Context
// Step 2: Wrap Your App with the Provider
// Step 3: Consume Context in a Component
// Example: App starts in light mode.
// Clicking Toggle Theme switches between light and dark themes.
// All components inside the provider can access the theme and toggleTheme.

// ThemeContext.js
import React, { createContext, useState } from 'react';

// Step 1: Create the context
export const ThemeContext = createContext();

// Step 2: Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

