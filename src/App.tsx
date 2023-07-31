import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type CondType = "All" | "Active" | "Completed"

function App() {

    let [tasks,
        setTasks] =
        useState<TaskType[]>(
            [
                {id: 1, title: "CSS & HTML", isDone: true},
                {id: 2, title: "JS", isDone: true},
                {id: 3, title: "React", isDone: false},
                {id: 4, title: "Redux", isDone: false}
            ]
        )

    let [filterCond,    // filter condition "All" | "Active" | "Completed"
        setFilterCond] =
        useState<CondType>("All")

    const removeTask = (removeTaskId: number) => {
        setTasks(tasks.filter(el => el.id !== removeTaskId))
    }


    const changeFilterCond = (cond:CondType) => {
        setFilterCond(cond)
    }

    let filteredTasks   // tasks to be shown (after filtration)

    filterCond === "Active" ?
        filteredTasks = tasks.filter(el => !el.isDone) :
        filterCond === "Completed" ?
            filteredTasks = tasks.filter(el => el.isDone) :
            filteredTasks = tasks


    return (
        <div className="App">
            <Todolist title="What to learn?"
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilterCond={changeFilterCond}
            />
        </div>
    );
}


export default App;
