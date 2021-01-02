import style from './searchbar.module.css'
import { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
function Displayfood({ apiKey }) {
  const [foodrec, setfoodrec] = useState([])
  let randomfoods = [
    'burger',
    'pizza',
    'pista',
    'cake',
    'icecream',
    'peanuts',
    'chips',
    'smoothie',
  ]
  let randomnum = Math.random() * 8
  useEffect(() => {
    const renderdata = async () => {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${
          randomfoods[Math.round(randomnum)]
        }`
      )
      const data = await req.json()
      setfoodrec(data.results)
    }
    renderdata()
  }, [])

  return (
    <>
      <div className={style.mainapp}>
        <div className={style.randomtag}>
          <i className="fas fa-drumstick-bite"></i>
          <h1 className={style.tagrecipie}>SOME Random Recipes</h1>
          <i className="fas fa-drumstick-bite"></i>
        </div>
      </div>
      <div className={style.boxfood}>
        {foodrec.map((item) => {
          return (
            <FoodItem
              id={item.id}
              key={item.id}
              name={item.title}
              img={item.image}
            />
          )
        })}
      </div>
    </>
  )
}

export default Displayfood
