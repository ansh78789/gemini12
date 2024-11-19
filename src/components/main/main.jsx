import React, { useContext, useEffect, useState } from "react";
import bulb from '../../assets/bulb.jpeg';
import code from '../../assets/code.jpeg';
import compass from '../../assets/compass.jpeg';
import gallery from '../../assets/gallery.jpeg';
import messageicon from '../../assets/messageicon.jpeg';
import micicon from '../../assets/micicon.jpeg';
import sendicon from '../../assets/sendicon.jpeg';
import usericon from '../../assets/usericon.jpeg';
import './main.css';
import gemini from "../../config/gemini";
import { context } from "../../context/context";

const Main =() =>{

    const [prompt, setPrompt] = useState("")
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("chat");
        if(!data) {
            localStorage.setItem("chat", "[]");
        }
        else {
            setChat(JSON.parse(data));
        }
    }, []);

    const updateChat = (newChat, user) => {
        setChat((prevChat) => {
            const updatedChat = [...prevChat, {
                data: newChat,
                user: user
            }];
            localStorage.setItem("chat", JSON.stringify(updatedChat));
            return updatedChat;
        });
    }

    const handlePrompt = async() =>{
        if(prompt.length <= 0) return;
        try  {
            updateChat(prompt, "user");
            const tempPrompt = prompt;
            setPrompt("");
            const response = await gemini(tempPrompt);
            console.log(response);
            updateChat(response, "ai");
        }
        catch(err) {
            console.log(err)
            updateChat(err);
        }
    }

    return(
      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={usericon}></img>
        </div>
        {
            chat.length == 0 ? <>
                 <div className="main-container">
            <div className="greet">
                <p><span>Hello, Ansh.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest som ebesutiful placxes</p>
                    <img src={compass}></img>
                </div>
                <div className="card">
                    <p>Briffluy sumaries the concept urban planning</p>
                    <img src={bulb}></img>
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our works retreat </p>
                    <img src={messageicon}></img>
                </div>
                <div className="card">
                    <p>Improve the redeaboility of the following</p>
                    <img src={code}></img>
                </div>
            </div>
        </div>
            </> : <div className="chat-container">
                {
                    chat.map((chat, index) => (
                        <div key={index} className="">
                            {
                                chat.user == "ai" && <p className="single-chat">{chat.data}</p>
                            }
                            <div style={{ "display": "flex", "justifyContent": "end" }}>
                                {
                                    chat.user == "user" && <p className="single-chat-2">{chat.data}</p>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        }
        <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt here" value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>
                
                    <div>
                        <img src={gallery}></img>
                        <img src={micicon}></img>
                        <img onClick={handlePrompt} src={sendicon}></img>
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may import inaccurate info, including about people, so double check-its responses. Your privacy and gemini app
                </p>
        </div>
      </div>
    )
  }
  export default Main
  