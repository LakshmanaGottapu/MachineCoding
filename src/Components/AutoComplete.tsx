import { useState, useEffect, useRef } from 'react';
import './autocomplete.css'
const URL = 'https://dummyjson.com/recipes/search?q='
interface RecipeInterface {
    id: number, name: string
}
function AutoComplete() {
    const [searchResults, setSearchResults] = useState<RecipeInterface[]>([]);
    const [input, setInput] = useState("");
    const [displayResults, setDisplayResults] = useState(false);
    const cache = useRef<Record<string, RecipeInterface[]>>({});
    const fetchResults = async () => {
        if (cache.current[input]) {
            return setSearchResults(cache.current[input])
        }
        if (input.trim() !== "") {
            const response = await fetch(`${URL}${input}`);
            const results = await response.json();
            cache.current[input] = results.recipes
            setSearchResults(results.recipes);
        }
    }
    useEffect(() => {
        const timer = setTimeout(fetchResults, 400);
        return () => { clearTimeout(timer) };
    }, [input])
    return (
        <div>
            <h1>AutoComplete</h1>
            <input className="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setDisplayResults(true)} onBlur={() => setDisplayResults(false)} />
            {displayResults && searchResults.length !== 0 && <div className='results-container'>
                {searchResults.map(({ id, name }) => <span className='result' key={id}>{name}</span>)}
            </div>}
        </div>
    )
}

export default AutoComplete
