import React, { useState } from 'react';
import {Employee} from '../entities/Employee';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState(new Employee());

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'isPermanent') {
      setEmployee(prev => new Employee({ ...prev, [name]: checked }));
    } else if (type === 'checkbox' && name === 'skills') {
      const updatedSkills = checked
        ? [...employee.skills, value]
        : employee.skills.filter(skill => skill !== value);
      setEmployee(prev => new Employee({ ...prev, skills: updatedSkills }));
    } else {
      setEmployee(prev => new Employee({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setEmployee(prev => new Employee({ ...prev, profile: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Submitted:', employee);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={employee.gender === 'Male'}
              onChange={handleChange}
              className="form-check-input"
              id="genderMale"
            />
            <label className="form-check-label" htmlFor="genderMale">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={employee.gender === 'Female'}
              onChange={handleChange}
              className="form-check-input"
              id="genderFemale"
            />
            <label className="form-check-label" htmlFor="genderFemale">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="isPermanent"
            checked={employee.isPermanent}
            onChange={handleChange}
            className="form-check-input"
            id="isPermanent"
          />
          <label className="form-check-label" htmlFor="isPermanent">Permanent Employee</label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Skills</label>
          {['React', 'Angular', 'Node'].map(skill => (
            <div className="form-check form-check-inline" key={skill}>
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={employee.skills.includes(skill)}
                onChange={handleChange}
                className="form-check-input"
                id={`skill-${skill}`}
              />
              <label className="form-check-label" htmlFor={`skill-${skill}`}>{skill}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={employee.joiningDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
