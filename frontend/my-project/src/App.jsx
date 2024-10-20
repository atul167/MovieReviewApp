import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Update from './pages/Update.jsx'
import ShowMovie from './pages/ShowMovie.jsx'
import Delete from './pages/Delete.jsx'
import CreateMovie from './pages/CreateMovie.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/show/:id" element={<ShowMovie />} />
        <Route path="/delete/:id" element={<Delete />} />

    </Routes>
    </>
  )
}

export default App
