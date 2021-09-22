import './styles/estilos.css';
import './styles/scripts'
import Nav from './components/layout/Nav';
import Home from './pages/homeSection'
import About from './pages/aboutSection'
import Resume from './pages/resumeSection'
import Portfolio from './pages/portfolioSection';
import Contact from './pages/contactSection';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
