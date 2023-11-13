import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Registr from './components/Registr/Registr'
import MainPage from './components/MainPage/MainPage'
import { NotFound } from './components/Not-found'

export function RoutesApp() {
  return (
  <Routes>
<Route path='/' element = {<MainPage/>}/>
<Route path='/Login' element= {<Login/>}/>
<Route path='/Registr' element= {<Registr/>}/>
<Route path='*' element= {<NotFound/>}/>
  </Routes>
  )
}
