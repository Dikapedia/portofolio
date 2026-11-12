import { ref, computed } from 'vue'
import { translations, projectTranslations } from './i18n'

const stored = localStorage.getItem('lang')
const lang = ref(stored === 'id' ? 'id' : 'en')
if (stored && stored !== lang.value) localStorage.setItem('lang', lang.value)

const setLang = (value) => {
  lang.value = value === 'id' ? 'id' : 'en'
  localStorage.setItem('lang', lang.value)
  document.documentElement.lang = lang.value
}

document.documentElement.lang = lang.value

const t = (key) => {
  let value = translations[lang.value]
  for (const part of key.split('.')) {
    value = value?.[part]
  }
  return value ?? key
}

const tp = (project) => {
  if (!project) return {}
  const dict = projectTranslations[lang.value] || projectTranslations.en
  return dict[project.id] || projectTranslations.en[project.id] || project
}

export function useI18n() {
  return {
    lang: computed(() => lang.value),
    t,
    tp,
    setLang
  }
}
