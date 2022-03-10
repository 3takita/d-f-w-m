import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Main from "./Main";

export default function App() {
  //State setting
  const [darkMode, setDarkMode] = React.useState(true);
  //Toggle function
  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  //Component return
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
