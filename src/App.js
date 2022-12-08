import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  //counter -state -to hold values
function incrementCounter(){
  setCounter(counter+1)
}
function decrementCounter(){
  if(counter>0){
    setCounter(counter-1)
  }else{
    setCounter(0)
  }
  
}
function reset(){
  setCounter(0)
}
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}} className="App" >
      <header className="App-header">
       <h3 style={{fontStyle:"italic",fontFamily:"cursive"}}>COUNTER APPLICATION</h3>
      <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}> <h2>{counter}</h2> </div>  


      <div style={{display:'flex',flexDirection:'column'}}>
      <button style={{background:'red',color:'white',padding:'10px'}} onClick={incrementCounter}>More</button></div><br></br>
      <div style={{display:'flex',flexDirection:'column'}}>

       <button style={{background:'blue',color:'white',padding:'10px'}} onClick={decrementCounter}>Less</button></div><br></br>
       <div style={{display:'flex',flexDirection:'column'}}>

       <button style={{background:'green',color:'white',padding:'10px'}} onClick={reset}>Reset</button></div>
      </header>
    </div>
  );
}

export default App;
