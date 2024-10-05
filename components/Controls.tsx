'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { useOrreryStore } from '@/store/orreryStore'

const Controls: React.FC = () => {
  const { showPlanets, showAsteroids, showComets, togglePlanets, toggleAsteroids, toggleComets } = useOrreryStore()

  return (
    <div className="mt-8 space-x-4">
      <Button onClick={togglePlanets}>
        {showPlanets ? 'Hide' : 'Show'} Planets
      </Button>
      <Button onClick={toggleAsteroids}>
        {showAsteroids ? 'Hide' : 'Show'} Asteroids
      </Button>
      <Button onClick={toggleComets}>
        {showComets ? 'Hide' : 'Show'} Comets
      </Button>
    </div>
  )
}

export default Controls