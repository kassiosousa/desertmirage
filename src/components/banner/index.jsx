import { FaWhatsapp } from "react-icons/fa"
import bmologo from '../../assets/bmo-logo.png';
import people from '../../assets/people.png';
import bg from '../../assets/bg-banner.png';

export default function Banner() {
  return (
    <section 
      className="relative bg-cover bg-center py-12 overflow-hidden" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 h-full w-full bg-white/80 z-0 pointer-events-none"></div>
      <div className="relative z-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 gap-8 overflow-hidden">
        
        <div className="md:w-1/4 w-full text-left">
          <img
            src={bmologo}
            alt="Banner"
            className="rounded-lg w-3/4 object-cover"
          />
          <h2 className="text-3xl font-bold mb-4 font-sans" >BMO Pesquisas </h2>
          <p className="mb-6 text-gray-700 text-xl">
            Instituto de Pesquisa Eleitoral Brasil Marketing e Opinião 
          </p>
          <a
            href="https://wa.me/5599981001540"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow w-[200px]"
            target="_blank"
          >
            <FaWhatsapp />
            Entre em contato 
          </a>
        </div>

        <div className="md:w-3/4 w-full text-center md:text-left">
          <img
            src={people}
            alt="Banner"
            className="rounded-lg w-4/4 md:w-3/4 object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  )
}