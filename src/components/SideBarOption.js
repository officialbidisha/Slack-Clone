import { doc, addDoc, setDoc } from "firebase/firestore/lite";
import { getFirestore, collection } from "firebase/firestore";
import React from "react";
import { db, firebaseApp } from "../../src/firebase";
import classes from "./SideBarOption.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
function SideBarOption({ Icon, title, addChannelOption }) {
  const [channels, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "rooms"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log('Channels', channels);

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      const docRef = await addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

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
