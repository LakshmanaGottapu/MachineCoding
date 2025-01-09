import {useState, useRef, useEffect} from 'react';

const MouseDrag = () => {
    type Pos = {x:number, y:number}
    const [position, setPosition] =  useState({x:10, y:10});
    
    const offSet = useRef({x:0,y:0});
    useEffect(()=>{
      setPosition(getPosition())
    },[])
    function getRandomPosition(){
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const randomWidth = 10+Math.random()*(windowWidth-10)
      const randomHeight = 10+Math.random()*(windowHeight-10)
      return {x:randomWidth, y:randomHeight}
    }
    function getPosition(){
      let initialPos = localStorage.getItem('initialPos');
      if(initialPos!==null){
        const data = JSON.parse(initialPos);
        console.log({data})
        return data as Pos;
      }
      return getRandomPosition()      
    }
    function handleDragStart(e){
      console.log('drag started')
      const {clientX, clientY} = e;
      const draggableStyle = document.querySelector<HTMLDivElement>('.draggable')?.getBoundingClientRect();
      if(draggableStyle){
        const {top, left} = draggableStyle
        offSet.current.x = clientX-left
        offSet.current.y = clientY-top
      }
    }
    function handleDragOver(e){
      console.log('drag over.....')
      const {clientX, clientY} = e;
        setPosition({x:clientX-offSet.current.x,y:clientY-offSet.current.y});
    }
    function handleDragEnd(e){
      const {clientX, clientY} = e;
      localStorage.setItem('initialPos',JSON.stringify({x:clientX-offSet.current.x, y:clientY-offSet.current.y}))
    }
  return (
    <div className='parent' style={{height:'100vh', width:'100vw'}} onDragOver={handleDragOver}>
      <div draggable='true' className='draggable' style={{height:'5rem', width:'5rem', borderRadius:'50%', backgroundColor:'red', position:'absolute', top:`${position.y}px`, left:`${position.x}px`}} onDragStart={handleDragStart} onDragEnd={handleDragEnd}></div>
      <button onClick={()=>{setPosition(prev => ({x:prev.x+10, y:prev.y+10}))}}></button>
    </div>
  )
}

export default MouseDrag

