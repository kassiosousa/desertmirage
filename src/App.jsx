import Header from './components/header'
import Banner from './components/banner'
import Sobre from './components/sobre'
import Servicos from './components/servicos'
// import Localizacao from './components/localizacao'
import Contato from './components/contato'
import Footer from './components/footer'
import WhatsappFloat from './components/whatsappfloat'
import Target from './components/target'

function App() {
  return (
    <div className="font-sans text-gray-800 relative">
      <Header />
      <Banner />
      <Sobre />
      <Servicos />
      <Target />
      <Contato />
      <Footer />
      <WhatsappFloat />
    </div>
  )
}

export default App
