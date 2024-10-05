import { create } from 'zustand'

interface OrreryState {
  showPlanets: boolean
  showAsteroids: boolean
  showComets: boolean
  togglePlanets: () => void
  toggleAsteroids: () => void
  toggleComets: () => void
}

export const useOrreryStore = create<OrreryState>((set) => ({
  showPlanets: true,
  showAsteroids: false,
  showComets: false,
  togglePlanets: () => set((state) => ({ showPlanets: !state.showPlanets })),
  toggleAsteroids: () => set((state) => ({ showAsteroids: !state.showAsteroids })),
  toggleComets: () => set((state) => ({ showComets: !state.showComets })),
}))