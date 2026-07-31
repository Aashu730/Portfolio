const STORAGE_KEY = 'portfolio-admin-auth-v1'
const SESSION_TIMEOUT_MS = 30 * 60 * 1000

// Change this password to your own secure password
const ADMIN_PASSWORD = 'Aashu@730'

export function getAdminPassword() {
  return ADMIN_PASSWORD
}

export function createAdminSession() {
  const payload = {
    authenticated: true,
    issuedAt: Date.now(),
    expiresAt: Date.now() + SESSION_TIMEOUT_MS,
  }

  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }
}

export function getAdminSession() {
  if (typeof window === 'undefined') return null

  const raw = window.sessionStorage.getItem(STORAGE_KEY)

  if (!raw) return null

  try {
    const parsed = JSON.parse(raw)

    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      clearAdminSession()
      return null
    }

    return parsed
  } catch {
    clearAdminSession()
    return null
  }
}

export function clearAdminSession() {
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem(STORAGE_KEY)
  }
}

export function isAdminAuthenticated() {
  return Boolean(getAdminSession())
}

export function extendAdminSession() {
  const session = getAdminSession()

  if (!session) return false

  const payload = {
    authenticated: true,
    issuedAt: Date.now(),
    expiresAt: Date.now() + SESSION_TIMEOUT_MS,
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  return true
}

export function logoutAdmin() {
  clearAdminSession()
}