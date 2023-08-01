import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import index from "../pages/HomePage/Index";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dropdown = [
    { path: "stopwatch", title: "create a countdown clock and stopwatch." },
    {
      path: "setTimeout-vs-setInterval",
      title: "Implement an example showcasing both the use cases",
    },
    { path: "handling-events", title: "Handling events" },
    {
      path: "components-and-props",
      title:
        " Create 2 components A and B, A passes some props to B  B should display the data received from A",
    },
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
