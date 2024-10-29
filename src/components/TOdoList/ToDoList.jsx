import { useState } from "react";

export default function ToDoList(){

    const

    const [allTasks, setallTasks] = useState(
        [
            {
                taskId:101,
                taskName: "Call Friend",
                isTaskCompleted: false
            },
            {
                taskId:102,
                taskName: "Cooking",
                isTaskCompleted: false
            },
        ]
    );

    function handleDeleteTask(taskId){
        console.log(taskId);
        let filteredAllTasks = allTasks.filter(
            (eachTask)=> eachTask
        )
    }

    function handleAddTask(){
        setallTasks()
    }

    function handleToggleTask(taskId){
        setallTasks((prevTasks)=>prevTasks.map(
            
        ))
    }

    let mappedAllTasks = allTasks.map((eachTask)=>(
        <li key={eachTask.taskId}
        className="list-group-item"
        onClick={()=>handleToggleTask(eachTask.taskId)}>
            {eachTask.taskName} {eachTask.isTaskCompleted?"✔️":""}
        <button className="btn btn-warning">🗑️</button>
        </li>
    ))
    return(
        <>
        <div className="conatiner m-5">
            <h3>ToDo ApP</h3> 
            <div className="form-control-group">
                <input type="text"
                 />
            </div>
            <ul className="list-group">{mappedAllTasks}</ul>
        </div>
        </>
    );
}