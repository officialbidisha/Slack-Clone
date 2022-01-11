import { addDoc, collection } from "firebase/firestore/lite";
import React from "react";
import { db } from "../../src/firebase";
import classes from "./SideBarOption.module.css";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../src/features/appSlice";

function SideBarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      await addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <div
      className={classes["sidebar-option-container"]}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className={classes["sidebar-option-channel"]}>
          <span>#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SideBarOption;
