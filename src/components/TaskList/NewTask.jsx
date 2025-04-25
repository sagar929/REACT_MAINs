import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-red-500 rounded-xl'>
    <div className='flex justify-between items-center p-3'>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded text-white'>{data.category}</h3>
      <h4 className='text-base'>{data.date}</h4>
    </div>
    <h2 className='mt-5 ml-2 text-2xl font-semibold '>
        {data.title}
    </h2>
    <p className= "text-sm ml-2">
        {data.description}
    </p>
    <div className='mt-6'>
        <button className='bg-blue-500 text-xs font-medium text-white px-2 py-1 rounded'>Accept Task</button>
    </div>
  </div>
  )
}

export default NewTask
