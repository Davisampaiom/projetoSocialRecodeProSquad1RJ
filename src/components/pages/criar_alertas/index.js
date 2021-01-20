import './meusalertas.css';

// import { Mapinha } from "../../modulos";

  
function Criar_alerta() {
    return(

        <div className="container-fluid mainPage">

                <div className="container-alertas">

                    <div className="meus-alertas">
                        <a href="#" className="titulo one">Meus Alertas</a>

                        <div className="alertas">
                            <div className="mini-img"></div>
                            <div className="info-alerta">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam est nec metus commodo porta. Sed consequat rutrum lacinia. . </p>
                            </div>

                            <div className="permisao">
                                <p>Deseja retirar anonimato</p>

                                <button>Sim</button>
                                <button>Não</button>
                            </div>
                            <div className="clear"></div>
                            <hr/>
                        </div>

                        <div className="alertas">
                            <div className="mini-img"></div>
                            <div className="info-alerta">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam est nec metus commodo porta. Sed consequat rutrum lacinia. . </p>
                            </div>

                            <div className="permisao">
                                <p>Deseja retirar anonimato</p>

                                <button>Sim</button>
                                <button>Não</button>
                            </div>
                            <div className="clear"></div>
                            <hr/>
                        </div>
                        

                        <div className="alertas">
                            <div className="mini-img"></div>
                            <div className="info-alerta">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam est nec metus commodo porta. Sed consequat rutrum lacinia. . </p>
                            </div>

                            <div className="permisao">
                                <p>Deseja retirar anonimato</p>

                                <button>Sim</button>
                                <button>Não</button>
                            </div>
                            <div className="clear"></div>
                            <hr/>
                        </div>
                        

                        <div className="alertas">
                            <div className="mini-img"></div>
                            <div className="info-alerta">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam est nec metus commodo porta. Sed consequat rutrum lacinia. . </p>
                            </div>

                            <div className="permisao">
                                <p>Deseja retirar anonimato</p>

                                <button>Sim</button>
                                <button>Não</button>
                            </div>
                            <div className="clear"></div>
                            <hr/>
                        </div>
                        
                        

                        <div className="mini-menu">
                            <a href="">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                            <a href="">...</a>
                            <a href="">20</a>
                            <a href="">21</a>
                        </div>
                        
                        <div className="btn-alerta">
                            <button>25 Alertas</button>
                            <div className="clear"></div>
                        </div>

                        
                    </div>

                </div>

                <div className="container-regiao-contato">
                    {/* <div className="container-map">
                        <h2>Minha região</h2>
                        <div className="map" id="map">
                            <Mapinha />
                        </div>
                    </div> */}

                    <div className="contato">
                        <h2 className="titulo">Contatos Oficais</h2>
                        <div className="info-contatos">
                            <h4>Prefeitura Municipal de São Gonçalo</h4>
                            <a href="">https://www.saogoncalo.rj.gov.br/</a>
                            <h4>(21) 2199-6300</h4>
                            <div className="linha"></div>
                            <h4>Policia Militar</h4>
                            <h4>190</h4> 
                            <div className="linha"></div> 
                        </div>
                    </div>
                </div>

            </div>

    );
}

export default Criar_alerta;

