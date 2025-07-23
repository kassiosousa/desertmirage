import bmologo from '../../assets/bmo-logo.png';

export default function Banner() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
        
        <div className="md:w-2/4 w-full text-center">
          <img
            src={bmologo}
            alt="Banner"
            className="rounded-lg w-3/4 object-cover mx-auto"
          />
        </div>

        <div className="md:w-2/4 w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Excelência e Credibilidade </h2>
          <p className="mb-6 text-gray-700">
            Instituto de Pesquisa Eleitoral Brasil Marketing e Opinião 
          </p>
          {/* <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Saiba Mais
          </button> */}
        </div>
      </div>
    </section>
  )
}