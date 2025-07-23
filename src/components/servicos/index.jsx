export default function Servicos() {
  const servicos = [
    { icon: '🗳️', nome: 'Pesquisa eleitoral e avaliação administrativa', desc: 'Levantamento de dados confiáveis para identificar a intenção de voto, percepção do eleitorado e desempenho de gestões públicas, auxiliando decisões estratégicas com base em evidências reais.' },
    { icon: '🎯', nome: 'Consultoria em Marketing Político e Estratégia Eleitoral', desc: 'Planejamento e execução de campanhas eleitorais eficazes, com foco em posicionamento, imagem pública e abordagem direcionada ao perfil do eleitor, aumentando as chances de sucesso nas urnas.' },
    { icon: '🏛️', nome: 'Comunicação Institucional', desc: 'Fortalecimento da imagem de instituições públicas ou privadas por meio de estratégias de relacionamento, posicionamento de marca e gestão de reputação perante diferentes públicos.' },
    { icon: '📬', nome: 'Marketing Direto', desc: 'Ações de comunicação direcionadas que alcançam seu público de forma personalizada e eficiente, promovendo engajamento, conversões e resultados mensuráveis com precisão.' },
    { icon: '👥', nome: 'Treinamento Profissional', desc: 'Capacitação de equipes e lideranças em áreas como comunicação, atendimento ao público, gestão de crise e postura institucional, com foco em resultados e qualificação prática.' },
  ]

  const firstRow = servicos.slice(0, 3)
  const secondRow = servicos.slice(3)

  return (
    <section id="servicos" className="py-16 bg-gray-50 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">SERVIÇOS</h2>

      {/* Primeira linha com 3 colunas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {firstRow.map((s, i) => (
          <div key={i} className="bg-white p-6 shadow rounded text-center">
            <div className="text-4xl mb-2">{s.icon}</div>
            <h3 className="font-semibold">{s.nome}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Segunda linha com 2 colunas centralizadas */}
      <div className="max-w-5xl mx-auto mt-6 flex flex-col md:flex-row justify-center gap-6">
        {secondRow.map((s, i) => (
          <div key={i} className="bg-white p-6 shadow rounded text-center w-full md:w-[300px]">
            <div className="text-4xl mb-2">{s.icon}</div>
            <h3 className="font-semibold">{s.nome}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
