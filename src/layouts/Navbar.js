import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import index from "../pages/HomePage/Index";
import { Link } from "react-router-dom";
import { PATH } from "../utils/utils";
const Navbar = () => {
  const dropdown = [
    { path: PATH.STOPWATCH, title: "create a countdown clock and stopwatch." },
    {
      path: PATH.SETTIMEOUT_INTERVAL,
      title: "Implement an example showcasing both the use cases",
    },
    { path: PATH.HANDLING_EVENTS, title: "Handling events" },
    {
      path: PATH.COMPONENTS_PROPS,
      title:
        " Create 2 components A and B, A passes some props to B  B should display the data received from A",
    },
    {
      path: PATH.CONDITIONAL_RENDERING,
      title:
        " Create a switch input field. Display ON on the screen when the toggle is on and show OFF otherwise.",
    },
    {
      path: PATH.REDUX,
      title: "Implementing Redux"
    }
  ];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div> Junaid Khan </div>
        <div className="navbar-dropdown">
          <button className={styles.navdropdownbtn} onClick={toggleDropdown}>
            Task List
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className={styles.navdropdown}>
          <div className={styles.navdroplist}>
            {dropdown.map((list) => {
              return (
                <li key={list.path}>
                  <Link to={`/${list.path}`} onClick={toggleDropdown}>
                    {list.title}
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
