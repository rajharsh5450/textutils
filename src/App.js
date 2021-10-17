import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [path, setPath] = useState("home");

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    mode === "light" ? setmode("dark") : setmode("light");

    document.body.style.background = mode === "light" ? "#07223c" : "white";
    mode === "dark"
      ? showAlert("Dark mode disabled successfully.", "success")
      : showAlert("Dark mode enabled successfully.", "success");
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          togglemode={toggleMode}
          path={path}
          setPath={setPath}
        />
        <Alerts alert={alert} />
        <div
          className="container my-3"
          style={{
            color: mode === "light" ? "#6c757d" : "white",
          }}
        >
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyse"
                mode={mode}
                showalert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
