import React, { useEffect, useState } from 'react';
import Header from '../../other/Header';
import TaskListNumber from '../../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

function EmployeeDashboard({ data }) {
  const [employeeData, setEmployeeData] = useState(data); // Start with data

  useEffect(() => {
    // Always fetch latest employee data from localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployee = employees.find(
      (emp) => emp.email === data.email 
    );
    if (updatedEmployee) {
      setEmployeeData(updatedEmployee);
    }
  }, [data]); 

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={employeeData} />
      <TaskListNumber data={employeeData} />
      <TaskList data={employeeData} />
    </div>
  );
}

export default EmployeeDashboard;
