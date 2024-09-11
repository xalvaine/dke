import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

const TABLET_QUERY = '(min-width: 834px)'
const DESKTOP_QUERY = '(min-width: 1024px)'

export const useMedia = () => {
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const handleSetDesktop = useCallback((event: MediaQueryListEvent) => {
    setIsDesktop(window.matchMedia(DESKTOP_QUERY).matches)
  }, [])

  const handleSetTablet = useCallback((event: MediaQueryListEvent) => {
    setIsTablet(window.matchMedia(TABLET_QUERY).matches)
  }, [])

  useLayoutEffect(() => {
    const tabletMedia = window.matchMedia(TABLET_QUERY)
    const desktopMedia = window.matchMedia(DESKTOP_QUERY)

    setIsTablet(tabletMedia.matches)
    setIsDesktop(desktopMedia.matches)

    tabletMedia.addEventListener('change', handleSetTablet)
    desktopMedia.addEventListener('change', handleSetDesktop)

    return () => {
      tabletMedia.addEventListener('change', handleSetTablet)
      desktopMedia.addEventListener('change', handleSetDesktop)
    }
  }, [handleSetDesktop, handleSetTablet])

  return {
    isMobile: !isTablet && !isDesktop,
    isTablet: isTablet && !isDesktop,
    isDesktop,
  }
}
