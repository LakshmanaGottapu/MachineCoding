import {useEffect, useState, useMemo} from 'react'
import './ScrollAnimator.css'
type SectionDataType = {
    id: number, title:string, description:string
}
const ScrollAnimator = () => {
    const ib = useMemo(() => new IntersectionObserver((entries)=>{
        console.log(entries);
        entries.forEach(entry => {
                if(entry.isIntersecting)
                    (entry.target as HTMLDivElement).children[0].classList.add('active');
                else 
                    (entry.target as HTMLDivElement).children[0].classList.remove('active');
            }
        )
    }, {threshold: 0.5}), [])

    const staticData:SectionDataType[] = [
        {
            id: 1, title: 'Execution Context', description:'Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an abstract concept that hold info about the env. within the current code is being executed.'
        },
        {
            id: 2, title: 'Execution Context', description:'Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an abstract concept that hold info about the env. within the current code is being executed.'
        },
        {
            id: 3, title: 'Execution Context', description:'Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an abstract concept that hold info about the env. within the current code is being executed.'
        },
        {
            id: 4, title: 'Execution Context', description:'Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an abstract concept that hold info about the env. within the current code is being executed.'
        },
        {
            id: 5, title: 'Execution Context', description:'Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an abstract concept that hold info about the env. within the current code is being executed.'
        }        
    ]
    const [data, setData] = useState<SectionDataType[]>(staticData);
    useEffect(()=>{
        setData(staticData);
        const elements = document.querySelectorAll('.section')
        elements.forEach(element => ib.observe(element))
    }, [])
  return (
    <div className='container' style={{height: '100vh'}}>
        {data.map(section => <div key={section.id} className='section'>
            <div className="content">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
            </div>
        </div>)}
    </div>
  )
}

export default ScrollAnimator
