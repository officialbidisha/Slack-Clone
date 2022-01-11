import React from "react";
import classes from "./Login.module.css";
import Button from "@mui/material/Button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className={classes["login-container"]}>
      <div className={classes.innercontainer}>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <p>bidisha.slack.com</p>
        <Button variant="contained" type="sumit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
