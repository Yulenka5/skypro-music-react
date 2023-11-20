import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Logine'
import Registr from './pages/registr/Register'
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
        path="/favorites"
        element={
          <ProtectedRoute>
            <MyPlaylist />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/registr" element={<Registr />} />
      <Route
        path="/category/:id"
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
