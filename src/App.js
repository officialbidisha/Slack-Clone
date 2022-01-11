import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import classes from './App.module.css';
import Chat from "./components/Chat";
import { auth } from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Login from '../src/components/Login';
function App() {
  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <div>Loadinf</div>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (<Login/>): (        <>
          <Header />
          <div className={classes['app-body']}>
            <Sidebar/>
            <Routes>
              <Route path="/users"></Route>
              <Route path="/"  exact element={<Chat/>}></Route>
            </Routes>
          </div>
        </>)}

      </Router>
    </div>
  );
}

export default App;
