import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from "react-bootstrap";
import { HeroSection } from "../src/components/HeroSection";
import { Header } from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import ImagesCollection from './components/ImagesCollection';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App">
      <Container>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSection />
        <ImagesCollection />
      </Container>
    </div>
  );
}

export default App;
