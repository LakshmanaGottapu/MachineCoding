import { useEffect, useState, useRef } from "react"
import './table.css'
const URL = 'https://dummyjson.com/products';
function Pages() {
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const totalItemsRef = useRef(0);
    async function getData() {
        const skip = (currentPage - 1) * limit
        const response = await fetch(URL + `?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        setTableData(data.products);
    }
    useEffect(()=>{
        //api request to find total count of products
        totalItemsRef.current = 100;
    },[])
    useEffect(() => {
        getData();
    }, [currentPage])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>category</th>
                        <th>price</th>
                        <th>brand</th>
                        <th>weight</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(product => {
                        const { id, title, category, price, brand, weight } = product
                        return (
                            <tr key={id}>
                                <td>{title}</td>
                                <td>{category}</td>
                                <td>{price}</td>
                                <td>{brand}</td>
                                <td>{weight}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <select name="" id="" value={limit} 
                    onChange={(e) => {
                        if(e.target)
                        setLimit(Number((e.target as HTMLSelectElement).value))
                      }
                    }
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
                <div style={{display:'flex', float:'left'}}>
                    {
                        (()=>{
                            const pageCount = totalItemsRef.current/limit
                            const arr = [];
                            for(let i=1; i<=pageCount; i++){
                                arr.push(<div style={{cursor:'pointer', border:'1px solid black', padding:'5px'}} key={i}
                                    onClick={()=>{
                                        if(i!==currentPage)
                                            setCurrentPage(i);
                                    }}
                                >{i}</div>)
                            }
                            return arr
                        })()
                    }
                </div>
            </div>
        </div>
    )
}

export default Pages
