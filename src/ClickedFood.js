import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import style from "./searchbar.module.css";
import clicked from "./clicked.module.css";

function ClickedFood({ setfoodname, apiKey }) {
  const [alldata, setalldata] = useState([]);
  const [info, setinfo] = useState([
    {
      steps: [
        {
          id: "",
          number: "",
          step: "",
          ingredients: [
            //All the objects ingredients here
          ],
          equipment: [
            //All the equipment objects here
          ],
        },
      ],
    },
  ]);
  let history = useHistory();
  const { id, name } = useParams();
  console.log(id, name);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`
      );
      const res = await req.json();
      console.log(res)
      setinfo(res);
    };
    getData();
  }, [id, apiKey]);
  useEffect(() => {
    const getalldata = () => {
      if (info[0]) {
        setalldata(
          info[0].steps.map((item) => {
            return item;
          })
        );
      }
    };
    getalldata();
  }, [id, info]);
  return (
    <>
      <Searchbar setfoodname={setfoodname} />
      <button onClick={() => history.push("/")} className={style.btnback}>
        Go Home Page
      </button>
      <div className={clicked.outsidebox} key={Math.random()*1000+1}>
        <h1 className={style.recipiename} key={Math.random()*1000+2}>{name}</h1>
        {alldata.map((item) => {
          if (item.number !== "") {
            return (
              <div className={clicked.mainbox} key={Math.random()*1000+3}>
                <h1 className={clicked.stepnumber} key={Math.random()*1000+4}>
                  Step Number : {item.number}
                </h1>

                <div className={clicked.ingredientsbox} key={Math.random()*1000+5}>
                  <h1 className={clicked.ingredientstag} key={Math.random()*1000+7}>Ingredients</h1>
                  <ol className={clicked.ingredientslist} key={Math.random()*1000+6}>
                  { item.ingredients.length>0 ?item.ingredients.map((ingred) => {
                      return <li key={ingred.id}>{ingred.name}</li>;
                    }) : "No Ingredients Needed"}
                  </ol>
                </div>

                <div className={clicked.equipmentsbox} key={Math.random()*1000+8}>
                  <h1 className={clicked.equipmenttag} key={Math.random()*1000+9}>Equipment</h1>
                  <ol className={clicked.equipmentlist}>
                  { item.equipment.length>0 ?item.equipment.map((equips) => {
                      return <li key={equips.id}>{equips.name}</li>;
                    }) : "No Equipment Needed"}
                  </ol>
                </div>
                <h1 className={clicked.proceduretag}>Procedure</h1>
                <h1 className={clicked.stepinfo}>{item.step}</h1>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
export default ClickedFood;
