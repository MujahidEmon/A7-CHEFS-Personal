import PropTypes from 'prop-types'
import PreparingTable from "../SingleRecipe/PreparingTable";
import SingleRecipe from "../SingleRecipe/SingleRecipe";


const Table = ({wantCookCount, preparing, handlePreparing, totalTime,totalCalorie}) => {
    
    return (
        <div className="lg:w-[514px]">
            <h1 className="text-lg lg:text-2xl text-center font-semibold">Want to cook: {wantCookCount.length}</h1>
            <div className="divider"></div>


{/* Want to cook table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    
                    <tr className='text-[#878787]'>
                        <th></th>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Time</th>
                    </tr>
                    
                   
                    {/* row 1 */}
                    {
                        wantCookCount.map((cooking, index) => <SingleRecipe 
                        key={index}
                        cooking={cooking}
                        wantCookCount = {wantCookCount}
                        cookId = {index+1}
                        handlePreparing={handlePreparing}
                        ></SingleRecipe>)
                    }
                    
                    
                    
                </table>
            </div>

            {/* Currently Cooking Table */}
            <h1 className="text-lg lg:text-2xl lg:mt-6 mt-4 text-center font-semibold">Currently Cooking: {preparing.length}</h1>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}                  
                    <tr className='text-[#878787]'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>                   
                    {/* row */}
                    {
                        preparing.map((prep, index) => <PreparingTable 
                        key = {index}
                        prep={prep}
                        id={index+1}                       
                        ></PreparingTable>)
                    }

                    <tr className='text-[#282828CC] font-medium'>
                        <td></td>
                        <td></td>
                        <td className='w-[68px]'>Total Time = {totalTime} minutes</td>   
                        <td className='w-[62px]'>Total Calories = {totalCalorie} calories</td>   
                    </tr>
                    
                    
                </table>
            </div>

        </div>
    );
};

Table.propTypes = {
    wantCookCount: PropTypes.object,
    preparing: PropTypes.object,
    handlePreparing: PropTypes.func,
    totalTime: PropTypes.number,
    totalCalorie: PropTypes.number
}

export default Table;