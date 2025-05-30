import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import UseEffectHook from "./hooks/UseEffectHook";
import Parent from "./communication/Parent";
import UseReducerHook_Counter from "./topics/UseReducerHook";
import { ThemeContext } from './topics/ThemeContext';
import ControlledComponent from "./hooks/ControlledComponent";
import Memoization from "./topics/Memoization";
import BasicForm from "./forms/BasicForm";
import EmployeeForm from "./forms/EmployeeForm";

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

  useEffect(() => {
    console.log('Virtual DOM');
    console.log( <App />);
 
    return () => {
      //cleapup function
    }
  }, [])
  

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
            <Route path="/forms" element={<BasicForm />} />
            <Route path="/advancedform" element={<EmployeeForm />} />
            <Route path="/context" element={<ThemeContext />} />
            <Route path="/controlled" element={<ControlledComponent />} />
            <Route path="/usememo" element={<Memoization />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
