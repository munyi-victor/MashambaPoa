import './App.css'
import Body from './components/Body';
import Topnav from './components/Topnav';
import Footer from './components/Footer';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Topnav/>
      <Body />
      <About/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
