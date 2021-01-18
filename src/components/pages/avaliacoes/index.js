import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Jumbotron, Row, Col, Pagination } from 'react-bootstrap';

class Avaliacoes extends React.Component {
    render() {
        return (

            <Container>
                <Row>
                    <Col sm-8>
                        <h4>Avaliações recentes | Supermercados</h4>
                    </Col>
                    <Col sm-4 m>
                        <input type="search" placeholder="Pesquisar pelo nome do estabelecimento ou bairro" style={{ width: '600px' }}></input>
                    </Col>
                </Row>


                <Jumbotron style={{ backgroundColor: '#53565A', color: '#fff' }}>

                    <div>
                        <div>
                            <h5>Cliente 01</h5>
                            <p>O mercado Salazar não vem cumprindo com as medidas necessárias para conter o avanço da Covid, e suas promoções promovem aglomerações</p>
                        </div>
                        <div>
                            <h5>Mercado Salazar</h5>
                            <p>A rede Salazar entende e sempre pretende cumprir com os mais rigorosos controles sanitários.</p>
                        </div>
                        <div>
                            <h5>Cliente 02</h5>
                            <p>Eles realmente vem melhorando as medidas ultimamente.</p>
                        </div>
                    </div>

                    <Row>
                        <Col>
                            <Pagination>
                                <li class="active"><a href="">1</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="">3</a></li>
                                <li><a href="">4</a></li>
                                <li><a href="">5</a></li>
                            </Pagination>
                        </Col>
                    </Row>
                </Jumbotron>

                <Card>
                    <h4>Ranking | Supermercados</h4>
                </Card>

                <Jumbotron style={{ backgroundColor: '#B0C4DE' }}>
                    <Row>
                        <Col style={{textAlign:'center'}}>
                            <Card style={{backgroundColor:'#53565A', color:'#fff'}}><h5>Melhores avaliados</h5></Card>
                            <br></br>
                            <p>1. Mercado Líder</p>
                            <p>2. Mercado Oba</p>
                            <p>3. Mercado Custo</p>
                        </Col>

                        <Col style={{textAlign:'center'}}>
                            <Card style={{backgroundColor:'#53565A', color:'#fff'}}><h5>Piores avaliados</h5></Card>
                            <br></br>
                            <p>1. Mercado Patinho</p>
                            <p>2. Mercado Sabão</p>
                            <p>3. Mercado Porco Fino</p>
                        </Col>
                    </Row>
                </Jumbotron>

            </Container>
        );
    }
}

export default Avaliacoes 

