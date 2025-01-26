// import React from 'react'

function EventPage() {
  return (
    <div>
      <div className="parent" tabIndex={0}
      style={{backgroundColor:'lightgray', padding:'2rem'}}
      onFocus={()=>console.log('parent')}
      >
        <div className="child"
        style={{backgroundColor:'red', padding:'1rem', cursor:'pointer'}}
        onFocus={()=>console.log('child')}
        ></div>
      </div> <br/>
      {/* <div className="parent" tabIndex={0}
      style={{backgroundColor:'lightgray', padding:'2rem'}}
      onClickCapture={()=>console.log('parent')}
      >
        <div className="child" tabIndex={0}
        style={{backgroundColor:'red', padding:'1rem', cursor:'pointer'}}
        onClick={()=>console.log('child')}
        ></div>
      </div> */}
    </div>
  )
}

export default EventPage
