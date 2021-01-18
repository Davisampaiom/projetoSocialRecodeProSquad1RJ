import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
import { Home, Login, Alertas, Avaliacoes, Cadastro, Covid, Espaco_seguro } from '../../pages';




const Header = () => {
    return (
        <Router>
       <div className="menu">
      
            <Navbar expand="md"  variant="light " className="bg-light ml-5 justify-content-center" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">  
            
            <Nav className="mr-auto">
                <Nav.Link as={Link} href="/" to="/"><p>Espaço seguro</p></Nav.Link>
                <Nav.Link className="ml-5"  as={Link} href="espaco_seguro" to="espaco_seguro"><p>Seu espaço seguro</p></Nav.Link>
                <Nav.Link className="ml-5"  as={Link} href="avaliacoes" to="avaliacoes"><p>Avaliações</p></Nav.Link>
                <Nav.Link className="ml-5"  as={Link} href="alertas" to="alertas"><p>Alertas</p></Nav.Link>
                <Nav.Link className="ml-5"  as={Link} href="covid-19" to="covid-19"><p>Covid-19</p></Nav.Link>
                <Nav.Link className="ml-5" as={Link} href="login" to="login"><p>Login</p></Nav.Link>
                <Nav.Link className="ml-5" as={Link} href="cadastro" to="cadastro"><p>Cadastre-se</p>  </Nav.Link>

            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/"> <Home />  </Route>
                <Route exact path="/home"> <Home />  </Route>
                <Route exact path="/alertas"> <Alertas />  </Route>
                <Route exact path="/avaliacoes"> <Avaliacoes />  </Route>
                <Route exact path="/cadastro"> <Cadastro />  </Route>
                <Route exact path="/covid-19"> <Covid />  </Route>
                <Route exact path="/espaco_seguro"> <Espaco_seguro />  </Route>
                <Route exact path="/login"> <Login />  </Route>                
            </Switch>
        </div>
   
        </Router>
    )
}

export default Header;
