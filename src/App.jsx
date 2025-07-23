import Header from './components/header'
import Banner from './components/banner'
import Sobre from './components/sobre'
import Servicos from './components/servicos'
import Localizacao from './components/localizacao'
import Contato from './components/contato'
import Footer from './components/footer'
import WhatsappFloat from './components/whatsappfloat'

function App() {
  return (
    <div className="font-sans text-gray-800 relative">
      <Header />
      <Banner />
      <Sobre />
      <Servicos />
      <Localizacao />
      <Contato />
      <Footer />
      <WhatsappFloat />
    </div>
  )
}

export default App
