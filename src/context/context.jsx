import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const context=createContext();
const ContextProvider=(props)=>{

    const[input,setinput]=useState("");
    const[recentPromt,setrecentPromt]=useState("");
    const[prevPromts,setprevPromts]=useState([]);
    const[showResult,setshowResult]=useState(false);
    const[loading,setloading]=useState(false);
    const[resultData,setresultData]=useState("");

    const onSent= async (prompt)=>{
        await runChat(input)
    }

    const contextValue= {
        prevPromts,
        setprevPromts,
        onSent,
        setrecentPromt,
        recentPromt,
        showResult,
        loading,
        resultData,
        input,
        setinput,
    }
    return(
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    )
}
export default ContextProvider