import {useState, useRef, useMemo, useEffect} from 'react';
import './table.css'
const URL = 'https://dummyjson.com/products';
function ClientPagination() {
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const totalItemsRef = useRef(0);
    async function getTotalData() {
        const response = await fetch(`${URL}?limit=${300}`);
        const data = await response.json();
        totalItemsRef.current = data.products.length;
        setTableData(data.products);
    }

    const paginatedData = useMemo(()=>{
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        return tableData.slice(startIndex, endIndex)
    },[tableData, currentPage, limit])

    useEffect(() => {
        getTotalData();
    }, [])

    return (
        <div style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1>ClientPagination</h1>
            <div style={{ height: '75vh', width:'90vw', overflow: 'scroll', backgroundColor: 'lightgray', padding:'1rem' }}>
                <table style={{ height: '75vh', width:'90vw', overflow: 'scroll', backgroundColor: 'lightgray' }}>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>category</th>
                            <th>price</th>
                            <th>brand</th>
                            <th>weight</th>
                        </tr>
                    </thead>
                    <tbody >
                        {paginatedData.map(product => {
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

            </div>
            <div>
                <select name="" id="" value={limit}
                    onChange={(e) => {
                        if (e.target) {
                            setCurrentPage(1);
                            setLimit(Number((e.target as HTMLSelectElement).value))
                        }
                    }
                    }
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
                <div style={{ display: 'flex', float: 'left' }}>
                    {/* {
                        (() => {
                            const pageCount = totalItemsRef.current / limit
                            const arr = [];
                            for (let i = 1; i <= pageCount; i++) {
                                arr.push(<div style={{ cursor: 'pointer', border: i == currentPage ? '2px solid black' : '1px solid black', padding: '5px', backgroundColor: i == currentPage ? 'gray' : '' }} key={i}
                                    onClick={() => {
                                        if (i !== currentPage)
                                            setCurrentPage(i);
                                    }}
                                >{i}</div>)
                            }
                            return arr
                        })()
                    } */}
                    {
                        new Array(Math.ceil(totalItemsRef.current/limit)).fill(1).map((_, i) => <div style={{ cursor: 'pointer', border: (i+1) == currentPage ? '2px solid black' : '1px solid black', padding: '5px', backgroundColor: i+1 == currentPage ? 'gray' : '' }} key={i+1}
                        onClick={() => {
                            if (i+1 !== currentPage)
                                setCurrentPage(i+1);
                        }}
                    >{i+1}</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ClientPagination
