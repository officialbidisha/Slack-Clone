import { addDoc, collection } from "firebase/firestore/lite";
import React, {useState} from "react";
import { db } from "../../src/firebase";
import classes from "./SideBarOption.module.css";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../src/features/appSlice";
import Snackbar from '@mui/material/Snackbar';

function SideBarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const [state, setState] = useState({open: false, vertical: 'top',
  horizontal: 'center',});
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => {

    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {

      await addDoc(collection(db, "rooms"), {
        name: channelName,
      }).then(()=>{
        debugger;
        console.log('Here');
        handleClick({
          vertical: 'top',
          horizontal: 'right',
        })
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
    <React.Fragment>
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
          <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Channel Created"
          key={vertical + horizontal}
          autoHideDuration={4000}
        />
    </React.Fragment>
  );
}

export default SideBarOption;
