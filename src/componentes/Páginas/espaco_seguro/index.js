import "./noticias.css";

function Espaco_seguro() {
  return (
    <>
      <div className="container-fluid mainPage">
        <div className="pesquisa">
          <div className="filtro">
            <h2>COVID-19</h2>
            <select name="assuntos" id="assuntos">
              <option value="" selected disabled>
                Filtros
              </option>
              <option value="">Covid-19 no Mundo</option>
              <option value="">Covid-19 no Brasil</option>
              <option value="">Covid-19 em São Gonçalo</option>
              <option value="">Ver todos mais recentes</option>
            </select>
          </div>
          <form>
            <input
              type="search"
              name="pesquisa"
              id="fpesquisa"
              placeholder="Pesquide pelo Assunto   "
            ></input>
            <button for="fpesquisa"></button>
          </form>
        </div>

        <div className="container-noti">
          <div className="conteudo-noti">
            <h1>Últimas Notícias</h1>

            <div className="nav-mural">
              <div className="arrow-left"></div>
              <div className="arrow-right"></div>

              <div className="mural-noti">
                <div className="mural-wrapper">
                  <div className="wrapper-noti">
                    <div className="mini-img">Conteudo uol</div>
       
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">Conteudo uol</div>
                    
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">Conteudo uol</div>
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">Conteudo uol</div>
                    
                  </div>
                </div>

                <div className="clear"></div>
              </div>
            </div>
          </div>

          <div className="conteudo-noti">
            <h1>Videos</h1>

            <div className="nav-mural">
              <div className="arrow-left"></div>
              <div className="arrow-right"></div>

              <div className="mural-noti">
                <div className="mural-wrapper">
                  <div className="wrapper-noti">
                    <div className="mini-img">
                      <video width="100%" height="100%" controls></video>
                    </div>
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">
                      <video width="100%" height="100%" controls></video>
                    </div>
                  </div>
                  <div className="wrapper-noti">
                    <div className="mini-img">
                      <video width="100%" height="100%" controls></video>
                    </div>
                    
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">
                      <video width="100%" height="100%" controls></video>
                    </div>
                  </div>
                </div>

                <div className="clear"></div>
              </div>
            </div>
          </div>

          <div className="conteudo-noti">
            <h1>Artigos</h1>

            <div className="nav-mural">
              <div className="arrow-left"></div>
              <div className="arrow-right"></div>

              <div className="mural-noti">
                <div className="mural-wrapper">
                  <div className="wrapper-noti">
                    <div className="mini-img">Conteudo do Site da OMS</div>
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">
                      Materia do Ministério da Saúde
                    </div>
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">Matéria G1</div>
                  </div>

                  <div className="wrapper-noti">
                    <div className="mini-img">Material Uol</div>
                  </div>
                </div>

                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Espaco_seguro;
