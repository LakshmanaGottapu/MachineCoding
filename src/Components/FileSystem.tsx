import {Dispatch, MouseEvent, SetStateAction, useState, MutableRefObject} from 'react'
import { FileType } from "../Pages/FolderPage"

function FileSystem({data, level=1, setFileContent, displayIdRef}:{data:FileType, level?:number, setFileContent:Dispatch<SetStateAction<string>>, displayIdRef:MutableRefObject<number>}) {
    const [folderOpen, setFolderOpen] = useState(false);
    function displayContent(e:MouseEvent){
        e.stopPropagation();
        if(!data.isFolder && data.content!==undefined){
            displayIdRef.current = data.id
            setFileContent(data.content)
        }
    }
    return (
        <div style={{marginLeft: '1rem', width:`${(20-level)}vw`}} onClick={displayContent}>
            <header onClick={()=>setFolderOpen(prev => !prev)} style={{cursor:'pointer', border:'1px solid black', margin:'5px', padding:'5px', }}> {data.isFolder ? (folderOpen ? '📂' :'📁') : '🗄️'} <strong>{data.name}</strong>{ data.isFolder && ( folderOpen ?  <span style={{float:'right'}}>🔽</span> : <span style={{float:'right'}}>▶️</span>) }</header>
            
            {data.isFolder && folderOpen && data.items!=undefined && data.items.map((item, index) => <FileSystem key={index} data={item} level={level+1} setFileContent={setFileContent} displayIdRef={displayIdRef}/>)}
        </div>
    )
}

export default FileSystem
