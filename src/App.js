import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import UseEffectHook from "./hooks/UseEffectHook";
import Parent from "./communication/Parent";
import UseReducerHook_Counter from "./topics/UseReducerHook";
import EmployeeEditForm from "./topics/EmployeeEditForm";
import { ThemeContext } from './topics/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle = {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#444',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div style={appStyle}>
      {/* Theme Header */}
      <div style={headerStyle}>
        <h1>{theme.toUpperCase()} MODE</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>

      {/* Main App Routing */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hooks" element={<UseEffectHook />} />
            <Route path="/communication" element={<Parent />} />
            <Route path="/reducer" element={<UseReducerHook_Counter />} />
            <Route path="/forms" element={<EmployeeEditForm />} />
            <Route path="/context" element={<ThemeContext />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
