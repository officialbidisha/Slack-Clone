import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import classes from './App.module.css';
function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <div className={classes['app-body']}>
            <Sidebar/>
            <Routes>
              <Route path="/about"></Route>
              <Route path="/users"></Route>
              {/* <Route path="/" element={<Header/>}></Route> */}
            </Routes>
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
