import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="flex border items-center justify-center border-emerald-500 rounded-xl px-10 py-10 w-[420px] h-[440px]">
        <form onSubmit={submitHandler} className="flex flex-col items-center gap-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your email"
            className="w-64 px-6 py-2 rounded-full border border-emerald-500 bg-transparent placeholder:text-gray-400 outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter password"
            className="w-64 px-6 py-2 rounded-full border border-emerald-500 bg-transparent placeholder:text-gray-400 outline-none"
          />
          <button
            type="submit"
            className="w-64 px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 font-semibold text-black"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;