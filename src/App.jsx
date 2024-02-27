import { Fragment } from 'react'
import HomePage from './pages/HomePage'
import './App.css'
import BookApi from './Components/BookApi/BookApi'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/page/:id' element={<BookApi />} />
      </Routes>
    </Fragment>
  )
}

export default App
