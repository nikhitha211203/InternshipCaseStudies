import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage } from 'zustand/middleware'

export interface Note {
  id: string
  title: string
  status: string
  message: string
  author: string
}

interface UserState {
  name: string
  email: string
  role: string
  registered: boolean
  notes: Note[]
  status: string
  setName: (name: string) => void
  setEmail: (email: string) => void
  setRole: (role: string) => void
  setRegistered: (registered: boolean) => void
  addNote: (note: Note) => void
  deleteNote: (id: string) => void
  setNotes: (notes: Note[]) => void
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      immer((set) => ({
        name: '',
        email: '',
        role: '',
        registered: false,
        notes: [],
        status: 'user',

        setName: (name) => set({ name }),
        setEmail: (email) => set({ email }),
        setRole: (role) => set({ role }),
        setRegistered: (registered) => set({ registered }),

        addNote: (note) =>
          set((state) => {
            state.notes.push(note)
          }),
        deleteNote: (id) =>
          set((state) => {
            state.notes = state.notes.filter((n) => n.id !== id)
          }),
        setNotes: (notes) => set({ notes }),
      })),
      {
        name: 'user-storage',
        version: 2,
        storage: createJSONStorage(() => localStorage),
        migrate: (persistedState: any, version: number) => {
          if (version === 1) {
            return {
              ...persistedState,
              status: 'user',
            }
          }
          return persistedState
        },
      }
    )
  )
)