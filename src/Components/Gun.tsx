// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRotate } from '@fortawesome/free-solid-svg-icons';
import {useCallback, useState} from 'react'
import "../Styles/gun.css"
function Gun() {
    const [debounceInput, setDebounceInput] = useState("");
    const [throttleInput, setThrottleInput] = useState("");
    let speed = 0.0005;
    function debounce(fn:Function, span=1000){
        let timerId = 0;
        return (...args:any[]) => {
            if(timerId)
                clearTimeout(timerId);
            timerId = setTimeout(()=>fn(...args), span);
        }
    }
    const throttle = (fn:Function, span=1000)=>{
        let timerId = 0;
        let lastFn=0;
        return (...args:any[]) => {
            if(Date.now()-lastFn>span){
                fn(...args);
                lastFn = Date.now();
                timerId = setTimeout(()=>{}, span);
            }
            else{
                clearTimeout(timerId);
                timerId = setTimeout(()=>{
                    fn(...args);
                    lastFn = Date.now();
                }, span-(Date.now()-lastFn))
            }
    
        }
    }
    function reload(){
        const bullets = [...document.querySelectorAll('.bullet')];
        if(bullets.length <6){
            
        }
    }
    function fire(lastFn:number) {
        const bullet = document.querySelector('.bullet');
        const bulletRect = bullet?.getBoundingClientRect();
        if(bullet && bulletRect){
            const {left, width} = bulletRect;
            if(left+width >= window.innerWidth-5){
                (document.querySelector('.gunCont') as HTMLDivElement).removeChild(bullet);
                return ;
            }
            (bullet as HTMLDivElement).style.left = `${(left+speed*(Date.now()-lastFn))}px`
            lastFn = Date.now();
            requestAnimationFrame(()=>fire(lastFn));
        }
    }
    function handleDebounceChange(e){
        setDebounceInput(e.target.value)
    }
    function handleThrottleChange(e){
        setThrottleInput(e.target.value)
    }
    const throttleFunction = useCallback(throttle(handleThrottleChange),[])
    return (
        <div className="gunCont">
            {/*<div className="gun">
            </div>
            <div className='triggerCont'>
                <div className="trigger" onClick={()=>fire(Date.now())}></div>
            </div>
            <div className="bullet"></div>
            <FontAwesomeIcon className="reload" icon={faRotate} onClick={reload} />*/}
            <div>
                <input onChange={debounce(handleDebounceChange,500)} onFocus={()=>console.log('debounce begins')}/>
                <p>{debounceInput}</p>
            </div>
            <div>
                <input onChange={throttleFunction} onFocus={()=>console.log('throttle begins')}/>
                <p>{throttleInput}</p>
            </div>
        </div>
    )
}

export default Gun
