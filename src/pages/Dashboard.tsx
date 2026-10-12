import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isDashboardAuthenticated, dashboardLogout, weddingConfig } from '../data/wedding'

export default function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isDashboardAuthenticated()) navigate('/admin')
  }, [navigate])

  function logout() {
    dashboardLogout()
    navigate('/admin')
  }

  const { couple, events } = weddingConfig

  return (
    <div className="min-h-screen bg-ivory">
      <nav className="bg-brown px-6 py-4 flex justify-between items-center">
        <h1 className="font-serif text-champagne-pale text-xl">Wedding Dashboard</h1>
        <button
          onClick={logout}
          className="text-champagne text-sm hover:text-champagne-light font-sans tracking-wide"
        >
          Sign Out
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* Couple */}
        <div className="card-luxury">
          <h2 className="font-serif text-xl text-brown mb-4">The Couple</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm font-sans text-brown/70">
            <div>
              <p className="label-caps text-champagne-deep mb-1">Groom</p>
              <p className="font-serif text-brown text-base">{couple.groom.nameEn}</p>
              <p className="text-xs mt-0.5">{couple.groom.parentEn}</p>
            </div>
            <div>
              <p className="label-caps text-champagne-deep mb-1">Bride</p>
              <p className="font-serif text-brown text-base">{couple.bride.nameEn}</p>
              <p className="text-xs mt-0.5">{couple.bride.parentEn}</p>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="card-luxury">
          <h2 className="font-serif text-xl text-brown mb-4">Events</h2>
          <div className="space-y-4">
            {events.map((ev) => (
              <div key={ev.key} className="border-b border-champagne-pale pb-4 last:border-0 last:pb-0">
                <p className="label-caps text-champagne-deep mb-1">{ev.nameEn}</p>
                <p className="font-serif text-brown">{ev.dateEn}</p>
                {ev.venueEn && <p className="text-xs font-sans text-brown/50 mt-0.5">{ev.venueEn}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Config note */}
        <div className="border border-champagne-pale rounded-xl p-4 text-xs font-sans text-brown/50 bg-blush/30">
          <strong className="text-brown/70">To update wedding details</strong> — edit{' '}
          <code className="bg-champagne-pale px-1 rounded">src/data/wedding.ts</code>. No database
          or backend required.
        </div>
      </div>
    </div>
  )
}
