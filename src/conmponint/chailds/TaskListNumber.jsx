import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex flex-wrap w-2/2 gap-3 mt-8 md:flex-nowrap">
      <div className="md:h-35 flex flex-col whitespace-nowrap justify-between p-3 md:p-6 md:w[25%] h-28 w-[48%] bg-yellow-500 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {data.taskNumbers.active}
        </h2>
        <h5 className="text-sm md:text-2xl font-semibold">Accepted Task</h5>
      </div>
      <div className="md:h-35 flex flex-col whitespace-nowrap justify-between p-3 md:p-6 md:w[25%] h-28 w-[48%] bg-blue-500 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {data.taskNumbers.newTask}
        </h2>
        <h5 className="text-sm md:text-2xl font-semibold">New Task</h5>
      </div>
      <div className="md:h-35 flex flex-col whitespace-nowrap justify-between p-3 md:p-6 md:w[25%] h-28 w-[48%] bg-green-500 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {data.taskNumbers.completed}{" "}
        </h2>
        <h5 className="text-sm md:text-2xl font-semibold">Completed Task</h5>
      </div>
      <div className="md:h-35 flex flex-col whitespace-nowrap justify-between p-3 md:p-6 md:w[25%] h-28 w-[48%] bg-red-500 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {data.taskNumbers.failed}
        </h2>
        <h5 className="text-sm md:text-2xl font-semibold">Failed Task</h5>
      </div>
    </div>
  );
};

export default TaskListNumber;
