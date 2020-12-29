import Searchbar from "./Searchbar"
import styles from "./searchbar.module.css"

function Headbar({setfoodname}) {
    return (
        <div className={styles.header}>
         <Searchbar setfoodname={setfoodname}/>
         <div className={styles.contentbox}>
         <h1 className={styles.simplec}>The Only Search Engine That Reaches All The Recipies</h1>
         <p>Find All the recipies and food related stuff in this website </p>
         </div>
        </div>
    )
}

export default Headbar
