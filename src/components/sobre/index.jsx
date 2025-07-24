import natinho from '../../assets/natinho.jpg';

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 w-full mx-auto md:px-12 px-4 md:min-h-[600px]">
      <h2 className="text-3xl font-bold text-center mb-8">SOBRE</h2>
      <div className="mx-auto flex flex-col md:flex-row items-center px-2 gap-4">
        <div className="md:w-1/4 w-full text-center">
          <div>
            <img
              src={natinho}
              alt="Banner"
              className="rounded-lg object-cover mx-auto h-[200px]"
            />
          </div>
          <h2><strong> Raimundo Brito (Natinho)</strong></h2>
          <p className='p-2'>Professor, Radialista, Advogado e Consultor de Marketing Político. Diretor proprietário da BMO Brasil Marketing e Opinião.</p>
        </div>
        <div className="md:w-3/4 text-lg">
          <p className='p-2'>✔️ O Instituto de Pesquisa Eleitoral Brasil Marketing e Opinião, fundado em 1996 é especializado em monitoramento de campanhas eleitorais, avaliação administrativa, comunicação e marketing político. </p>
          <p className='p-2'>✔️ Nesses quase 30 anos de existência vem atuando com excelência e credibilidade na área política eleitoral.</p>
          <p className='p-2'>✔️ O instituto é devidamente registrado no CONRE-5, Conselho Regional de Estatística, e cadastrado junto ao TSE, possibilitando a realização de Pesquisas Eleitorais Registradas, que permitem a publicação e divulgação dos resultados nos diversos meios de comunicação.</p>
          <p className='p-2'>✔️ A BMO Pesquisa é uma empresa com expertise no ramo da pesquisa eleitoral e na elaboração de estratégias eficientes para sua campanha. Nossa equipe é composta por Estatísticos, Cientistas Políticos e especialistas em Marketing e Comunicação Eleitoral.</p>
        </div>
      </div>
    </section>
  )
}
