import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'
import { weddingConfig } from '../data/wedding'

interface Props { onOpen: () => void }

// ── Luxury corner floral ──────────────────────────────────────────────────────
function LuxuryCornerFloral({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 192 Q20 160 40 130 Q65 95 95 65 Q130 30 192 8"
        stroke="#C6A46A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M8 192 Q30 175 55 165 Q80 155 100 140"
        stroke="#C6A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M192 8 Q175 30 165 55 Q155 80 140 100"
        stroke="#C6A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <circle cx="185" cy="15" r="10" fill="#C6A46A" opacity="0.85" />
      <circle cx="185" cy="15" r="7"  fill="#DFC08A" opacity="0.9" />
      <circle cx="185" cy="15" r="4"  fill="#F0E4CE" />
      <ellipse cx="185" cy="6"  rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(-15 185 6)" />
      <ellipse cx="194" cy="15" rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(75 194 15)" />
      <ellipse cx="185" cy="24" rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(165 185 24)" />
      <ellipse cx="176" cy="15" rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(-105 176 15)" />
      <circle cx="108" cy="92" r="8"   fill="#C6A46A" opacity="0.80" />
      <circle cx="108" cy="92" r="5.5" fill="#DFC08A" opacity="0.9" />
      <circle cx="108" cy="92" r="3"   fill="#F0E4CE" />
      <ellipse cx="108" cy="84"  rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(-10 108 84)" />
      <ellipse cx="116" cy="92"  rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(80 116 92)" />
      <ellipse cx="108" cy="100" rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(170 108 100)" />
      <ellipse cx="100" cy="92"  rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(-100 100 92)" />
      <circle cx="22" cy="178" r="6" fill="#C6A46A" opacity="0.75" />
      <circle cx="22" cy="178" r="4" fill="#DFC08A" opacity="0.85" />
      <circle cx="22" cy="178" r="2" fill="#F0E4CE" />
      <ellipse cx="55"  cy="145" rx="16" ry="8"   transform="rotate(-40 55 145)"  fill="#7A8669" opacity="0.60" />
      <ellipse cx="75"  cy="120" rx="14" ry="7"   transform="rotate(-55 75 120)"  fill="#7A8669" opacity="0.55" />
      <ellipse cx="100" cy="95"  rx="13" ry="6.5" transform="rotate(-65 100 95)"  fill="#7A8669" opacity="0.50" />
      <ellipse cx="130" cy="65"  rx="12" ry="6"   transform="rotate(-75 130 65)"  fill="#7A8669" opacity="0.50" />
      <ellipse cx="158" cy="40"  rx="11" ry="5.5" transform="rotate(-80 158 40)"  fill="#7A8669" opacity="0.45" />
      <ellipse cx="70"  cy="162" rx="12" ry="5.5" transform="rotate(-20 70 162)"  fill="#7A8669" opacity="0.50" />
      <ellipse cx="90"  cy="152" rx="11" ry="5"   transform="rotate(-30 90 152)"  fill="#7A8669" opacity="0.45" />
      <ellipse cx="152" cy="70"  rx="12" ry="5.5" transform="rotate(-70 152 70)"  fill="#7A8669" opacity="0.50" />
      <ellipse cx="162" cy="50"  rx="11" ry="5"   transform="rotate(-80 162 50)"  fill="#7A8669" opacity="0.45" />
      <circle cx="42"  cy="130" r="3.5" fill="#C6A46A" opacity="0.75" />
      <circle cx="62"  cy="108" r="3"   fill="#C6A46A" opacity="0.70" />
      <circle cx="85"  cy="82"  r="3"   fill="#C6A46A" opacity="0.70" />
      <circle cx="148" cy="48"  r="3"   fill="#C6A46A" opacity="0.65" />
      <circle cx="170" cy="28"  r="2.5" fill="#C6A46A" opacity="0.65" />
      <circle cx="30"  cy="165" r="2"   fill="#C6A46A" opacity="0.60" />
      <circle cx="165" cy="30"  r="2"   fill="#C6A46A" opacity="0.60" />
    </svg>
  )
}

// ── Ambient gold dust ─────────────────────────────────────────────────────────
const DUST = [
  { id:0,  x:8,  y:20, size:3, driftX:10,  dur:9,  delay:0   },
  { id:1,  x:18, y:55, size:2, driftX:-8,  dur:11, delay:1.2 },
  { id:2,  x:28, y:80, size:4, driftX:12,  dur:8,  delay:2.5 },
  { id:3,  x:72, y:15, size:2, driftX:-10, dur:10, delay:0.7 },
  { id:4,  x:82, y:70, size:3, driftX:8,   dur:12, delay:3.1 },
  { id:5,  x:92, y:40, size:2, driftX:-6,  dur:9,  delay:1.8 },
  { id:6,  x:50, y:10, size:3, driftX:14,  dur:10, delay:0.4 },
  { id:7,  x:60, y:88, size:2, driftX:-12, dur:11, delay:2.0 },
  { id:8,  x:38, y:35, size:4, driftX:9,   dur:8,  delay:4.0 },
  { id:9,  x:45, y:65, size:2, driftX:-7,  dur:13, delay:1.5 },
  { id:10, x:15, y:90, size:3, driftX:11,  dur:9,  delay:3.5 },
  { id:11, x:85, y:92, size:2, driftX:-9,  dur:10, delay:0.9 },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function InvitationReveal({ onOpen }: Props) {
  const { t, i18n } = useTranslation()
  // Two states only: idle (showing) and opening (exiting)
  const [opening, setOpening] = useState(false)
  const prefersReduced = useReducedMotion()
  const isTamil = i18n.language === 'ta'

  function handleOpen() {
    if (opening) return          // prevent double-click
    setOpening(true)
    // Wait for the exit animation to finish, then reveal the main page
    setTimeout(onOpen, prefersReduced ? 0 : 420)
  }

  return (
    <AnimatePresence>
      {!opening && (
        <motion.div
          key="reveal-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden reveal-bg"
          // Entry: fade + gentle rise from below
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          // Exit: gentle scale-up + fade — the only animation on click
          exit={{
            opacity: 0,
            scale: prefersReduced ? 1 : 1.04,
            y: prefersReduced ? 0 : -8,
          }}
          transition={{
            duration: prefersReduced ? 0.05 : 0.42,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {/* ── Background decorations (pointer-events:none) ── */}
          <div className="envelope-halo"       aria-hidden="true" />
          <div className="screen-vignette"     aria-hidden="true" />
          <div className="reveal-frame"        aria-hidden="true" />
          <div className="reveal-side-left"    aria-hidden="true" />
          <div className="reveal-side-right"   aria-hidden="true" />
          <div className="reveal-top-strip"    aria-hidden="true" />
          <div className="reveal-bottom-strip" aria-hidden="true" />

          {/* ── Botanical corners ── */}
          <LuxuryCornerFloral className="botanical-tl" />
          <LuxuryCornerFloral className="botanical-tr" />
          <LuxuryCornerFloral className="botanical-bl" />
          <LuxuryCornerFloral className="botanical-br" />

          {/* ── Ambient gold dust ── */}
          {!prefersReduced && DUST.map((d) => (
            <div key={d.id} className="gold-dust" aria-hidden="true" style={{
              left: d.x + '%', top: d.y + '%',
              width: d.size + 'px', height: d.size + 'px',
              '--dust-x':     d.driftX + 'px',
              '--dust-dur':   d.dur + 's',
              '--dust-delay': d.delay + 's',
            } as React.CSSProperties} />
          ))}

          {/* ── Language toggle ── */}
          <div className="absolute top-5 right-5 z-20">
            <LanguageToggle />
          </div>

          {/* ── Main content ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-5 px-6 text-center w-full max-w-sm z-10"
          >

            {/* Couple names — always visible on the front page */}
            <div className="flex flex-col items-center gap-1">
              <p className="label-caps text-champagne-deep tracking-[0.28em] mb-2">
                {t('hero.together')}
              </p>
              <span className={`text-brown leading-tight max-w-full break-words ${isTamil ? 'font-tamil font-serif text-2xl' : 'font-script text-3xl sm:text-4xl md:text-5xl'}`}>
                {t('hero.groomName')}
              </span>
              <span className="font-serif text-xs sm:text-sm text-champagne-deep leading-snug">
                {weddingConfig.couple.groom.qualification}
              </span>
              <span className="font-serif italic text-champagne text-2xl leading-none py-0.5">
                &amp;
              </span>
              <span className={`text-brown leading-tight max-w-full break-words ${isTamil ? 'font-tamil font-serif text-2xl' : 'font-script text-3xl sm:text-4xl md:text-5xl'}`}>
                {t('hero.brideName')}
              </span>
              <span className="font-serif text-xs sm:text-sm text-champagne-deep leading-snug">
                {weddingConfig.couple.bride.qualification}
              </span>
            </div>

            {/* Gold rule */}
            <div className="flex items-center gap-3 w-44">
              <div className="flex-1 h-px bg-champagne opacity-60" />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M5 0L6.25 3.75L10 5L6.25 6.25L5 10L3.75 6.25L0 5L3.75 3.75Z"
                  fill="#C6A46A" opacity="0.85" />
              </svg>
              <div className="flex-1 h-px bg-champagne opacity-60" />
            </div>

            {/* Envelope — floats gently, clickable */}
            <div
              className="relative envelope-wrapper animate-float"
              onClick={handleOpen}
              style={{ cursor: 'pointer' }}
              role="button"
              aria-label={t('envelope.openInvitation')}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen() }}
            >
              {/* Envelope body */}
              <div className="envelope-body">
                <div className="envelope-bottom" />
                <div className="envelope-left" />
                <div className="envelope-right" />
                {/* Flap — static, closed */}
                <div className="envelope-flap" />
              </div>

              {/* Wax seal */}
              <div className="envelope-seal">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleOpen() }}
                  aria-label={t('envelope.openInvitation')}
                  className="
                    w-[76px] h-[76px] rounded-full
                    bg-champagne hover:bg-champagne-deep
                    text-ivory font-sans tracking-wider uppercase
                    flex flex-col items-center justify-center gap-0.5
                    animate-seal-pulse transition-colors duration-300
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-champagne focus-visible:ring-offset-2
                  "
                  style={{ boxShadow: '0 4px 18px rgba(198,164,106,0.45)' }}
                >
                  <span className="font-script text-lg leading-none">
                    {t('envelope.monogram')}
                  </span>
                  <span className="text-[8px] tracking-widest opacity-80 leading-none">
                    {t('envelope.clickToOpen')}
                  </span>
                </button>
              </div>
            </div>

            {/* Awaits text + open button */}
            <div className="flex flex-col items-center gap-3 mt-1">
              <p className="font-serif italic text-brown/50 text-sm max-w-[260px] leading-relaxed">
                {t('envelope.awaits')}
              </p>
              <button
                type="button"
                onClick={handleOpen}
                className="btn-gold text-xs"
                aria-label={t('envelope.openButton')}
              >
                {t('envelope.openButton')}
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
