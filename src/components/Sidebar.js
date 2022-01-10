import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SideBarOption";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from "react-firebase-hooks/firestore";

import { getFirestore, collection } from "firebase/firestore";
import {  firebaseApp } from "../../src/firebase";

import classes from "./Sidebar.module.css";

function Sidebar() {
  const [channels, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "rooms"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div className={classes["sidebar-container"]}>
      <div className={classes["sidebar-header"]}>
        <div className={classes["sidebar-info"]}>
          <h2>General</h2>
          <h3>
            <FiberManualRecordIcon className={classes["status-icon"]} />
            Bidisha Das
          </h3>
        </div>
        <CreateIcon className={classes["edit-icon"]} />
      </div>

      <SidebarOption Icon={InsertCommentIcon} title="Threads"></SidebarOption>
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"></SidebarOption>
      <SidebarOption Icon={DraftsIcon} title ="Saved Items"/>
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser"></SidebarOption>
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups"></SidebarOption>
      <SidebarOption Icon={AppsIcon} title ="Apps"/>
      <SidebarOption Icon={FileCopyIcon} title="File Browser"></SidebarOption>
      <SidebarOption Icon={ExpandLessIcon} title ="Show Less"> </SidebarOption>
      <hr/>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels"></SidebarOption>
      <hr/>
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
      { channels && channels?.docs.map(doc => (
          <SidebarOption  key={doc.id} id={doc.id} title={doc.data().name}/>
      ))}
     </div>
  );
}

export default Sidebar;
