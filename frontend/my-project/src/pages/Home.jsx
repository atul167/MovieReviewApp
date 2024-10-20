import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then((res) => {
                setMovie(res.data.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    return (
        <div flex flex-col justify-center align-center>
            <Link to={'/create'} className='bg-sky-800 text-white px-4 py-1 rounded-lg mb-[20px]'>Create Review </Link>
            {/* Pls center this link and adjust height god help me!! */}
            {movie.map((m, index) => (
                <div key={index} justify-center align-center py-2>
                    {/* very important => !! key to be added for each movie !! */}
                    <p className=' border border-blue-400 text-3xl text-center'>{index + 1}. {m.name}</p>
                    <p className=' border border-blue-400 text-3xl text-center'>{m.year}</p>
                    <div className='flex justify-center gap-[10px] '>
                        <div className='bg-blue-400'><Link to={`/show/${m._id}`}>Show Review</Link></div>
                        <div className='bg-purple-400'> <Link to={`/update/${m._id}`}>Update Review</Link></div>
                    </div>
                </div>)
            )}
        </div>
    )
}

export default Home
