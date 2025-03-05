import {useState, useMemo} from 'react'

function Accordion({accordionData={profile: {
  name: 'lakshman',
  age: 28,
  motherTongue: 'telugu',
  state: 'Andhra Pradesh'
},
education: {
  Intermediate: 'MPC',
  undergrad: 'engineering',
},
hobbies: {
  timepass: 'watching tv',
  passion: 'technology',
  curiosity: 'science'
}
}}) {
    const [data] = useState(accordionData)
    const keys = useMemo(()=>Object.keys(data) as Array<keyof typeof data>,[data]);
    const [key, setKey] = useState< "" | keyof typeof data>("");
  return (
    <div >
      Accordion
        {keys.map(title => (<div key={title} style={{margin:'auto', border:'1px solid black', width:'350px'}}>
            <div onClick={()=>{key===title ? setKey("") : setKey(title)}} style={{backgroundColor:'olivedrab', padding:'5px', cursor:'pointer'}}>
              <span>{title}</span>
              {key== title? <span style={{float:'right'}}>🔼</span> : <span  style={{float:'right', cursor:'pointer'}}>🔽</span>}
            </div>
            { key==title && <div style={{margin:'5px'}}>
              {Object.keys(data[title]).map(key => <span key={key} style={{display:'block'}}><strong>{key}:</strong> {data[title][key as keyof typeof data[typeof title]]}</span>)}
            </div> }
        </div>)
        )}
    </div>
  )
}

export default Accordion
