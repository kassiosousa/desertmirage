import { useState } from 'react'

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("https://email.kassiosousa.com.br/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      alert("Mensagem enviada com sucesso!")
    } else {
      alert("Erro ao enviar o formulário.")
    }
  }

  return (
    <section id="contato" className="py-16 bg-gray-50 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">CONTATO</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4"
      >

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Seu e-mail"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          value={form.message}  
          onChange={handleChange}
          placeholder="Mensagem"
          required
          className="w-full border p-2 rounded h-28"
        ></textarea>

        <div className="border p-3 rounded bg-gray-100 text-sm">
          <label>
            <input type="checkbox" required className="mr-2" /> Não sou um robô
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
