"use client"
import { createContext, useContext, useState, ReactNode } from 'react'

interface ModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const AvailabilityModalContext = createContext<ModalContextType | null>(null)

export function AvailabilityModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AvailabilityModalContext.Provider value={{
      isOpen,
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false)
    }}>
      {children}
    </AvailabilityModalContext.Provider>
  )
}

export function useAvailabilityModal() {
  const ctx = useContext(AvailabilityModalContext)
  if (!ctx) throw new Error('useAvailabilityModal must be used within AvailabilityModalProvider')
  return ctx
}
