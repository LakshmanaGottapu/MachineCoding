import {useState, useRef} from 'react';
import FileSystem from '../Components/FileSystem';
export type FileType = {
    id:number, name: string, items?: FileType[], isFolder: boolean, content?: string
}


function FolderPage() {
    const [fileContent, setFileContent] = useState('');
    const displayIdRef = useRef(-1);
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
                                content: 'lakshman, saikumar, naveen, prasanth, chaithanya, veena, jyothi'
                            }
                        ]
                    },
                    {
                        id:4,
                        name: 'phonenumbers.txt',
                        isFolder: false,
                        content: '8309951482, 8372836019, 8374042584, 7981812142'
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
        if(displayIdRef.current > -1){
            const node = findNode(data, displayIdRef.current);
            if(node != undefined){
               node.content = fileContent;
               setData({...data})
            }
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
    return (<section style={{height: '90vh', display:"flex", border:'1px solid black', padding:'5px', margin:'5px'}}>
        <section style={{width:'20vw', borderRight:'2px solid black', paddingRight:'1vw'}}>
            <FileSystem data={data} setFileContent={setFileContent} displayIdRef={displayIdRef}/>
        </section>
        <section style={{ marginLeft:'1rem'}}>
            <textarea name="" id="" cols={157} rows={46} onChange={(e)=>setFileContent(e.target.value)} value={fileContent} style={{padding:'15px'}} onBlur={handleFileInput}>
            </textarea>
        </section>
    </section>
    )
}

export default FolderPage;
