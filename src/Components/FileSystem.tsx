import {Dispatch, MouseEvent, SetStateAction, useState} from 'react'
import { FileType } from "../Pages/FolderPage"

function FileSystem({data, level=1, setActiveItems, setActiveItem}:{data:FileType, level?:number, setActiveItems:Dispatch<SetStateAction<FileType[]>>, setActiveItem:Dispatch<SetStateAction<FileType | undefined>>}) {
    const [folderOpen, setFolderOpen] = useState(false);
    function displayContent(e:MouseEvent){
        e.stopPropagation();
        if(!data.isFolder && data.content!==undefined)
            setActiveItem(data);
    }
    return (
        <div style={{marginLeft: '1rem', width:`${(20-level)}vw`}} onClick={displayContent}>
            <header onClick={()=>setFolderOpen(prev => !prev)} style={{userSelect:'none', cursor:'pointer', border:'1px solid black', margin:'5px', padding:'5px', }}> {data.isFolder ? (folderOpen ? '📂' :'📁') : '🗄️'} <strong>{data.name}</strong>{ data.isFolder && ( folderOpen ?  <span style={{float:'right', userSelect:'none'}}>🔽</span> : <span style={{float:'right', userSelect:'none'}}>▶️</span>) }</header>
            
            {data.isFolder && folderOpen && data.items!=undefined && data.items.map((item, index) => <FileSystem key={index} data={item} level={level+1} setActiveItems={setActiveItems} setActiveItem={setActiveItem}/>)}
        </div>
    )
}

export default FileSystem
