'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ForumPage() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/posts')
      setPosts(res.data)
    } catch (err) { console.error(err) }
  }

  useEffect(() => { fetchPosts() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://127.0.0.1:8000/api/posts', {
        title, content, author: "Prof. Trainer", category: "Generale"
      })
      setTitle(''); setContent(''); fetchPosts()
    } catch (err) { alert("Errore invio") }
  }

  const deletePost = async (id) => {
    if (confirm("Eliminare?")) {
      await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
      fetchPosts()
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <header className="mb-10">
        <h2 className="text-3xl font-bold">Forum Marconi</h2>
        <p className="text-slate-500 text-sm">Scorri gli ultimi annunci della community</p>
      </header>

      {/* FORM "REDDIT STYLE" - Più compatto */}
      <form onSubmit={handleSubmit} className="bg-slate-900 p-4 rounded-xl mb-10 border border-slate-800 shadow-xl">
        <input
          className="w-full bg-slate-800 p-2 rounded mb-3 text-sm focus:ring-1 focus:ring-blue-600 outline-none"
          placeholder="Titolo dell'annuncio..."
          value={title} onChange={(e) => setTitle(e.target.value)} required
        />
        <textarea
          className="w-full bg-slate-800 p-2 rounded mb-3 h-24 text-sm focus:ring-1 focus:ring-blue-600 outline-none"
          placeholder="Cosa vuoi dire alla scuola?"
          value={content} onChange={(e) => setContent(e.target.value)} required
        />
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg text-sm font-bold">
            Pubblica
          </button>
        </div>
      </form>

      {/* FEED */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition shadow-md">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono text-blue-400">/{post.category}</span>
              <button onClick={() => deletePost(post.id)} className="text-slate-600 hover:text-red-500 text-xs">Elimina</button>
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{post.content}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-[10px] text-slate-500 uppercase tracking-widest">
              <span>👤 {post.author}</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}