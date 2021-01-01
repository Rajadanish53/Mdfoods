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
  const { id, img } = useParams();
  console.log(id, img);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`
      );
      const res = await req.json();
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
  console.log(alldata);
  return (
    <>
      <Searchbar setfoodname={setfoodname} />
      <button onClick={() => history.push("/")} className={style.btnback}>
        Go Home Page
      </button>
      <div className={clicked.outsidebox}>
        <img className={style.imgtag} src={img} alt="" />
        {alldata.map((item) => {
          if (item.number !== "") {
            return (
              <div className={clicked.mainbox} key={item.id}>
                <h1 className={clicked.stepnumber}>
                  Step Number : {item.number}
                </h1>

                <div className={clicked.ingredientsbox}>
                  <h1 className={clicked.ingredientstag}>Ingredients</h1>
                  <ol className={clicked.ingredientslist}>
                    {item.ingredients.map((ingred) => {
                      return <li key={ingred.id}>{ingred.name}</li>;
                    })}
                  </ol>
                </div>

                <div className={clicked.equipmentsbox}>
                  <h1 className={clicked.equipmenttag}>Equipment</h1>
                  <ol className={clicked.equipmentlist}>
                    {item.equipment.map((equips) => {
                      return <li key={equips.id}>{equips.name}</li>;
                    })}
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
