import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-slate-950 text-white flex h-screen overflow-hidden">

        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col p-6 shadow-2xl">
          <h1 className="text-2xl font-black text-blue-500 mb-10 tracking-tighter">
            MARCONI<span className="text-white">HUB</span>
          </h1>

          <nav className="flex-1 space-y-4">
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition font-medium">
              🏠 Home (Forum)
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition font-medium">
              🔬 Laboratori
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition font-medium">
              🚫 Prof. Assenti
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition font-medium">
              📅 Orario Classi
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition font-medium">
              📚 Corsi
            </a>
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-800">
            <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
              <span className="text-red-400 text-xs font-bold uppercase">Importante</span>
              <p className="text-xs text-slate-300 mt-1">Circolare 124: Chiusura scuola per neve.</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
          {children}
        </main>

      </body>
    </html>
  )
}