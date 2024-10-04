import PropTypes from 'prop-types';

const SingleRecipe = ({cooking, cookId, handlePreparing}) => {
    const{ recipe_id, recipe_name, calories, preparing_time} = cooking

    
    return (
        <tr className='text-[#282828B3]'>              
            <td id='cook-id'>{cookId}</td>
            <td className='w-[122px]'>{recipe_name}</td>
            <td className='w-[68px]'>{calories} Calories</td>
            <td className='w-[62px]'>{preparing_time} Minutes</td>
            <button onClick={() => handlePreparing(cooking, recipe_id)} className="btn text-[#150B2B] bg-[#0BE58A] border-none rounded-full text-sm font-medium px-3 ">Preparing</button>              
        </tr>
        
    );
};

SingleRecipe.propTypes = {
    cooking: PropTypes.object,
    handlePreparing: PropTypes.func,
    cookId: PropTypes.number

}

export default SingleRecipe;