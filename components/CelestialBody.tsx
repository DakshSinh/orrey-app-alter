'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface CelestialBodyProps {
  position: [number, number, number]
  size: number
  color: string
}

const CelestialBody: React.FC<CelestialBodyProps> = ({ position, size, color }) => {
  const mesh = useRef<Mesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default CelestialBody