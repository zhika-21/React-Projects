import {createContext, useState,useReducer} from "react";
import {v4 as uuidv4} from "uuid"
export const TrackerContext = createContext(([]))
const initialTracker =[]

const reduce =(state,action)=>{
    switch(action.type){
    case "addTransaction":
    return [...state,{...action.payload, id:uuidv4()}]
    case "deleteTransaction":
    return state
}}
export const TrackerPrtovider = ({children})=>{
    const [formData,setFormData]= useState({type: "Income", value:0})
    const [transactions, dispacher]= useReducer(reduce,initialTracker)
const data={
    formData:formData,
    setFormData:setFormData,
    dispacher: dispacher
}


    return (
        <TrackerContext.Provider value={data}>
        {children}
        </TrackerContext.Provider>
    )
}