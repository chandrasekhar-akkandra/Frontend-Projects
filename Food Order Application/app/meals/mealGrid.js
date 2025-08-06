import style from "./mealGrid.module.css";
import MealItem from "./mealItem";
export default function Mealgrid({meals}){
return(
<ul className={style.meals}>
{meals.map((meal) => (<li key={meal.id}>
    <MealItem {...meal}></MealItem>
</li>))}
</ul>
);

}