import { useState } from "react";
import { IconTextPlus, IconTrash } from "@tabler/icons";
import Button from "./Button";

function Todo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask != "") {
      setTask((prevTask) => [...prevTask, newTask]);
      e.target[0].value = "";
      setNewTask("");
    }
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = (e) => {
    del(e.currentTarget.getAttribute("data-id"));
  };

  const del = (id) => {
    setTask(
      task.filter((v, i) => {
        if (i != id) {
          return v;
        }
      })
    );
  };

  return (
    <>
      <div>
        <ul className="list-disc text-start list-outside min-w-3/5 mx-auto text-yellow-50">
          {/* {task.map((task, id) => {
            return <li key={id}>{task}</li>;
          })} */}
          {task.length > 0 ? (
            <>
              {task.map((task, id) => {
                return (
                  <li
                    key={id}
                    data-id={id}
                    onClick={handleClick}
                    className="relative my-3 pl-3 [&>button]:hover:scale-100"
                  >
                    {task}
                    <button className="bg-red-500 w-7 h-7 absolute -top-0 -left-7 rounded-xl scale-0 transition-transform  duration-500 ease-out">
                      <IconTrash data-id={id} className="mx-auto w-5" />
                    </button>
                    {/* <IconTrash className="h-4 w-4 absolute top-0.5 -left-6 bg-red-600 leading-loose rounded pb-0.5 block" /> */}
                  </li>
                );
              })}
            </>
          ) : (
            <div className="text-center">You have't task now</div>
          )}
        </ul>
        <hr className="min-w-3/5 mx-auto my-4" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-72 px-4 py-2 rounded-md bg-slate-500 focus:outline-none focus:bg-slate-600 transition-all duration-500 ease-in-out text-yellow-50"
          placeholder="Add your task here..."
          onChange={handleChange}
        />

        <div className="flex gap-x-2 justify-center my-3">
          <Button>
            <IconTextPlus />
            Submit Task
          </Button>
        </div>
      </form>
    </>
  );
}

export default Todo;
