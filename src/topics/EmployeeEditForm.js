import React, { useState } from 'react';

const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form  style={formStyle}>
      <h2>Edit Employee</h2>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Role:
        <select name="role" value={employee.role} onChange={handleChange}>
          <option value="Admin">Admin</option>
          <option value="Developer">Developer</option>
          <option value="HR">HR</option>
        </select>
      </label>

      <button type="submit">Update</button>
    </form>
  );
};

// Styling (optional, for simplicity)
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: 'auto',
  gap: '1rem',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
};

export default EmployeeEditForm;
