import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import InvitationPage from './pages/InvitationPage'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import { isDashboardAuthenticated } from './data/wedding'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  return isDashboardAuthenticated() ? <>{children}</> : <Navigate to="/admin" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvitationPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        {/* Catch-all: redirect unknown paths to invitation */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
