import { Route, Routes } from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import Registr from '../src/pages/Registr/Registr'
import MainPage from '../src/pages/MainPage/MainPage'
import { NotFound } from '../src/pages/Not-found/index'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registr" element={<Registr />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
