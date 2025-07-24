
import { FaWhatsapp } from "react-icons/fa"
import celular from '../../assets/celular.png';

export default function Target() {
  return (
    <section className="relative bg-blue-600 py-12 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Texto */}
        <div className="md:w-1/2 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fale conosco por whatsapp ou telefone.
          </h2>
          <p className="text-lg mb-6">
            Nossa equipe está pronta para te ajudar!
          </p>
          <a
            href="https://wa.me/5599981001540"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
          >
            Entre em contato agora!
            <span className="text-green-500 text-xl"><FaWhatsapp size={32} /></span>
          </a>
        </div>

        {/* Imagem do celular flutuante */}
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <img
            src={celular}
            alt="Celular WhatsApp"
            className="absolute right-[10px] bottom-[-200px] w-[300px] md:w-[250px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

          
          