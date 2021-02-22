import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
import { Home, Login, Alertas, Avaliacoes, Cadastro,  Criar_alerta } from '../../pages';

import styles from './style.css';


const Header = () => {
    return (
        <Router>
       <div className="menu">
      
            <Navbar expand="md"  variant="light " className="bg-light ml-5 justify-content-center" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">  
            
            <Nav className="mr-auto menuItems">
                <Nav.Link as={Link} href="/" to="/"><p>Espaço seguro</p></Nav.Link>
                <Nav.Link className="ml-5"  as={Link} href="avaliacoes" to="avaliacoes"><p>Avaliações</p></Nav.Link>
                <Nav.Link className="ml-5"  as={Link} href="alertas" to="alertas"><p>Alertas</p></Nav.Link>
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
                <Route exact path="/login"> <Login />  </Route>  
                <Route exact path="/criar_alerta"> <Criar_alerta />  </Route>              
            </Switch>
        </div>
   
        </Router>
    )
}

export default Header;
