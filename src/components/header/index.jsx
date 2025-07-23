import logo from '../../assets/logo.png';

export default function Header() {
  
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold"><img src={logo} className="w-8" alt="Logo" /></h1>
        <nav className="space-x-6">
          <a onClick={() => handleScroll('home')} href="#sobre">Sobre</a>
          <a onClick={() => handleScroll('home')} href="#servicos">Serviços</a>
          <a onClick={() => handleScroll('home')} href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}