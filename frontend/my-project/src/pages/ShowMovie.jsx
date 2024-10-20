import { useState, useEffect, React } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
function ShowMovie() {
  const [movie, setMovie] = useState([])
  const { id } = useParams()
  // console.log(id);
  //fetch that shitty movie from id
  //wth... 
  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      setMovie(res.data.data)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
  return (
    <div>

      <BackButton />
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Movie ID: </span>
        {movie._id}
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Movie Name: </span>
        {movie.name}
        </div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Movie Year: </span>
        {movie.year}
        </div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Movie Review: </span>
        {movie.review}</div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Movie Score: </span>
        {movie.score}
        </div>
    </div>
  )
}

      export default ShowMovie
