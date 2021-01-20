
import './form.css';
import logo from './logo.png'

function Cadastro()  {
    return (

        
        <body>
            

            <div className="container-fluid mainPage">

                <div className="formlogin">

                    
                    
                    <div className="info-form">
                        <br/>
                         <a href="" className="selected">Sou Pessoa Física</a>
                         <a href="">Sou Pessoa Jurídica</a>     
                    </div>

                    <form><br/>
                        <div className="input-wrapper">
                            <input type="text" id="nome" name="nome" placeholder="Nome Completo" required/>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="usuario"  name="usuario" placeholder="Nome de usuário" required/>
                        </div> 

                        <div className="input-wrapper">
                            <input type="text" id="datanascimento" name="datanascimento" placeholder="Data de Nascimento" required/>
                        </div>

                        <div className="input-wrapper">
                            <input type="text" id="email"  name="email" placeholder="E-mail" required/>
                        </div>

                        <div className="input-wrapper">
                            <input type="password" id="senha"  name="senha" placeholder="Senha" required/>
                        </div>

                        <div className="input-wrapper">
                            <input type="checkbox"  name="termos" id="termos" required/>
                            <label for="termos">Concordo com os Termos de Uso do Espaço Seguro</label>
                        </div>
                       
                        <div className="input-wrapper">
                            <input type="submit" className="btn btn-dark "  name="cadastrar" value="Cadastrar"/>
                        </div>

                    </form> 

                   
                </div>

                <div className="titulo-cadastro">
                    <div className="logo">
                        <img src={logo}/>
                        <h2>espaçoseguro</h2>
                    </div>
                    <p>Se puder fique em casa.<br/>
                        Mas se precisar, saia seguro.
                    </p>
                </div>

             </div> 

        </body>
    );
}

export default Cadastro;