import PropTypes from 'prop-types';

const PreparingTable = ({prep,id}) => {
    const{recipe_name, calories, preparing_time} = prep
    return (
        <tr className='text-[#282828B3]'>
            <td className="w-[42px]">{id}</td>
            <td className='w-[122px]'>{recipe_name}</td>
            <td className='w-[68px]'>{preparing_time}</td>
            <td className='w-[62px]'>{calories}</td>                       
                                
        </tr>
    );
};

PreparingTable.propTypes = {
    prep: PropTypes.object,
    id: PropTypes.number
}

export default PreparingTable;