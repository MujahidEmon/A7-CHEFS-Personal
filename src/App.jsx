

import './App.css'
import Nav from './Components/Nav/Nav'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Table from './Components/Table/Table'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantCookCount, setWantCookCount] = useState([])
  const [preparing, setPreparing] = useState([])
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalorie, setTotalCalorie] = useState(0);


  const handleCook = (recipe) =>{
    const newCooking = [...wantCookCount,recipe]
    setWantCookCount(newCooking)


  }
  const handlePreparing = (recipe, id) =>{
    const newPreparing = [...preparing, recipe]
    setPreparing(newPreparing)
    console.log(recipe)
    console.log(id)

    const newCook = wantCookCount.filter(item => item.recipe_id != id)
    setWantCookCount(newCook)  
    
    let newTime = recipe.preparing_time + totalTime
    setTotalTime(newTime)
    console.log(totalTime)

    let newCalorie = recipe.calories+totalCalorie;
    setTotalCalorie(newCalorie)
  }

  useEffect(() =>{
    fetch('FakeRecipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])


  return (
    <>
      
      <body className='lg:w-[1350px] mx-auto lg:px-0 px-3 lg:space-y-8 space-y-4'>
        <Nav></Nav>
        <Banner></Banner>

        {/* Our Recipes Sec */}
        <div className='lg:w-[823px] mx-auto text-center space-y-2'>
          <h1 className='font-semibold lg:text-4xl text-2xl'>Our Recipes</h1>
          <p className='lg:text-[16px] text-[#150B2B99] text-sm'>Our recipes are simple, delicious, and designed for all skill levels. From quick weeknight meals to gourmet dishes, we offer a variety of flavorful options made with fresh, wholesome ingredients.</p>
        </div>


        <div className='flex lg:flex-row justify-between flex-col gap-12'>          
          <div className='lg:gap-6 gap-4 grid lg:grid-cols-2 grid-cols-1'>         
            {
              recipes.map(recipe => <Card
                key={recipe.id}
                recipe={recipe}
                handleCook={handleCook}
                wantCookCount = {wantCookCount}
                ></Card>)
            }
          </div>
          <div className='rounded-xl p-4 border-2  h-fit'>
            <Table
            wantCookCount={wantCookCount}
            handleCook={handleCook}
            handlePreparing={handlePreparing}
            preparing={preparing}
            recipes = {recipes}
            totalTime={totalTime}
            totalCalorie={totalCalorie}
           
            ></Table>
          </div>
        </div>
      </body>
      
    </>
  )
}

export default App
