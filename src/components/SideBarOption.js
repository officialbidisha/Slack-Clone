import { addDoc, collection } from "firebase/firestore/lite";
import React, { useState , useRef, useEffect} from "react";
import { db } from "../../src/firebase";
import classes from "./SideBarOption.module.css";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../src/features/appSlice";

import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function SideBarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  const [isFormValid, setIsFormValid] = useState(true);

  /**
   * State for channel snackbar
   */
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  /**
   * State for channel form model
   */
  const [openModal, setOpenModal] = useState(false);



  const handleClickClose = () => {
    setOpenModal(false);
  };

  const  subscribe= async () => {
    const channelName = nameRef.current.value;
    const channelDescription = descriptionRef.current.value;
    if(channelName && channelDescription){
    handleClickClose();
    }
    if (channelName) {
      await addDoc(collection(db, "rooms"), {
        name: channelName,
        description: channelDescription
      }).then(() => {
        handleClick({
          vertical: "top",
          horizontal: "right",
        });
      });
    }
  }

  /**
   * Adding channel functionalities
   */
  const channelDialog = (
    <div>

      <Dialog open={openModal} onClose={handleClickClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Enter your channel name and descriptions respectively to add a channel
          </DialogContentText>
          <input
            margin="dense"

            label="Channel Name"
            type="text"
             style={{    width:'80%',
              outline: 'none',
              borderRadius: '5px',
              border:' 1px solid gray',
              height: '20px',
              padding: '5px 10px',
              margin: '10px 0'}}
            ref={nameRef}
            required
          />
                    <input
            margin="dense"

            label="Channel Description"
            type="text"
             style={{    width:'80%',
              outline: 'none',
              borderRadius: '5px',
              border:' 1px solid gray',
              height: '20px',
              padding: '5px 10px',
              margin: '10px 0'}}
            ref={descriptionRef}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
        {  isFormValid? <Button onClick={subscribe}>Subscribe</Button>: <Button  disabled>Subscribe</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );

  const addChannel = async () => {
    setOpenModal(true);
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
      {channelDialog}
    </React.Fragment>
  );
}

export default SideBarOption;
