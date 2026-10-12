// All wedding data lives here. Edit this file to update the invitation content.
// No database or backend server required.

const weddingVenue = {
  nameEn: 'Nalam Mahal',
  nameTa: 'நலம் மஹால்',
  addressEn: 'National Highway, 44, Srinagar - Kanyakumari Hwy, Panaiyampalayam, Nagampalli, Tamil Nadu 639109',
  addressTa: 'தேசிய நெடுஞ்சாலை 44, ஸ்ரீநகர் - கன்னியாகுமரி நெடுஞ்சாலை, பனையம்பாளையம், நாகம்பள்ளி, தமிழ்நாடு 639109',
}

export const weddingConfig = {
  // ── Countdown target ──────────────────────────────────────────────────────
  // Provisional: midnight IST on the wedding date.
  // Update to exact ceremony time once confirmed, e.g. '2026-11-22T08:00:00+05:30'
  weddingDateISO: '2026-11-22T00:00:00+05:30',

  // ── Couple ────────────────────────────────────────────────────────────────
  couple: {
    groom: {
      nameEn: 'Mithun Chakravarthi (a) Sakthivel S',
      qualification: 'MBA.,',
      parentEn: 'Son of Mr. & Mrs. Sakthivel',
      parentTa: 'திரு. & திருமதி. சக்திவேல் அவர்களின் புதல்வர்',
    },
    bride: {
      nameEn: 'Gopika R',
      qualification: 'M.Com. (CA)',
      parentEn: 'Daughter of Mr. & Mrs. R',
      parentTa: 'திரு. & திருமதி. ர அவர்களின் புதல்வி',
    },
  },

  // ── Events ────────────────────────────────────────────────────────────────
  events: [
    {
      key: 'reception',
      nameEn: 'Reception',
      dateEn: 'Saturday, 21 November 2026',
      dateKey: 'receptionDate',
      schedule: [
        { nameKey: 'varaverpu', timeKey: 'varaverpuTime' },
        { nameKey: 'nichayathartham', timeKey: 'nichayatharthamTime' },
      ],
      // Venue TBC — leave empty until confirmed
      venueEn: '',
      venueTa: '',
    },
    {
      key: 'wedding',
      nameEn: 'Wedding',
      dateEn: 'Sunday, 22 November 2026',
      dateKey: 'weddingDate',
      schedule: [
        { nameKey: 'subaMuhurtham', timeKey: 'subaMuhurthamTime' },
        { nameKey: 'sambandhiVirundhu', timeKey: 'sambandhiVirundhuTime' },
      ],
      venueEn: weddingVenue.nameEn,
      venueTa: weddingVenue.nameTa,
    },
  ],

  // ── Venue / Maps ──────────────────────────────────────────────────────────
  venue: weddingVenue,
  // Update this URL if the venue changes. Used in the "Get Directions" button.
  mapsUrl: 'https://maps.app.goo.gl/ejUqs8Hwu2rXuuEr5',

  // ── Contact numbers ───────────────────────────────────────────────────────
  contacts: [
    { number: '9976520701', labelEn: 'Call for enquiries', labelTa: 'விசாரணைக்கு அழைக்கவும்' },
    { number: '6381889055', labelEn: 'Call for enquiries', labelTa: 'விசாரணைக்கு அழைக்கவும்' },
  ],

  // ── Welcome quotes ────────────────────────────────────────────────────────
  quotes: {
    familyWelcome: {
      en: 'To our beloved family and dear friends, your presence will make our special day even more meaningful. Join us as we begin a new chapter filled with love, blessings, and cherished memories.',
      ta: 'எங்கள் அன்பான குடும்பத்தினர் மற்றும் அன்பான நண்பர்களே, உங்கள் வருகை எங்கள் சிறப்பு நாளை இன்னும் அர்த்தமுள்ளதாக மாற்றும். அன்பு, ஆசீர்வாதங்கள் மற்றும் அன்பான நினைவுகளால் நிறைந்த புதிய அத்தியாயத்தை தொடங்க எங்களுடன் சேருங்கள்.',
    },
    decorative: {
      en: 'Two hearts, one beautiful journey, a lifetime of memories.',
      ta: 'இரண்டு இதயங்கள், ஒரு அழகான பயணம், வாழ்நாள் நினைவுகள்.',
    },
  },
}

// ─── Dashboard auth helpers ───────────────────────────────────────────────────
const DASHBOARD_PASSWORD = 'wedding2026' // ← change before sharing the URL
const SESSION_KEY = 'everafter_session'

export function dashboardLogin(password: string): boolean {
  if (password !== DASHBOARD_PASSWORD) return false
  sessionStorage.setItem(SESSION_KEY, '1')
  return true
}

export function isDashboardAuthenticated(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === '1'
}

export function dashboardLogout() {
  sessionStorage.removeItem(SESSION_KEY)
}
