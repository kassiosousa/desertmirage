export default function Localizacao() {
  return (
    <section id="localizacao" className="py-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">LOCALIZAÇÃO</h2>

      <div className="max-w-6xl h-[400px] mx-auto flex flex-col md:flex-row items-center px-4 gap-4">
        <div className="md:w-3/4 w-full h-full">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d497.36057606157146!2d-44.790252176676745!3d-4.242717453721019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m3!3m2!1d-4.242820099999999!2d-44.789983299999996!4m0!5e0!3m2!1spt-BR!2sbr!4v1752842485001!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:w-1/4 w-full h-full flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">BMO Pesquisa</h2>
          <p className="mb-6 text-gray-700">
            Rua John Kennedy, 722 – Ramal – CEP 65700-000 – Bacabal-Ma
          </p>
        </div>
      </div>
    </section>
  )
}
