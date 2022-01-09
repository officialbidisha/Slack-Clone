import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-left"]}>
        <span className={classes["header-avatar"]}>
          <AccountCircleIcon/>
        </span>
        <AccessTimeIcon className={classes["time-icon"]}/>
      </div>
      <div className={classes["header-search"]}>
        <SearchIcon/>
        <input placeholder="Search"/>
      </div>
      <div className={classes["header-right"]}>
        <HelpIcon className={classes["help-icon"]}/>
      </div>
    </div>
  );
}

export default Header;
