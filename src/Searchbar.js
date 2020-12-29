import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./searchbar.module.css";

function Searchbar({ setfoodname }) {
  let history = useHistory();
  const [foodinfo, setfoodinfo] = useState("");

  const sentFoodname = () => {
    setfoodname(foodinfo);
    history.push("/results");
  };

  const searchHandle = (e) => {
    setfoodinfo(e.target.value);
  };

  return (
    <React.Fragment>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Foodz Hub</h1>
        <div className={styles.searchbarbox}>
          <button onClick={sentFoodname} className={styles.searchbtn}>
            Search
          </button>
          <input
            type="text"
            onChange={searchHandle}
            className={styles.searchbox}
          />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Searchbar;
