import {useState, useEffect} from 'react';
import FileSystem from '../Components/FileSystem';
import './vscode.css';
export type FileType = {
    id:number, name: string, items?: FileType[], isFolder: boolean, content?: string
}

function FolderPage() {
    const [fileContent, setFileContent] = useState('');
    const [activeItem, setActiveItem] = useState<FileType>();
    const [showDashboard, setShowDashboard] = useState(false);
    const [activeItems, setActiveItems] = useState<FileType[]>([]);
    const [data, setData] = useState<FileType>({
        id:1,
        name: 'machinecoding',
        isFolder: true,
        items: [
            {
                id:2,
                name: 'src', 
                isFolder: true,
                items: [
                    {
                        id:8,
                        name:'random',
                        isFolder: true,
                        items:[
                            {
                                id:3,
                                name: 'names.txt',
                                isFolder: false,
                                content: 'lakshman, chaithanya, premchand, saikumar'
                            }
                        ]
                    },
                    {
                        id:4,
                        name: 'phonenumbers.txt',
                        isFolder: false,
                        content: '8309951482, 8919940485, 8372836019, 8374042584, 7981812142'
                    },
                    {
                        id:5,
                        name: 'code.js',
                        isFolder: false,
                        content: 'java, javascript, c, c++, c#, python, golang'    
                    }
                ]
            }, 
            {
                id:6,
                name: 'package.json',
                isFolder: false,
                content: 'react: 19'            
            },
            {
                id:7,
                name: 'package-lock.json',
                isFolder: false,
                content: 'vite: 1.2'          
            }
        ]
    })
    function handleFileInput(){
        if(activeItem !==undefined){
            activeItem.content = fileContent;
            setData({...data});
        }
    }
    function findNode(data:FileType, id:number):FileType | undefined{
        if(data.id == id) return data;
        else if(data.isFolder && data.items!==undefined){
            for(let i=0; i<data.items.length; i++){
                const node = findNode(data.items[i], id)
                if(node)
                    return node;
            }
        }
    }
    useEffect(()=>{
        if(activeItem && activeItem.content)
            setFileContent(activeItem.content)
        setActiveItems(prev => {
            if(activeItem == undefined)
                return [];
            else {
                if(prev.indexOf(activeItem) < 0){
                    prev.push(activeItem);
                }
                return [...prev];
            }
        })
    },[activeItem])
    return (
        <section style={{height: '90vh', display:"flex", border:'1px solid black', padding:'5px', margin:'5px'}}>
            <section style={{width:'3rem', border:'1px solid black', display:'flex', flexDirection:'column'}}>
                <span style={{cursor:'pointer', padding:'0.4rem', userSelect:'none'}} onDoubleClick={()=>setShowDashboard(prev => !prev)}>🗃️</span>
            </section>
            {showDashboard && <aside style={{width:'20vw', borderRight:'2px solid black', paddingRight:'1vw'}}>
                <FileSystem data={data} setActiveItems={setActiveItems} setActiveItem={setActiveItem}/>
            </aside>}
            <section style={{minWidth: '70vw', marginLeft:'1rem'}}>
                <nav style={{width:'70vw', display:'flex'}}>
                    { activeItems.map(item => <nav className="item" onClick={()=>setActiveItem(item)} style={{border:'1px solid black', backgroundColor:item==activeItem ? 'lightgray' : '' }} >{item.name}</nav>) }
                </nav>
                <textarea name="" id="" cols={157} rows={46} onChange={(e)=>setFileContent(e.target.value)} value={fileContent} style={{padding:'15px'}} onBlur={handleFileInput}>
                </textarea>
            </section>
        </section>
    )
}

export default FolderPage;
