import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import classes from "./Header.module.css";
import { auth } from "../firebase";
import {  signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Tooltip from "@mui/material/Tooltip";
function Header() {
  const [user] = useAuthState(auth);

  const signout = () => {
    signOut(auth).then(()=>{
      console.log('Signed out!');
    })
  }
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-left"]}>
        <span className={classes["header-avatar"]}>
        <Tooltip title='Sign Out'>
          <AccountCircleIcon src={user.photoURL} onClick={signout}/>
        </Tooltip>
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
