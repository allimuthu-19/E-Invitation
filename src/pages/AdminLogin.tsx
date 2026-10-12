import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dashboardLogin } from '../data/wedding'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (dashboardLogin(password)) {
      navigate('/dashboard')
    } else {
      setError('Invalid password.')
    }
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="card-luxury w-full max-w-sm">
        <h1 className="font-serif text-2xl text-brown text-center mb-6">Organizer Login</h1>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-brown/60 tracking-widest uppercase mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-champagne-pale rounded-lg px-3 py-2 focus:outline-none focus:border-champagne font-sans text-sm text-brown"
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button type="submit" className="btn-gold w-full justify-center">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
