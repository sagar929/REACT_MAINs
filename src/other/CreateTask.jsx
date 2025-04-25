import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create the new task
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      assignTo: assignTo,
      category: category,
      newTask: true,
      active: false,
      completed: false,
      failed: false
    };
    
    if (!userData || !userData.employees) {
      console.error('No user data available');
      return;
    }
    
    // Create a deep copy of the current user data
    const updatedEmployees = JSON.parse(JSON.stringify(userData.employees));
    
    // Find the employee and update their tasks
    let employeeFound = false;
    updatedEmployees.forEach(function(employee) {
      if (employee.firstName === assignTo) {
        employeeFound = true;
        
        // Initialize tasks array if it doesn't exist
        if (!employee.tasks) {
          employee.tasks = [];
        }
        
        // Add the new task
        employee.tasks.push(newTask);
        
        // Initialize taskSummary if it doesn't exist
        if (!employee.taskSummary) {
          employee.taskSummary = {
            newTask: 0,
            active: 0,
            completed: 0,
            failed: 0
          };
        }
        
        // Update the task count
        employee.taskSummary.newTask += 1;
      }
    });
    
    if (!employeeFound) {
      alert(`Employee ${assignTo} not found`);
      return;
    }
    
    // Update the context with the new data
    setUserData({
      ...userData,
      employees: updatedEmployees
    });
    
    // Save to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    
    // Reset the form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    
    alert('Task created successfully!');
  };

  return (
    <div className="p-6">
      <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto">
        <form onSubmit={submitHandler}>
          <div className="flex flex-row">
            {/* Left Column */}
            <div className="w-1/2 space-y-6 pr-6">
              <div className="space-y-1">
                <label className="block text-sm">Task Title</label>
                <input 
                  value={taskTitle} 
                  onChange={(e) => setTaskTitle(e.target.value)}
                  type="text"
                  placeholder="Make a UI design"
                  className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm">Date</label>
                <input 
                  value={taskDate} 
                  onChange={(e) => setTaskDate(e.target.value)}
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm">Assign to</label>
                <input 
                  value={assignTo} 
                  onChange={(e) => setAssignTo(e.target.value)}
                  type="text"
                  placeholder="employee name"
                  className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm">Category</label>
                <input 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  placeholder="design, dev, etc"
                  className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-1/2 space-y-6 pl-2">
              <div className="space-y-1">
                <label className="block text-sm">Description</label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-2 text-white"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                onClick={()=>{
                  
                }}
                className="w-full bg-green-500 text-white py-3 rounded mt-6 hover:bg-green-600"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;