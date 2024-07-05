import React from "react"
import { useState } from "react"

function ToDoTask(){
    const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState('');

  function handleInputChange(event){
    setNewtask(event.target.value);
  }
  function addTask(){
    if(newtask.trim() !== ""){
        setTasks((prev) => [ newtask, ...prev])
        setNewtask("")
    }
    else{
        alert('Please write a task')
    }
  }
  function deleteTask(index){
    const updatetask = tasks.filter((_, i) => i !== index)
    setTasks(updatetask)
  }
  function moveupTask(index){
    if(index > 0){
        const updatetask = [...tasks];
        [updatetask[index], updatetask[index - 1]] = [updatetask[index - 1], updatetask[index]];
        setTasks(updatetask);
    }
  }
  function movedownTask(index){
    if(index < tasks.length - 1){
        const updatetask = [...tasks];
        [updatetask[index], updatetask[index + 1]] = [updatetask[index + 1], updatetask[index]];
        setTasks(updatetask);
    }
  }
  
  return (
    <>
      <div className='bg-gray-800 p-9'>
        <h1 className='text-green-500 font-bold font-sans text-5xl'>Manage To Do's</h1>
        <input value={newtask} onChange={handleInputChange}
            type='text' placeholder='Enter a task...' 
            className='mt-6 mr-1 p-4 text-xl font-sans'>
        </input>
        <button onClick={addTask}
        className='p-3.5 text-xl font-bold'>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => 
          <li className="bg-amber-300 w-auto m-2 p-3" key={index}>
            <span className="text-black bg-green-400 p-3 text-2xl font-bold">{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveupTask(index)}>👆up</button>
            <button onClick={() => movedownTask(index)}>👇down</button>
          </li>
        )}
      </ol>
    </>
  )
}

export default ToDoTask;