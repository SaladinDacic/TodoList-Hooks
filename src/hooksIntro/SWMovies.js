import React, {useState, useEffect} from 'react';
import axios from "axios";

function SWMovies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("")
    const nums = [1,2,3,4,5,6]

    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://swapi.dev/api/films/${number}`)
            setMovie(response.data)
        }
        getData();
    }, [number])
    return (
        <div>
            <h1>You chooze movie number {number}</h1>
            <h1>{movie.title}</h1>
            <select value={number} onChange={e=>setNumber(e.target.value)}>
                {nums.map((val,i)=>(
                    <option key={i}>{val}</option>
                ))}
            </select>
        </div>
    )
}

export default SWMovies
