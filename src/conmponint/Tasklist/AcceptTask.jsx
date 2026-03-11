
import React from 'react'

const AcceptTask = ({data}) => {
  
  
  return (
     <div className="shrink-0 md:h-full w-75 bg-yellow-500 rounded-xl p-5">
        <div className="flex items-center justify-between">
          <h2 className="bg-red-600 py-1 px-3 text-sm rounded w-fit">{data.category}</h2>
          <h5 className="text-sm">{data.taskDate}</h5>
        </div>
        <div className="py-5">
          <h2 className="font-bold text-2xl">{data.taskTitle}</h2>
          <p className="text-sm mt-4">{data.taskDescription}</p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="active:scale-95 bg-green-500 py-1 px-3 text-sm rounded">Accept</button>
          <button className="active:scale-95 bg-red-500 py-1 px-3 text-sm rounded">Reject</button>
        </div>
      </div>
  )
}

export default AcceptTask
