import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { weddingConfig } from '../data/wedding'

// Parse the wedding date once at module load.
// weddingConfig.weddingDateISO is '2026-11-22T00:00:00+05:30' (IST midnight).
// Update that string to the exact ceremony time when confirmed.
const TARGET = new Date(weddingConfig.weddingDateISO)

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now()
  if (!isFinite(diff) || diff <= 0) return null
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

export default function CountdownTimer() {
  const { t } = useTranslation()
  const [time, setTime] = useState(getTimeLeft)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const next = getTimeLeft()
      setTime(next)
      if (!next && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, 1_000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  if (!time) {
    return (
      <div className="text-center py-4">
        <p className="font-script text-4xl text-champagne">{t('countdown.arrived')}</p>
      </div>
    )
  }

  const units = [
    { label: t('countdown.days'), value: time.days },
    { label: t('countdown.hours'), value: time.hours },
    { label: t('countdown.minutes'), value: time.minutes },
    { label: t('countdown.seconds'), value: time.seconds },
  ]

  return (
    <div className="text-center">
      <p className="label-caps text-champagne-deep mb-8">{t('countdown.title')}</p>
      <div className="flex justify-center gap-3 md:gap-5">
        {units.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-3 md:gap-5">
            <div className="countdown-card">
              <span className="font-serif text-4xl md:text-5xl text-brown tabular-nums leading-none">
                {String(value).padStart(2, '0')}
              </span>
              <span className="label-caps mt-2 text-[10px]">{label}</span>
            </div>
            {i < units.length - 1 && (
              <span className="font-serif text-2xl text-champagne opacity-80 mb-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
