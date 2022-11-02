import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container, Row, Col } from "react-bootstrap";
import { HeroSection } from "../src/components/HeroSection";
import { Header } from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import ImagesCollection from './components/ImagesCollection';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import FooterMenu from './components/FooterMenu';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App">
      <Container>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSection />
        <ImagesCollection />
        <AboutSection />
        <Container className='footer-section'>
          <Row>
          <div className="">
        <img src="/images/camera_hand.png" alt="hand holding camera"></img>
      </div>
          </Row>
          <Row className='my-3'>
            <Col>
            <NewsletterSection /></Col>
            <Col>
            <FooterMenu /></Col>
          </Row>
          <Row className='my-3'>© Webdecoded, 2022. All Rights Reserved.</Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
