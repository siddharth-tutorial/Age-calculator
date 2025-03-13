import Header from "./Header"
import React, { useState } from 'react'
import './Age.css';

function Agecalculator() {
  const [Birthdate, setBirthdate] = useState('')  
  const [age, setAge] = useState(null)

  const CalculateAge = (Birthdate) => {
    const birthobj = new Date(Birthdate);

    if(isNaN(birthobj)){
      alert('Please Enter Your Birth date');
    }
    const currentDate = new Date();
    const milliSecond= currentDate-birthobj;

    const ageinyears=Math.floor(milliSecond/(1000*60*60*24*365.25))
    setAge(ageinyears)
    console.log(ageinyears)
    console.log(birthobj)
    console.log(currentDate)
   
    
   
  }
  
  const handleChange = (e) => {
    setBirthdate(e.target.value);  
  }

  return (
    <div className="App">
      <Header />
      <h3>ReactJs Calculate age from given date</h3>
      {/* age calculator */}
      <form action="#" className="App-header">
        <input 
          type="date"
          value={Birthdate}  
          onChange={handleChange}
        />
        <button 
          type="submit"
          onClick={() => CalculateAge(Birthdate)}
        >
          Calculate Age
        </button>
      </form>
      {age !== null && <h1>Your Age is: {age}</h1>} 
    </div>
  )
}

export default Agecalculator;
