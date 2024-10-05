import Orrery from '@/components/Orrery'
import Controls from '@/components/Controls'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Interactive Orrery</h1>
      <div className="w-full h-[600px]">
        <Orrery />
      </div>
      <Controls />
    </main>
  )
}