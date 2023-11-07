import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Pofile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/dialog/*" element={<Dialogs />} />
            <Route
              path="/profile*"
              element={
                <Profile
                  profilePage={props.State.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/dialogs/*" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
