import './meusalertas.css';



  
function Alertas() {
    return(

        <div className="container-fluid mainPage">

                <div className="container-alertas">

                    <div className="meus-alertas">
                        <a href="#" className="titulo one">Meus Alertas</a>

                        <div className="alertas">
                            <div className="mini-img"></div>
                            <div className="info-alerta">
                                <h3>João Donato</h3>
                                <p>Eu gostaria de pedir atenção a todas as pessoas que precisam frequentar a Padaria do Seu Zé. Os funcionários estão usando a máscara no queixo. Muita atenção </p>
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
                                <h3>Maria José</h3>
                                <p>Na Rua Dona Cacilda está havenp toda semana uma intensa aglomeração de pessoas em bares da região.</p>
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
                                <h3>José das Couves</h3>
                                <p>Está muito perigoso frequentar a praça pública do bairro por volta das 19:00h, muitas pessoas estão se aglomerando sem o uso de máscaras </p>
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
                                <h3>Ivan Cardoso</h3>
                                <p>O mercado 2020 não está disponibilizando álcool na entrada do estabelecimento e vem permitindo que pessoas sem máscaras circulem pelo interior. Cuidado!</p>
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
                    <div className="container-map">
                        <h2>Minha região</h2>
                        <div className="map" id="map">
                            
                        </div>
                    </div>

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

export default Alertas;

