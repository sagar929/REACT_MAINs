import React, { useState } from 'react';
import { setLocalStorage } from '../utils/localStorage';

const Header = ({data}) => {
  // const [username, setUsername] = useState('');

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logOut = () => {
    localStorage.removeItem('LoggedInUser');
    window.location.reload(); 
  };
  
  
  return (
    <div className='flex items-center justify-between text-white'>
      <h1 className='text-2xl font-semibold'>
        Hello <br />
        <span className='text-3xl'>{data?.firstName || 'Admin'} 👋</span>

      </h1>
      <button onClick={logOut} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
