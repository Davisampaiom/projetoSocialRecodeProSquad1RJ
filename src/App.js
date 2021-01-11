import "./App.css";

import { Header, Footer  } from "./components/modulos";
import { Container } from "react-bootstrap";

import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div>
      <div className="home">
       <Container fluid>
       <br />
        <Header />
     
    


        <Footer />
       </Container>
     </div>
    </div>
  );
}

export default App;
