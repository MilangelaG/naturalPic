import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FavoritosPage from '../pages/FavoritosPage'
import NotFound from '../pages/NotFound'


const AppRouter = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='favoritos' element={<FavoritosPage />} />
      <Route path='*' element={<NotFound />} />
      

    </Routes>
    </div>
  )
}

export default AppRouter