
import { useMemo, useState } from 'react'
import './App.css'

function App() {


    let [height,setHeight] = useState(10.6)
    let [weight,setWeight] = useState(45.5)


    const calculateBMI = useMemo(()=>{

        return (weight/(height*height))

    },[height,weight])
  
  return (
    <>

<div className='container'>
      <div className='card'>
      <div>
      <label>Weight(Kg):{weight}</label>
      <input type="range" id="vol" name="vol" min="0" max="450" onChange={(e)=>setWeight(Number(e.target.value))}></input>
      </div>
      <div>
      <label>Height(Cm):{height}</label>
      <input type="range" id="vol" name="vol" min="0" max="500" onChange={(e)=>setHeight(Number(e.target.value))}></input>
      </div>
      <div>
      <label>BMI:{calculateBMI}</label>
      
      </div>
       

        

        
        
      </div>
    </div>
    
    </>
  )
}

export default App
