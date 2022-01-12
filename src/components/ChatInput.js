import { Button } from '@mui/material'
import React, { useState} from 'react'
import classes from './ChatInput.module.css'
import {db, auth} from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { useAuthState } from "react-firebase-hooks/auth";


function ChatInput({channelName,channelId}) {
    const [input, setInput] = useState("");
    const [user, loading] = useAuthState(auth);

    const sendMessage = async e =>{
        e.preventDefault();
        if(!channelId){
            return false;
        }
        setInput("");
        await addDoc( collection(db, "rooms", channelId, "messages"),{
            message:input,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL

        })
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
