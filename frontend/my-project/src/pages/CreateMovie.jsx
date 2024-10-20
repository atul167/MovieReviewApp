import React from 'react'
import { useState,useEffect } from 'react'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'
function CreateMovie() {
  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [review, setReview] = useState("")
  const [score, setScore] = useState("")
  const navigate = useNavigate()
  const handler = () => {
    const data = { name, year, review, score }
    // damn passed data in body yay!! lets go!!
    axios.post('http://localhost:3000/movies', data)
    .then(() => {
      navigate('/');
    }).catch((e)=>{
      console.log(e);
    })
  }
  return (
    <div className='p-4'>
      <BackButton className='mb-4'/>
      <div className='flex flex-col border-2 solid border-sky-400 mt-2 ounded-xl mx-auto items-center'>
        <div className='my-4'>
          <input
            type="text"
            className='border-2 border-sky-400 rounded-xl p-1'
            placeholder='Name'
            onChange={(e)=>{setName(e.target.value)}}
            value={name}  
          />
        </div>
        <div className='my-4'>
          <input
            type="text"
            className='border-2 border-sky-400 rounded-xl p-1'
            placeholder='Year movie came out'
            onChange={(e)=>{setYear(e.target.value)}}
            value={year}  
          />
        </div>
        <div className='my-4'>
          <input
            type="text"
            className='border-2 border-sky-400 rounded-xl p-1'
            placeholder='Review'
            onChange={(e)=>{setReview(e.target.value)}}
            value={review}  
          />
        </div>
        <div className='my-4'>
          <input
            type="text"
            className='border-2 border-sky-400 rounded-xl p-1'
            placeholder='Score'
            onChange={(e)=>{setScore(e.target.value)}}
            value={score}  
          />
        </div>
        <div className='my-4'>
          <button
            className='bgj-sky-800 text-white bg-[#3b82f6] px-4 py-1 rounded-lg w-fit'
            onClick={handler}
          >
            Create Movie
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateMovie
