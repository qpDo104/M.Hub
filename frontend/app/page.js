'use client' // Fondamentale per usare gli Hook come useEffect
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Bussiamo alla porta di Laravel
    axios.get('http://127.0.0.1:8000/api/test-api')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.error("Errore:", err))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Next.js + Laravel</h1>

      {data ? (
        <div className="p-6 bg-green-500 rounded-lg shadow-xl animate-bounce">
          <p className="text-xl font-mono">{data.messaggio}</p>
          <p className="text-sm mt-2 opacity-80">Stato: {data.stato}</p>
        </div>
      ) : (
        <p className="animate-pulse">Caricamento dati dal backend...</p>
      )}
    </main>
  )
}