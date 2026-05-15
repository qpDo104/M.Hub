'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function HubMarconi() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const deletePost = async (id) => {
    if (confirm("Sei sicuro di voler eliminare questo annuncio?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`);
        fetchPosts(); // Ricarica la lista
      } catch (err) {
        console.error("Errore durante l'eliminazione:", err);
      }
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/posts')
      setPosts(res.data)
    } catch (err) {
      console.error("Errore nel caricamento dei post:", err)
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault() // Evita che la pagina si ricarichi
    try {
      await axios.post('http://127.0.0.1:8000/api/posts', {
        title: title,
        content: content,
        author: "Prof. Trainer", // Per ora lo scriviamo a mano
        category: "Generale"
      })

      setTitle('')
      setContent('')

      fetchPosts()
    } catch (err) {
      console.error("Errore nell'invio:", err)
      alert("C'è stato un problema durante l'invio dell'annuncio.")
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-500 mb-8 border-b border-slate-800 pb-4">
          Hub Marconi <span className="text-white text-sm font-light italic">Bacheca Annunci</span>
        </h1>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl mb-12 border border-slate-800 shadow-2xl">
          <h2 className="text-xl mb-4 font-semibold text-slate-300">Pubblica una Circolare</h2>

          <input
            className="w-full bg-slate-800 p-3 rounded mb-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Titolo dell'annuncio..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="w-full bg-slate-800 p-3 rounded mb-4 h-32 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Scrivi qui il contenuto del messaggio..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition duration-200">
            Invia Annuncio
          </button>
        </form>

        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="bg-slate-900 p-6 rounded-xl border-l-4 border-blue-600 hover:bg-slate-800/50 transition duration-300 shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-100">{post.title}</h3>
                  <span className="bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <p className="text-slate-400 mb-4 whitespace-pre-wrap">{post.content}</p>
                <div className="text-sm text-slate-500 flex justify-between items-center border-t border-slate-800 pt-4">
                  <span className="flex items-center gap-2">
                    <span className="bg-slate-700 h-6 w-6 rounded-full flex items-center justify-center text-[10px]">👨‍🏫</span>
                    {post.author}
                  </span>
                  <span>{new Date(post.created_at).toLocaleDateString('it-IT')}</span>
                </div>
                <button
                  onClick={() => deletePost(post.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-bold"
                >
                  Elimina
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500 italic">Nessun annuncio presente in bacheca.</p>
          )}
        </div>
      </div>
    </main>
  )
}