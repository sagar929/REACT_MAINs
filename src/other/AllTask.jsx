import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  
  // Check if userData and employees exist before rendering
  if (!userData || !userData.employees) {
    return <div className='bg-[#1c1c1c] p-4 mt-5 h-60 rounded'>Loading...</div>;
  }

  return (
    <div className='bg-[#1c1c1c] p-4 mt-5 h-60 rounded'>
      <div className='bg-red-400 py-2 mb-2 px-4 flex justify-between'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>

      <div className='h-[80%] overflow-auto'>
        {userData.employees.map(function (elem, index) {
          const newTask = elem.tasks ? elem.tasks.filter(task => task.newTask).length : 0;
          const active = elem.tasks ? elem.tasks.filter(task => task.active).length : 0;
          const completed = elem.tasks ? elem.tasks.filter(task => task.completed).length : 0;
          const failed = elem.tasks ? elem.tasks.filter(task => task.failed).length : 0;

          return (
            <div key={index} className='bg-emerald-600 py-2 mb-2 px-4 flex justify-between'>
              <h2 className='w-1/5'>{elem.firstName}</h2>
              <h3 className='w-1/5 text-blue-600'>{newTask}</h3>
              <h5 className='w-1/5 text-yellow-400'>{active}</h5>
              <h5 className='w-1/5 text-green-600'>{completed}</h5>
              <h5 className='w-1/5 text-red-600'>{failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;