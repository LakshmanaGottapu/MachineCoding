import {forwardRef} from 'react';

const MouseTracker = forwardRef((props, ref: React.ForwardedRef<HTMLDivElement|null>) => 
  (
    <div ref={ref} className='draggable' style={{height:'5rem', width:'5rem', borderRadius:'50%', backgroundColor:'red', position:'absolute', zIndex:-10 }} 
    >
    </div>
  )
)

export default MouseTracker

