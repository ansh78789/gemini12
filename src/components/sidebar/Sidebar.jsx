import React, { useState } from "react";
import history from '../../assets/history.jpeg';
import menuicon from '../../assets/menuicon.jpeg';
import messageicon from '../../assets/messageicon.jpeg';
import pludicon from '../../assets/pludicon.jpeg';
import questionicon from '../../assets/questionicon.jpeg';
import settinficon from '../../assets/settinficon.jpeg';
import './sidebar.css';
const Sidebar =() =>{

    const[extended,setExtended]=useState(false)


  return(
    <div className="sideba">
        <div className="top">
           <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={menuicon}></img>
        <div className="new-chat">
            <img src={pludicon}></img>
            {extended?<p>New chat</p>:null}
        </div>
        {extended
        ?
        <div className="recent">
            <p className="recent-title"> Recent</p>
            <div className="recnt-entry">
                <img src={messageicon}></img>
                <p>What is react ...</p>
            </div>
        </div>
        :null
        }
        </div>
        <div className="bottom">
            <div className="bottom-item recnt-entry">
                <img src={questionicon}></img>
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recnt-entry">
                <img src={history}></img>
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recnt-entry">
                <img src={settinficon}></img>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}
export default Sidebar