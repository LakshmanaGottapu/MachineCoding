import { useRef, useEffect, useState } from 'react'
import Circle from '../Components/Circle'
import lodash from 'lodash'
function MouseMove() {
  type Pos = { x: number, y: number }
  const circleRef = useRef<HTMLDivElement>(null);
  const offSet = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const throttledMouseMove = lodash.throttle(handleMouseMove,50)
    const parentElement = document.querySelector<HTMLDivElement>('.parent');
    if(parentElement) 
      parentElement.addEventListener('mousemove', throttledMouseMove);
    const { x, y } = getPosition();
    if (circleRef && circleRef.current) {
      const draggableStyle = circleRef.current.getBoundingClientRect();
      if (draggableStyle) {
        const { width, height } = draggableStyle
        offSet.current.x = width/2
        offSet.current.y = height/2
      }
      circleRef.current.style.left = `${x}px`;
      circleRef.current.style.top = `${y}px`;
    }
    return () => {
      if(parentElement)
        parentElement.removeEventListener('mousemove', throttledMouseMove);
    }
  }, [])
  function getRandomPosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const randomWidth = 10 + Math.random() * (windowWidth - 10)
    const randomHeight = 10 + Math.random() * (windowHeight - 10)
    return { x: randomWidth, y: randomHeight }
  }
  function getPosition() {
    let initialPos = localStorage.getItem('initialPos');
    if (initialPos !== null) {
      const data = JSON.parse(initialPos);
      return data as Pos;
    }
    return getRandomPosition()
  }
  let count = 0
  function handleMouseMove(e:MouseEvent) {
    count++;
    console.log(count)
    const { clientX, clientY } = e;
    setTimeout(() => {
      window.requestAnimationFrame(() => {
        if (circleRef && circleRef.current) {
          circleRef.current.style.left = `${clientX - offSet.current.x}px`
          circleRef.current.style.top = `${clientY - offSet.current.y}px`
      } })  
    }, 250)
  }
  return (
    <div  className='parent' style={{ height: '100vh', width: '100vw', position:'relative' }}>
      <Circle ref={circleRef} />
    </div>
  )
}

export default MouseMove
