import React from 'react'

function AcceptTask({data}) {
  return (
    <div>
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
        <div className='flex justify-between mt-5'>
        <button className='bg-green-500 rounded-2xl py-1 px-2 text-sm'>Marks as Complete</button>
        <button className='bg-red-900 rounded-2xl py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
      </div>
      
    </div>
  )
}

export default AcceptTask

