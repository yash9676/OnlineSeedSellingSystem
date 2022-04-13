import { useState } from 'react'
import './Counter.css'
const Counter = ({ onItemSelect }) => {
    const [count, setCount] = useState(1)
  
    const onAdd = () => {
      // to update the state with new value
      console.log(count)
      setCount(count + 1)
  
      console.log(`in add count = ${count}`)
    }
  
    const onSubtract = () => {
      // to update the state with new value
      console.log(count)
      if(count>0){
      setCount(count - 1)
    }
      console.log(`in subtract count = ${count}`)
    }
    
    return (
      <div>
        <button onClick={()=>{
          onAdd();
          onItemSelect(count+1);
        }} className="btn btn-success" >
          +
        </button>
        <span className="counter-value">{count}</span>
        <button onClick={()=>{
          onSubtract();
          onItemSelect(count-1);
        }} className="btn btn-warning" >
          -
        </button>
      </div>
    )
  }
 export default Counter  