import { useEffect, useState, useMemo } from 'react'

function Slider({data}:{ data : Array<{image:string, description:string}>}) {
  const [slider, setSlider] = useState(1);
  const [isTransition, setIsTransition] = useState(true);
  const images = useMemo(()=>{
      const result =  [data[data.length-1], ...data, data[0]];
      return result
  },[data])
  useEffect(()=>{
      const timer = setInterval(()=> setSlider(prev => prev+1),4000);
      return ()=>clearInterval(timer)
  }, [])
  
  function handleTransition(){
    if(slider == images.length-1){
      setIsTransition(false);
      setSlider(1);
      setTimeout(()=>setIsTransition(true), 500)
    }
  }
  return (
    <div style={{border:'1px solid black', overflow:'hidden', cursor:'pointer', width:'40vw', marginBlockStart:'8rem'}}
    >
       <div style={{border:'1px solid green', display:'flex', transform: `translateX(${-slider*42}rem)`, transition: isTransition ? 'transform 2s ease' : 'none'}} onTransitionEnd={handleTransition}>
        {images.map((slide, index) => <img key={index} className="show" style={{width:'48rem', height:'27rem'}} src={slide.image} alt="logo" />)}
       </div>
    </div>
  )
}

export default Slider
