import React, { useState } from 'react';
import  {Employee} from '../entities/Employee'
 function BasicForm() {
  const [employee, setEmployee] = useState(new Employee());

  const handleSubmit = (e) => {
   
    alert(`Submitted name: ${employee.name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" value={employee.name} onChange={(e) => setEmployee({name : e.target.value})} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


export default BasicForm;

//Setup a Controlled Component
//Handle Form Submission
//Handle Multiple Inputs
//Validation
//Event Bubling