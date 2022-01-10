import { Button } from '@mui/material'
import React, {useRef, useState} from 'react'
import classes from './ChatInput.module.css'
import {db} from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
 
function ChatInput({channelName,channelId}) {
    const inputRef = useRef(null);
    const [input, setInput] = useState("");

    const sendMessage = async e =>{
        debugger;
        e.preventDefault();
        if(!channelId){
            return false;
        }

        await addDoc( collection(db, "rooms", channelId, "messages"),{
            message:input,
            timestamp: serverTimestamp(),
            user: 'Bidisha Das',
            userImage: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png"

        })
        setInput("");
    }

    return (
        <div className={classes['chatinput-container']}>
            <form>
                <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder = {`Message Room`}/>
                <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput;
