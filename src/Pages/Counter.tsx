import {useReducer, useState} from 'react'
import { Button } from 'react-bootstrap';
function Counter() {
    const [countState, dispatchCountAction] = useReducer(countReducer, 0);
    const [newCount, setNewCount] = useState(0);
    function countReducer(state:number, type:string){
        switch(type){
            case 'increment': 
                return state+1;
            case 'decrement':
                return state-1;
            case 'reset':
                return 0;
            default: return state;
        }
    }
  return (
    <div>
      <h4>{countState}</h4>
      <Button onClick={()=>dispatchCountAction('increment')}>
        increment
      </Button>
      <Button onClick={()=>dispatchCountAction('decrement')}>
        decrement
      </Button>
      <Button onClick={()=>dispatchCountAction('reset')}>
        reset
      </Button>
      <h4>{newCount}</h4>
      <Button onClick={()=>{
        setInterval(()=>setNewCount(newCount+1),500)
      }}>incr</Button>
    </div>
  )
}

export default Counter
