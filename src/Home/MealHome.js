/* eslint-disable jsx-a11y/iframe-has-title */
import './MealHome.css'
import React, {useCallback, useMemo, useState} from 'react'
import MealComponent, { createMeal } from '../components/Meal/MealComponent.js';
import { get } from '../service/RequestService';



export function MealHome () {
    let [data, setData] = useState({});
    const textCenter = useMemo(() => data.idMeal ? 'text-center-padding' : 'text-center',[data])
    const ingredients = createMeal(data);
    data.strIngredients = [...ingredients]

    get('/1/random.php');
    const onClick = useCallback(
        () => {
            get('/1/random.php')
            .then(meals =>{
                setData(meals.meals[0]);
            })



        }, []
    )


    return (
        <div className='getMeal'>
            <div className={textCenter}>
                <h1>Com fome?</h1>
                <h3>Gere uma refeição aleatória!</h3>
                <button className='getMeal--btn' {...{onClick}}>Clique para gerar</button>
            </div>
            {data.idMeal ? <MealComponent {...data}/> : <div></div>}
        </div>
    )
}
