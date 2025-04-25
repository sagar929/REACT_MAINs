import React from 'react'

const FailedTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-blue-500 rounded-xl'>
    <div className='flex justify-between items-center p-3'>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded text-white'>High</h3>
      <h4 className='text-base'>20 Feb 2024</h4>
    </div>
    <h2 className='mt-5 ml-2 text-2xl font-semibold '>
        Make a youtube video
    </h2>
    <p className= "text-sm ml-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus officiis quibusdam suscipit.
    </p>
    <div className='mt-5'>
        <button className='w-full rounded-2xl bg-red-900'>Task Failed</button>
    </div>
  </div>
  )
}

export default FailedTask
