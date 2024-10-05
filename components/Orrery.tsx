'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import CelestialBody from './CelestialBody'
import { useOrreryStore } from '@/store/orreryStore'

const Orrery: React.FC = () => {
  const { showPlanets, showAsteroids, showComets } = useOrreryStore()

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10``, 10, 10]} />
      <OrbitControls />
      <Stars />
      <CelestialBody position={[0, 0, 0]} size={1} color="yellow" /> {/* Sun */}
      {showPlanets && (
        <>
          <CelestialBody position={[3, 0, 0]} size={0.4} color="blue" /> {/* Earth */}
          <CelestialBody position={[5, 0, 0]} size={0.3} color="red" /> {/* Mars */}
        </>
      )}
      {showAsteroids && (
        <>
          <CelestialBody position={[2.5, 0.5, 0]} size={0.1} color="gray" /> {/* Asteroid */}
          <CelestialBody position={[4, -0.5, 0]} size={0.08} color="gray" /> {/* Asteroid */}
        </>
      )}
    </Canvas>
  )
}

export default Orrery