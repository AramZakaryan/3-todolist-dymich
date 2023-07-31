import React from "react";
import {CondType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (removeTaskId: number) => void
    changeFilterCond: (cond: CondType) => void
}

export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <input/>
            <button>+</button>
            <ul>
                {props.tasks.map((el) => {
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={() => props.removeTask(el.id)}>X</button>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <div>
                <button onClick={() => props.changeFilterCond("All")}>All</button>
                <button onClick={() => props.changeFilterCond("Active")}>Active</button>
                <button onClick={() => props.changeFilterCond("Completed")}>Completed</button>
            </div>

        </div>
    )
}