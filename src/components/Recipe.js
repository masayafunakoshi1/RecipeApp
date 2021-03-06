import React from 'react';
import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="Food Images" />
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>

            <p>{Math.round(calories)} Calories</p>
        </div>
    )
}

export default Recipe

