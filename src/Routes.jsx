import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Registr from './pages/registr/Registr'
import MainPage from './pages/main/MainPage'
import PlayOfDay from './pages/play-of-day/Category'
import { ProtectedRoute } from './protected-route/ProtectedRoute'
import MyPlaylist from './pages/favorites/MyPlaylist'
import NotFound from '../src/pages/not-found/NotFound'

export function RoutesApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Favorites"
        element={
          <ProtectedRoute>
            <MyPlaylist />
          </ProtectedRoute>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registr" element={<Registr />} />
      <Route
        path="/Category/:id"
        element={
          <ProtectedRoute>
            <PlayOfDay />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
