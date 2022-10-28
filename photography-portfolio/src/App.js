import logo from './logo.svg';
import './App.scss';
import { Container } from "react-bootstrap";
import { HeroSection } from "../src/components/HeroSection";

function App() {
  return (
    <div className="App">
      <Container>
        <HeroSection />
      </Container>
    </div>
  );
}

export default App;
