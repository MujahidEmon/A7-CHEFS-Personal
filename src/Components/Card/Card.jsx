import PropTypes from 'prop-types';

const Card = ({recipe, handleCook}) => {
    const{image, recipe_name, short_description, ingredients, calories, preparing_time} = recipe;
      
    return (
        <div>
            
            <div className="card bg-base-100 h-[685px] w-96 lg:w-[379px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                    src={image}
                    alt={recipe_name}
                    className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body p-6  ">
                    <h2 className="text-xl font-semibold">{recipe_name}</h2>
                    <p className="text-[#878787] fira">{short_description}</p>

                    <div className="divider my-1"></div>

                    <h2 className="font-medium text-lg">Ingredients: {ingredients.length}</h2>
                    <ul className="list-disc fira text-[#878787] ml-4">
                        {
                            ingredients.slice(0,3).map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>

                    <div className="divider my-1"></div>

                    <div className="fira flex gap-3">
                        <div className="flex items-center gap-1">
                            <img src="/Frame.png" alt="time-clock" />
                            <p className="text-[#282828CC] fill-transparent">{preparing_time} Minutes</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="/Frame (1).png" alt="calorie-png" />
                            <p className="text-[#282828CC]">{calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions mt-2">
                    <button onClick={() => handleCook(recipe)} className="btn text-[#150B2B] bg-[#0BE58A] border-none rounded-full text-lg font-medium px-5 ">Want to cook</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

Card.propTypes = {
    recipe: PropTypes.object,
    handleCook: PropTypes.func
}

export default Card;