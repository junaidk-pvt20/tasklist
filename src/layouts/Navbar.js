import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { PATH } from "../utils/utils";
import { useSelector } from "react-redux/es/hooks/useSelector";
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
      title: "Implementing UseEffect, Redux "
    }, {
      path: PATH.API_INTEGRATION,
      title: "API Integration: Todo List"
    }
  ];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const items = useSelector((state) => state?.carts?.cart)
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.list}>
          <p>Junaid Khan </p>
          <p> Cart {items.length} </p>
        </div>
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
