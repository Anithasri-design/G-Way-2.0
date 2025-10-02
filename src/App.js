import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Cards from './components/Cards'; 
import Choose from './components/Choose'; 
import Serve from './components/Serve'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <AboutUs/>
        <Cards/>
        <Choose/>
        <Serve/>
        <Contact/>

<Footer/>

     
    </div>
  );
}

export default App;
