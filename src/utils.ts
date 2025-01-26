export function debounce(fn:Function, span=1000){
    let timerId = 0;
    return (...args:any[]) => {
        if(timerId)
            clearTimeout(timerId);
        timerId = setTimeout(()=>fn(...args), span);
    }
}

export function throttle(fn:Function, span=1000){
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