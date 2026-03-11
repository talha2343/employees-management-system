import React from 'react'
import Header from '../chailds/Header'
import TaskListNumber from '../chailds/TaskListNumber'
import Tasklist from '../Tasklist/Tasklist'

const EmploayDashbord = (props) => {
 
  
  return (
    <div className='h-screen w-full bg-gray-950 p-8 text-white'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumber data={props.data} />
        <Tasklist data={props.data} />
    </div>
  )
}

export default EmploayDashbord
