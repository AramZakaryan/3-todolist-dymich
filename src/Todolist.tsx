import React, {useState} from "react";
import {CondType} from "./App";
import {log} from "util";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (removeTaskId: string) => void
    changeFilterCond: (cond: CondType) => void
    addTask: (newTaskTitle: string) => void
}


export function Todolist(props: TodolistPropsType) {

    let [inpValue,
        setInpValue] =
        useState("")


    const AddBtnOnClickHandler = () => {
        props.addTask(inpValue)
        setInpValue("")
    }

    const inpOnChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInpValue(ev.currentTarget.value)
    }

    const inpOnKeyDownHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.code === "Enter") {
            props.addTask(inpValue)
            setInpValue("")
        }
    }

    const AllBtnOnClickHandler = () => {
        props.changeFilterCond("All")
    }

    const ActiveBtnOnClickHandler = () => {
        props.changeFilterCond("Active")
    }

    const CompletedBtnOnClickHandler = () => {
        props.changeFilterCond("Completed")
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <input value={inpValue}
                   onChange={inpOnChangeHandler}
                   onKeyDown={inpOnKeyDownHandler}/>
            <button onClick={() => AddBtnOnClickHandler()}>+</button>
            <ul>
                {props.tasks.map((el) => {
                        const removeBtnOnClickHandler = () => {
                            props.removeTask(el.id)
                        }
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={removeBtnOnClickHandler}>X</button>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <div>
                <button onClick={AllBtnOnClickHandler}>All</button>
                <button onClick={ActiveBtnOnClickHandler}>Active</button>
                <button onClick={CompletedBtnOnClickHandler}>Completed</button>
            </div>

        </div>
    )
}