import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { initialPortfolioData } from '../utils/content'

const PortfolioContext = createContext(null)

const STORAGE_KEY = 'portfolio-data-v1'

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    if (typeof window === 'undefined') return initialPortfolioData
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return initialPortfolioData
    try {
      const parsed = JSON.parse(stored)
      return parsed
    } catch {
      return initialPortfolioData
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
  }, [data])

  const value = useMemo(
    () => ({
      data,
      setData,
      updateField: (section, field, value) => {
        setData((current) => ({ ...current, [section]: { ...current[section], [field]: value } }))
      },
      updateNestedField: (section, field, nestedField, value) => {
        setData((current) => ({
          ...current,
          [section]: {
            ...current[section],
            [field]: { ...current[section][field], [nestedField]: value },
          },
        }))
      },
      updateSection: (section, newValue) => {
        setData((current) => ({ ...current, [section]: newValue }))
      },
      pushItem: (section, item) => {
        setData((current) => ({ ...current, [section]: [...current[section], item] }))
      },
      removeItem: (section, index) => {
        setData((current) => ({
          ...current,
          [section]: current[section].filter((_, itemIndex) => itemIndex !== index),
        }))
      },
      reorderItem: (section, fromIndex, toIndex) => {
        setData((current) => {
          const next = [...current[section]]
          const [moved] = next.splice(fromIndex, 1)
          next.splice(toIndex, 0, moved)
          return { ...current, [section]: next }
        })
      },
      setProfile: (updates) => {
        setData((current) => ({ ...current, profile: { ...current.profile, ...updates } }))
      },
      setAppearance: (updates) => {
        setData((current) => ({ ...current, appearance: { ...current.appearance, ...updates } }))
      },
    }),
    [data],
  )

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used inside a PortfolioProvider')
  }
  return context
}
