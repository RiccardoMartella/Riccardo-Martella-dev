import { useI18n } from 'vue-i18n'

export function useLocalePath() {
  const { locale } = useI18n()

  function localePath(path) {
    if (locale.value === 'it') {
      return path === '/' ? '/it' : `/it${path}`
    }
    return path
  }

  return { localePath, locale }
}
