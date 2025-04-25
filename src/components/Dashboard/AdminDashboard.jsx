import React from 'react';
import CreateTask from '../../other/CreateTask';
import AllTask from '../../other/AllTask';


import Login   from '../Auth/Login';

const AdminDashboard = () => {
  const logOut = () => {
    localStorage.removeItem('LoggedInUser');
    window.location.reload(); // ✅ works immediately
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-6 pt-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl">Hello</h1>
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">Sagar</h2>
            <span className="ml-2 text-xl">👋</span>
          </div>
        </div>
        <button onClick={logOut} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Log Out
        </button>
      </div>

      <CreateTask/>
      <AllTask/>
     
    </div>
  );
};

export default AdminDashboard;