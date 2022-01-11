import React, { useEffect, useState } from "react";

import classes from "./Chat.module.css";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { selectRoomId } from "../../src/features/appSlice";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import {
  collection,
  query,
  orderBy,
  getFirestore,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import Message from "./Message";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [channelNameData, setChannelNameData] = useState("");
  const [messages, setChannelMessages] = useState([]);

  useEffect(() => {
    async function getRoomDetails() {
      const db = getFirestore();
      const docRef = roomId && doc(db, "rooms", roomId);
      const docSnap = roomId && (await getDoc(docRef));
      if (docSnap.exists()) {
        setChannelNameData(docSnap.data().name);
      }
    }
    async function getRoomMessages() {
      const db = getFirestore();

      const roomMessages =
        (await roomId) &&
        query(
          collection(db, "rooms", roomId, "messages"),
          orderBy("timestamp", "asc")
        );
      if (roomMessages) {
        const querySnapShot = await getDocs(roomMessages);
        const finalMessages = [];
        querySnapShot.forEach((doc) => {
          finalMessages.push({
            id: doc.id,
            value: doc.data(),
          });
        });
        setChannelMessages(finalMessages);
        console.log(messages);
      }
    }

    getRoomDetails().then(() => {
      getRoomMessages();
    });
  }, [roomId]);

  return (
    <div className={classes["chat-container"]}>
      <div className={classes.header}>
        <div className={classes["header-left"]}>
          <h4>
            <strong>#{channelNameData}</strong>
          </h4>
          <StarOutlineOutlinedIcon className={classes.star} />
        </div>
        <div className={classes["header-right"]}>
          <p>
            <InfoOutlinedIcon className={classes.info} /> Details
          </p>
        </div>
      </div>

      <div className={classes["chat-messages"]}>
        {messages?.map((doc) => {
          const { message, timestamp, user, userImage } = doc.value;
          return (
            <Message
              key={doc.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userimage={userImage}
            >
              {message}
            </Message>
          );
        })}
      </div>

      <ChatInput channelName={channelNameData} channelId={roomId} />
    </div>
  );
}

export default Chat;
