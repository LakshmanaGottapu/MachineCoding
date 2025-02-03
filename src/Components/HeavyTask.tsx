import { useState } from "react";
const worker = new Worker(new URL('./worker.ts', import.meta.url));
worker.onmessage = function(message){
  console.log(message.data)
}
function HeavyTask() {
  const [theme, setTheme] = useState<"day" | "night">("day");
    // Simulate heavy task
    function heavyTask(){
      // let i =0;
      // console.log('heavy task started')
      // function processChunk(){
      //   const start = performance.now();
      //   while(i < 1000000000) {
      //     i++;
      //     Math.random() + Math.random();
      //     if(performance.now() - start > 50){
      //       console.log("chunk is processed i = "+i)
      //       setTimeout(processChunk, 0)
      //       return;
      //     }
      //   }
      //   console.log('heavy task finished')
      // }
      // processChunk();
      worker.postMessage('hello worker')
    }
  return (
    <div>
      <button style={{ cursor:'pointer'}} onClick={heavyTask}>heavy task</button>
      <button style={{cursor:'pointer'}} onClick={()=>setTheme(prev => prev=='day'?'night':'day')}>theme toggle</button>
      <div style={{height:'5rem', backgroundColor: theme=="night" ? "black" : theme=="day"? "yellow":""}}></div>
    </div>
  )
}

export default HeavyTask
