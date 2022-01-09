import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SideBarOption";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import classes from "./Sidebar.module.css";

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;
