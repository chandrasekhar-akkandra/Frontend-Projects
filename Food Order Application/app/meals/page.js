import style from "./page.module.css"
import Link from "next/link";
import Mealgrid from "./mealGrid";
import getMeals from "@/lib/meals";
import { Suspense } from "react";
export function Meal(){
    const dbmeals= getMeals();
    return <Mealgrid meals={dbmeals}></Mealgrid>
}
export default function MealPage(){
    
    return(
        <>
        <header className={style.header}>
            <h1> Delicious meals created{' '} <span className={style.highlight}>by you </span></h1>
            <p>Chose your favourite recipe and try it at home </p>
            <p className={style.cta}>
                <Link href="/meals/share">Share your own favourite recipe </Link>
            </p>
        </header>
        <main className={style.main}>
            <Suspense fallback={<p>fetching data....</p>}>
            <Meal></Meal>
            </Suspense>
        </main>
        </>

    );
}