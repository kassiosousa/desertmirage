// import logo from '../../assets/logo.png';
import bmologo from '../../assets/bmo-logo.png';

export default function Header() {
  
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10" id="inicio">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold"><img src={bmologo} className="w-40" alt="Logo" /></h1>
        <nav className="space-x-2 pl-4 md:space-x-6 md:text-2xl">
          <a onClick={() => handleScroll('home')} href="#inicio">Inicio</a>
          <a onClick={() => handleScroll('home')} href="#sobre">Sobre</a>
          <a onClick={() => handleScroll('home')} href="#servicos">Serviços</a>
          <a onClick={() => handleScroll('home')} href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}