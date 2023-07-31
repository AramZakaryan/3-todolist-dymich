import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";


export type CondType = "All" | "Active" | "Completed"

function App() {

    let [tasks,
        setTasks] =
        useState<TaskType[]>(
            [
                {id: v1(), title: "CSS & HTML", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "React", isDone: false},
                {id: v1(), title: "Redux", isDone: false}
            ]
        )


    let [filterCond,    // filter condition "All" | "Active" | "Completed"
        setFilterCond] =
        useState<CondType>("All")

    const removeTask = (removeTaskId: string) => {
        setTasks(tasks.filter(el => el.id !== removeTaskId))
    }

    const addTask = (newTaskTitle: string) => {
        let newTask = {id: v1(), title: newTaskTitle, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }


    const changeFilterCond = (cond: CondType) => {
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
                      addTask={addTask}
            />
        </div>
    );
}


export default App;
