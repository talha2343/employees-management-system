import React, { use, useContext, useState } from "react";
import FailedTask from "../Tasklist/FaildTask";
import CompleteTask from "../Tasklist/CompleteTask";
import { AuthContexts } from "../../context/AuthContext";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContexts);

  const [taskTitle, settaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [asingTo, setAsingTo] = useState("");
  const [Category, setCategory] = useState("");
  const [discription, setDiscription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      taskTitle,
      taskDate: date,
      category: Category,
      taskDescription: discription,
      active: false,
      newTask: true,
      Failed: false,
      Completed: false,
    };

    const data = [...userData]; // copy of state

    data.forEach((elem) => {
      if (asingTo === elem.firstName) {
        elem.tasks.push(taskObj);
        elem.taskNumbers.newTask += 1;
      }
    });

    setUserData(data);

    localStorage.setItem("employees", JSON.stringify(data));

    setAsingTo("");
    setCategory("");
    setDate("");
    settaskTitle("");
    setDiscription("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between h-full w-full gap-3">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col md:flex-row justify-between h-full w-full gap-3"
      >
        <div className="mt-4 w-1/2 py-4">
          <div className="mb-6">
            <h4>Task Title</h4>
            <input
              type="text"
              value={taskTitle}
              placeholder="Enter Task"
              className="border border-gray-700 rounded-sm px-2 mt-2 w-[200%] md:w-full"
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <h4>Date</h4>
            <input
              type="date"
              value={date}
              className="border border-gray-700 rounded-sm px-2 mt-2 w-[200%] md:w-full"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <h4>Asign to</h4>
            <input
              type="text"
              value={asingTo}
              placeholder="Employe Name"
              className="border border-gray-700 rounded-sm px-2 mt-2 w-[200%] md:w-full"
              onChange={(e) => {
                setAsingTo(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <h4>Category</h4>
            <input
              type="text"
              value={Category}
              placeholder="Desing Development etc."
              className="border border-gray-700 rounded-sm px-2 mt-2 w-[200%] md:w-full"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="h-3/4 md:mt-4 mt-0 w-1/2 md:py-4 md:px-6">
          <div>
            <h4>Discription</h4>
            <textarea
              value={discription}
              className="border border-gray-700 mt-2 md:h-55 md:w-full h-2/6 w-[200%] p-3"
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
            ></textarea>
            <button className="py-2 px-4 bg-red-600 w-full mt-2 rounded active:scale-95">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
