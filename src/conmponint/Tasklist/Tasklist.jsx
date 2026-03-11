import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";
import NewTask from "./NewTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="md:h-[55%] h-[34%] py-3 w-full mt-10 flex overflow-x-auto overflow-y-hidden flex-nowrap gap-3"
    >
     {data.tasks.map((elem, index) => {
  if (elem.active) {
    return <AcceptTask data={elem} key={index} />;
  }
  if (elem.newTask) {
    return <NewTask data={elem} key={index} />;
  }
  if (elem.completed) {
    return <CompleteTask data={elem} key={index} />;
  }
  if (elem.failed) {
    return <FaildTask data={elem} key={index} />;
  }

  return null;
})}
    </div>
  );
};

export default Tasklist;