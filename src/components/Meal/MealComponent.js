import './MealComponent.css'


export function createMeal (meal) {
    const ingredients = [];

    for(let i=1; i<=20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            break ;
        }
    }
    return ingredients ;
}

export default function MealComponent ({strIngredients,strMealThumb, strCategory, strArea, strTags, strMeal,strInstructions}) {
        return (
            <div>
                 <div className='meal'>
                <div className='image--meal'>
                    <img src={strMealThumb} alt='Food'></img>
                    <p><strong>Category:</strong>{strCategory}</p>
                    <p><strong>Area:</strong> {strArea}</p>
                    <p><strong>Tags:</strong> {strTags}</p>
                    <h4>Ingredients:</h4>
                    {strIngredients.map((ingredient,i) => <p key={i}>{ingredient}</p>)}
                </div>
                <div className='instructions--meal'>
                    <h3>{strMeal}</h3>
                    <p>{strInstructions}</p>

                    <h4>Video Recipe</h4>
                </div>
        </div>  
            </div>
        )
        }