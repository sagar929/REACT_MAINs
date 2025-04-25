import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AdminTaskView = () => {
  const { userData } = useContext(AuthContext);

  if (!userData || !userData.employees) {
    return <div className="text-white">No employees found.</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">All Assigned Tasks</h2>
      {userData.employees.map((employee, index) => (
        <div key={index} className="mb-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-green-400 mb-2">{employee.firstName}'s Tasks:</h3>
          {employee.tasks && employee.tasks.length > 0 ? (
            <ul className="list-disc list-inside text-white space-y-2">
              {employee.tasks.map((task, i) => (
                <li key={i} className="text-sm">
                  <span className="font-semibold">{task.title}</span> - {task.category} - {task.date}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No tasks assigned.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminTaskView;
