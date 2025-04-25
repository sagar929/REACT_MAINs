import React from 'react';

function TaskListNumber({ data }) {
  return (
    <div className='flex justify-between flex-wrap gap-5 mt-10'>
      <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-bold'>{data?.taskSummary?.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-bold'>{data?.taskSummary?.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-bold'>{data?.taskSummary?.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>
      <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-bold'>{data?.taskSummary?.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
