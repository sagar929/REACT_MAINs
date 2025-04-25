import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './Context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { userData } = useContext(AuthContext); // Fixed: use userData from context
  
  // Check if there's already a logged-in user in localStorage
  // useEffect(() => {
  //   const storedUser = localStorage.getItem('LoggedInUser');
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser);
  //     setUser(parsedUser.role);
  //     if (parsedUser.data) {
  //       setLoggedInUser(parsedUser.data);
  //     }
  //   }
  // }, []);

  const handleLogin = (email, password) => {
    // First check if it's admin
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }
    
    // If not admin, check if userData exists and has employees
    if (userData && userData.employees) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      
      if (employee) {
        setUser('employee');
        setLoggedInUser(employee);
        localStorage.setItem('LoggedInUser', JSON.stringify({ 
          role: 'employee', 
          data: employee 
        }));
      } else {
        alert('Invalid email or password');
      }
    } else {
      // This happens when userData is not properly loaded
      alert('Something went wrong! Please try again later.');
      console.error('userData is not available:', userData);
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmployeeDashboard data={loggedInUser} />
      ) : null}
    </>
  );
}

export default App;