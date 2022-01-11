import React from "react";

import classes from "./Chat.module.css";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { selectRoomId } from "../../src/features/appSlice";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";

import { useCollection } from "react-firebase-hooks/firestore";
import {
  query,
  orderBy,
  startAt,
  getFirestore, collection 
} from "firebase/firestore";

import { firebaseApp } from "../firebase";

function Chat() {
    debugger;
  const roomId = useSelector(selectRoomId);
  console.log(roomId);
  const [roomRef, loading, error] =   useCollection( roomId && 
    collection(getFirestore(firebaseApp), 'rooms', roomId, 'messages'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  console.log(roomRef);
  const roomM =  roomRef && query( roomRef);


 console.log(roomM);

  return (
    <div className={classes["chat-container"]}>
      <div className={classes.header}>
        <div className={classes["header-left"]}>
          <h4>
            <strong>#RoomName</strong>
          </h4>
          <StarOutlineOutlinedIcon className={classes.star} />
        </div>
        <div className={classes["header-right"]}>
          <p>
            <InfoOutlinedIcon className={classes.info} /> Details
          </p>
        </div>
      </div>

      <div className={classes["chat-messages"]}></div>

      <ChatInput
        // channelName={}
        channelId={roomId}
      />
    </div>
  );
}

export default Chat;
