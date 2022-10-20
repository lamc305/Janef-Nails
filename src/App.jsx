import Header from "./components/Header"
import Portada from "./components/Portada"
import './App.css'
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
function App() {

  return (
    <div className="App">
      <Header />
      <Portada />
      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default App
