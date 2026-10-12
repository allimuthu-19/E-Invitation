import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import InvitationReveal from '../components/InvitationReveal'
import CountdownTimer from '../components/CountdownTimer'
import LanguageToggle from '../components/LanguageToggle'
import { weddingConfig } from '../data/wedding'
import couplePhoto from '../assets/mithun-gopika.jpeg'

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
const stagger = { show: { transition: { staggerChildren: 0.15 } } }

// ── Rich luxury corner floral SVG ────────────────────────────────────────────
function LuxuryCornerFloral({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 192 Q20 160 40 130 Q65 95 95 65 Q130 30 192 8" stroke="#C6A46A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M8 192 Q30 175 55 165 Q80 155 100 140" stroke="#C6A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M192 8 Q175 30 165 55 Q155 80 140 100" stroke="#C6A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Large rose */}
      <circle cx="185" cy="15" r="10" fill="#C6A46A" opacity="0.85" />
      <circle cx="185" cy="15" r="7"  fill="#DFC08A" opacity="0.9" />
      <circle cx="185" cy="15" r="4"  fill="#F0E4CE" />
      <ellipse cx="185" cy="6"  rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(-15 185 6)" />
      <ellipse cx="194" cy="15" rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(75 194 15)" />
      <ellipse cx="185" cy="24" rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(165 185 24)" />
      <ellipse cx="176" cy="15" rx="5" ry="3.5" fill="#C6A46A" opacity="0.65" transform="rotate(-105 176 15)" />
      {/* Medium rose */}
      <circle cx="108" cy="92" r="8"  fill="#C6A46A" opacity="0.80" />
      <circle cx="108" cy="92" r="5.5" fill="#DFC08A" opacity="0.9" />
      <circle cx="108" cy="92" r="3"  fill="#F0E4CE" />
      <ellipse cx="108" cy="84" rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(-10 108 84)" />
      <ellipse cx="116" cy="92" rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(80 116 92)" />
      <ellipse cx="108" cy="100" rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(170 108 100)" />
      <ellipse cx="100" cy="92" rx="4" ry="3" fill="#C6A46A" opacity="0.60" transform="rotate(-100 100 92)" />
      {/* Small rose */}
      <circle cx="22" cy="178" r="6"  fill="#C6A46A" opacity="0.75" />
      <circle cx="22" cy="178" r="4"  fill="#DFC08A" opacity="0.85" />
      <circle cx="22" cy="178" r="2"  fill="#F0E4CE" />
      {/* Leaves */}
      <ellipse cx="55"  cy="145" rx="16" ry="8"  transform="rotate(-40 55 145)"  fill="#7A8669" opacity="0.60" />
      <ellipse cx="75"  cy="120" rx="14" ry="7"  transform="rotate(-55 75 120)"  fill="#7A8669" opacity="0.55" />
      <ellipse cx="100" cy="95"  rx="13" ry="6.5" transform="rotate(-65 100 95)" fill="#7A8669" opacity="0.50" />
      <ellipse cx="130" cy="65"  rx="12" ry="6"  transform="rotate(-75 130 65)"  fill="#7A8669" opacity="0.50" />
      <ellipse cx="158" cy="40"  rx="11" ry="5.5" transform="rotate(-80 158 40)" fill="#7A8669" opacity="0.45" />
      <ellipse cx="70"  cy="162" rx="12" ry="5.5" transform="rotate(-20 70 162)"  fill="#7A8669" opacity="0.50" />
      <ellipse cx="90"  cy="152" rx="11" ry="5"   transform="rotate(-30 90 152)"  fill="#7A8669" opacity="0.45" />
      <ellipse cx="152" cy="70"  rx="12" ry="5.5" transform="rotate(-70 152 70)"  fill="#7A8669" opacity="0.50" />
      <ellipse cx="162" cy="50"  rx="11" ry="5"   transform="rotate(-80 162 50)"  fill="#7A8669" opacity="0.45" />
      {/* Buds */}
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

function GoldDiamond() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="#C6A46A" opacity="0.90" />
    </svg>
  )
}

function GoldDivider() {
  return (
    <div className="divider-gold">
      <GoldDiamond />
    </div>
  )
}

// ── Small corner floral for photo frame ─────────────────────────────────────
function SmallFloral({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 76 Q14 55 28 40 Q44 22 76 4"
        stroke="#C6A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="8"  r="6"   fill="#C6A46A" opacity="0.80" />
      <circle cx="72" cy="8"  r="3.5" fill="#DFC08A" opacity="0.90" />
      <circle cx="72" cy="8"  r="1.8" fill="#F0E4CE" />
      <ellipse cx="72" cy="2.5"  rx="3" ry="2" fill="#C6A46A" opacity="0.60" transform="rotate(-15 72 2.5)" />
      <ellipse cx="77" cy="8"    rx="3" ry="2" fill="#C6A46A" opacity="0.60" transform="rotate(75 77 8)" />
      <ellipse cx="72" cy="13.5" rx="3" ry="2" fill="#C6A46A" opacity="0.60" transform="rotate(165 72 13.5)" />
      <ellipse cx="67" cy="8"    rx="3" ry="2" fill="#C6A46A" opacity="0.60" transform="rotate(-105 67 8)" />
      <circle cx="42" cy="38" r="4.5" fill="#C6A46A" opacity="0.75" />
      <circle cx="42" cy="38" r="2.8" fill="#DFC08A" opacity="0.85" />
      <circle cx="42" cy="38" r="1.4" fill="#F0E4CE" />
      <ellipse cx="22" cy="58" rx="9" ry="4.5" transform="rotate(-40 22 58)" fill="#7A8669" opacity="0.55" />
      <ellipse cx="34" cy="46" rx="8" ry="4"   transform="rotate(-55 34 46)" fill="#7A8669" opacity="0.50" />
      <ellipse cx="54" cy="28" rx="7" ry="3.5" transform="rotate(-70 54 28)" fill="#7A8669" opacity="0.45" />
      <circle cx="16" cy="62" r="2.5" fill="#C6A46A" opacity="0.70" />
      <circle cx="60" cy="20" r="2"   fill="#C6A46A" opacity="0.65" />
    </svg>
  )
}

// ── Couple photo frame ────────────────────────────────────────────────────────
function CouplePhotoFrame({ alt }: { alt: string }) {
  return (
    <motion.div variants={fadeUp} className="photo-frame-wrapper" style={{ paddingBottom: '22px' }}>
      <SmallFloral className="photo-corner-tl" />
      <SmallFloral className="photo-corner-tr" />
      <SmallFloral className="photo-corner-bl" />
      <SmallFloral className="photo-corner-br" />
      <div className="photo-frame" style={{ aspectRatio: '3 / 4' }}>
        <img
          src={couplePhoto}
          alt={alt}
          draggable={false}
        />
        <div className="photo-frame-inner-ring" />
      </div>
      <div className="photo-frame-ornament">
        <div style={{ width: 32, height: 1, background: 'linear-gradient(to right, transparent, rgba(198,164,106,0.7))' }} />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M5 0L6.25 3.75L10 5L6.25 6.25L5 10L3.75 6.25L0 5L3.75 3.75Z" fill="#C6A46A" opacity="0.85" />
        </svg>
        <div style={{ width: 32, height: 1, background: 'linear-gradient(to left, transparent, rgba(198,164,106,0.7))' }} />
      </div>
    </motion.div>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconMapPin() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

function IconDirections() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}

// ── Calendar URL ──────────────────────────────────────────────────────────────
function buildCalendarUrl(t: TFunction) {
  const details = weddingConfig.events
    .map((event) => `${t(`events.${event.dateKey}`)}\n${event.schedule.map((item) => `${t(`events.${item.nameKey}`)} — ${t(`events.${item.timeKey}`)}`).join('\n')}`)
    .join('\n\n')
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${t('hero.groomName')} & ${t('hero.brideName')} — Wedding Celebrations`,
    dates: '20261121/20261123',
    details: `${details}\n\nVenue: ${weddingConfig.venue.nameEn}, ${weddingConfig.venue.addressEn}`,
    location: `${weddingConfig.venue.nameEn}, ${weddingConfig.venue.addressEn}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function InvitationPage() {
  const { t, i18n } = useTranslation()
  const [revealed, setRevealed] = useState(false)
  const isTamil = i18n.language === 'ta'

  const { events, mapsUrl, venue, contacts, quotes, couple } = weddingConfig
  const reception = events.find((e) => e.key === 'reception')!
  const wedding = events.find((e) => e.key === 'wedding')!

  const q = {
    familyWelcome: isTamil ? quotes.familyWelcome.ta : quotes.familyWelcome.en,
    decorative: isTamil ? quotes.decorative.ta : quotes.decorative.en,
  }

  return (
    <>
      <InvitationReveal onOpen={() => setRevealed(true)} />

      {revealed && (
        <motion.div initial="hidden" animate="show" variants={stagger} className="relative min-h-screen" style={{backgroundColor:'#FFFCF7'}}>

          {/* ── Page-level gold side strips (desktop) ── */}
          <div className="page-side-left  hidden lg:block" aria-hidden="true" />
          <div className="page-side-right hidden lg:block" aria-hidden="true" />

          {/* ── Sticky nav ── */}
          <nav className="sticky top-0 z-40 px-5 py-3 flex justify-between items-center"
            style={{
              background: 'linear-gradient(to right, #F8F1E7, #FFFCF7, #F8F1E7)',
              borderBottom: '1.5px solid rgba(198,164,106,0.45)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className={`font-script text-xl text-brown ${isTamil ? 'font-tamil font-serif text-base' : ''}`}>
              {isTamil ? 'மிதுன்' : 'Mithun'} &amp; {isTamil ? 'கோபிகா' : 'Gopika'}
            </span>
            <div className="flex items-center gap-4">
              <a href="#events" className="label-caps hidden md:block hover:text-champagne transition-colors">{t('nav.events')}</a>
              <a href="#venue" className="label-caps hidden md:block hover:text-champagne transition-colors">{t('nav.venue')}</a>
              <a href="#contact" className="label-caps hidden md:block hover:text-champagne transition-colors">{t('nav.contact')}</a>
              <LanguageToggle />
            </div>
          </nav>

          {/* ── Hero ── */}
          <section className="relative flex flex-col items-center text-center px-6 pt-16 pb-20 overflow-hidden hero-section">
            <LuxuryCornerFloral className="botanical-tl" />
            <LuxuryCornerFloral className="botanical-tr" />
            <LuxuryCornerFloral className="botanical-bl" />
            <LuxuryCornerFloral className="botanical-br" />
            <div className="hero-frame" aria-hidden="true" />

            {/* 1. Heading */}
            <motion.p variants={fadeUp} className="label-caps text-champagne-deep mb-8 relative z-10">
              {t('hero.together')}
            </motion.p>

            {/* 2. Couple photo */}
            <div className="relative z-10 mb-10">
              <CouplePhotoFrame alt={`${t('hero.groomName')} & ${t('hero.brideName')}`} />
            </div>

            {/* 3 & 5. Names with 4. ampersand */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-1 mb-5 relative z-10">
              <h1 className={`text-brown leading-tight max-w-full break-words ${isTamil ? 'font-tamil font-serif text-2xl md:text-4xl' : 'font-script text-3xl sm:text-4xl md:text-6xl'}`}>
                {t('hero.groomName')}
              </h1>
              <p className="font-serif text-sm md:text-base text-champagne-deep leading-snug">{couple.groom.qualification}</p>
              <span className="font-serif italic text-champagne text-3xl md:text-4xl my-1">&amp;</span>
              <h1 className={`text-brown leading-tight max-w-full break-words ${isTamil ? 'font-tamil font-serif text-2xl md:text-4xl' : 'font-script text-3xl sm:text-4xl md:text-6xl'}`}>
                {t('hero.brideName')}
              </h1>
              <p className="font-serif text-sm md:text-base text-champagne-deep leading-snug">{couple.bride.qualification}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-16 h-px bg-champagne opacity-60" />
              <GoldDiamond />
              <div className="w-16 h-px bg-champagne opacity-60" />
            </motion.div>

            <motion.p variants={fadeUp} className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40 relative z-10">
              {t('hero.invite')}
            </motion.p>
          </section>

          {/* ── Family welcome quote ── */}
          <section className="relative py-14 px-6 overflow-hidden quote-section">
            <LuxuryCornerFloral className="botanical-sm-tl" />
            <LuxuryCornerFloral className="botanical-sm-tr" />
            <motion.div variants={fadeUp} className="relative max-w-2xl mx-auto text-center z-10">
              <GoldDivider />
              <p className="font-serif italic text-brown/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                "{q.familyWelcome}"
              </p>
              <GoldDivider />
              <p className="label-caps text-champagne-deep text-[10px] mt-2">
                {q.decorative}
              </p>
            </motion.div>
          </section>

          {/* ── Countdown ── */}
          <section className="py-16 px-6 countdown-section">
            <motion.div variants={fadeUp}>
              <CountdownTimer />
            </motion.div>
          </section>

          <div className="px-8 md:px-16"><GoldDivider /></div>

          {/* ── Events ── */}
          <section id="events" className="relative py-16 px-6 overflow-hidden events-section">
            <LuxuryCornerFloral className="botanical-sm-bl" />
            <LuxuryCornerFloral className="botanical-sm-br" />
            <div className="max-w-3xl mx-auto relative z-10">
            <motion.h2 variants={fadeUp} className="section-title mb-12">
              {t('events.title')}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Reception */}
              <motion.div variants={fadeUp} className="event-card">
                <p className="label-caps text-champagne-deep mb-3">{t('events.reception')}</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-8 h-px bg-champagne opacity-70" />
                  <GoldDiamond />
                  <div className="w-8 h-px bg-champagne opacity-70" />
                </div>
                <p className="font-serif text-xl text-brown break-words">
                  {t(`events.${reception.dateKey}`)}
                </p>
                <div className="mt-4 space-y-3">
                  {reception.schedule.map((item) => (
                    <div key={item.nameKey}>
                      <p className="font-serif text-base md:text-lg leading-snug text-brown break-words">{t(`events.${item.nameKey}`)}</p>
                      <p className="font-sans text-sm text-champagne-deep mt-0.5 break-words">{t(`events.${item.timeKey}`)}</p>
                    </div>
                  ))}
                </div>
                {(isTamil ? reception.venueTa : reception.venueEn) && (
                  <p className="font-sans text-xs text-brown/50 mt-2">
                    {isTamil ? reception.venueTa : reception.venueEn}
                  </p>
                )}
              </motion.div>

              {/* Wedding */}
              <motion.div variants={fadeUp} className="event-card">
                <p className="label-caps text-champagne-deep mb-3">{t('events.wedding')}</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-8 h-px bg-champagne opacity-70" />
                  <GoldDiamond />
                  <div className="w-8 h-px bg-champagne opacity-70" />
                </div>
                <p className="font-serif text-xl text-brown break-words">
                  {t(`events.${wedding.dateKey}`)}
                </p>
                <div className="mt-4 space-y-3">
                  {wedding.schedule.map((item) => (
                    <div key={item.nameKey}>
                      <p className="font-serif text-base md:text-lg leading-snug text-brown break-words">{t(`events.${item.nameKey}`)}</p>
                      <p className="font-sans text-sm text-champagne-deep mt-0.5 break-words">{t(`events.${item.timeKey}`)}</p>
                    </div>
                  ))}
                </div>
                {(isTamil ? wedding.venueTa : wedding.venueEn) && (
                  <p className="font-sans text-xs text-brown/50 mt-2">
                    {isTamil ? wedding.venueTa : wedding.venueEn}
                  </p>
                )}
              </motion.div>
            </div>
            </div>
          </section>

          <div className="px-8 md:px-16"><GoldDivider /></div>

          {/* ── Venue / Directions ── */}
          <section id="venue" className="py-16 px-6 max-w-xl mx-auto text-center venue-section">
            <motion.h2 variants={fadeUp} className="section-title mb-3">
              {t('venue.title')}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-champagne opacity-50" />
              <GoldDiamond />
              <div className="w-12 h-px bg-champagne opacity-50" />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center gap-6">
              <div className="venue-details">
                <h3 className={`venue-name ${isTamil ? 'font-tamil' : ''}`}>
                  <span className="venue-name-pin" aria-hidden="true"><IconMapPin /></span>
                  {isTamil ? venue.nameTa : venue.nameEn}
                </h3>
                <p className={`venue-address ${isTamil ? 'font-tamil' : ''}`}>
                  {isTamil ? venue.addressTa : venue.addressEn}
                </p>
              </div>

              {/* Get Directions button */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-directions"
                aria-label={t('venue.mapsLabel')}
              >
                <IconDirections />
                {t('venue.directions')}
              </a>

              <p className="font-sans text-xs text-brown/40 tracking-wide">
                {t('venue.mapsLabel')}
              </p>
            </motion.div>
          </section>

          <div className="px-8 md:px-16"><GoldDivider /></div>

          {/* ── Contact ── */}
          <section id="contact" className="py-16 px-6 max-w-xl mx-auto contact-section">
            <motion.h2 variants={fadeUp} className="section-title mb-10">
              {t('contact.title')}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {contacts.map((c) => (
                <div key={c.number} className="contact-card">
                  <div className="flex items-center gap-4 w-full min-w-0 sm:flex-1">
                    <div className="contact-icon-circle">
                      <IconPhone />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-xl text-brown tracking-wide">{c.number}</p>
                      <p className="font-sans text-xs text-brown/50 mt-0.5">
                        {isTamil ? c.labelTa : c.labelEn}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${c.number}`}
                    className="btn-gold w-full sm:w-auto min-w-0 whitespace-normal text-center leading-snug justify-center"
                    aria-label={`${t('contact.callNow')} ${c.number}`}
                  >
                    {t('contact.callNow')}
                  </a>
                </div>
              ))}
            </motion.div>
          </section>

          <div className="px-8 md:px-16"><GoldDivider /></div>

          {/* ── Helpful links ── */}
          <section className="py-12 px-6 max-w-xl mx-auto text-center">
            <motion.div variants={fadeUp} className="helpful-links-grid">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="link-circle" aria-label={t('links.location')}>
                <div className="link-circle-icon"><IconMapPin /></div>
                <span className="link-circle-label">{t('links.location')}</span>
              </a>
              <a href={buildCalendarUrl(t)} target="_blank" rel="noopener noreferrer" className="link-circle" aria-label={t('links.calendar')}>
                <div className="link-circle-icon"><IconCalendar /></div>
                <span className="link-circle-label">{t('links.calendar')}</span>
              </a>
              <a href={`tel:${contacts[0].number}`} className="link-circle" aria-label={t('links.contact')}>
                <div className="link-circle-icon"><IconPhone /></div>
                <span className="link-circle-label">{t('links.contact')}</span>
              </a>
            </motion.div>
          </section>

          {/* ── Footer ── */}
          <footer className="bg-brown text-champagne-pale text-center py-10 px-6">
            <p className={`leading-relaxed max-w-full break-words ${isTamil ? 'font-tamil font-serif text-base sm:text-lg text-champagne-pale' : 'font-script text-xl sm:text-2xl text-champagne-pale'}`}>
              {t('hero.groomName')} &amp; {t('hero.brideName')}
            </p>
            <div className="flex items-center justify-center gap-3 mb-3 opacity-40">
              <div className="w-12 h-px bg-champagne-pale" />
              <GoldDiamond />
              <div className="w-12 h-px bg-champagne-pale" />
            </div>
            <p className="font-sans text-[11px] md:text-xs text-champagne/60 mt-3 leading-relaxed">
              Designed by Allimuthu
            </p>
          </footer>

        </motion.div>
      )}
    </>
  )
}
