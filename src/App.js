import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/section/Navbar';
import Footer from './componentes/section/Footer';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';
import Presentation from './componentes/section/Presentation';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
