import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <button
      onClick={() => i18n.changeLanguage(isEn ? 'ta' : 'en')}
      className="text-xs border border-champagne text-champagne-deep px-4 py-1.5 rounded-full
                 hover:bg-champagne hover:text-ivory transition-all duration-300 font-sans tracking-widest uppercase"
      aria-label="Toggle language"
    >
      {isEn ? 'தமிழ்' : 'English'}
    </button>
  )
}
