import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import classes from "./App.module.css";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../src/components/Login";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
function App() {
  const [user, loading] = useAuthState(auth);
  const loadingView = (
    <div style={{ margin: "10px" }}>
      <div className="row" style={{ display: "flex", height: "inherit" }}>
        <Skeleton
          variant="rectangular"
          width={210}
          height={"100vh"}
          style={{ flex: 0.2 }}
        />
        <div style={{ paddingLeft: "10px" }}></div>
        <Box style={{ flex: 0.8 }}>
          <Skeleton
            animation="wave"
            height={60}
            style={{ marginTop: "-14px", marginBottom: "5px" }}
          />
          <Skeleton
            animation="wave"
            height={5}
            style={{ marginTop: "-14px", borderRadius: "0" }}
          />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      </div>
    </div>
  );
  if (loading) {
    return <React.Fragment>{loadingView}</React.Fragment>;
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className={classes["app-body"]}>
              <Sidebar />
              <Routes>
                <Route path="/users"></Route>
                <Route path="/Slack-Clone/" exact element={<Chat />}></Route>
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
