
import './form.css';

function Login(){
    return (

        
        <body>
     
<div className="page">
            <div className="container">
                <div className="formlogin">
                    
                    <div className="info-form">
                            <h2>Fazer login</h2>
                            <p>Para entrar no seu Espaço Seguro</p>
                    </div>

                    <form>
                        <div className="input-wrapper">
                            <input type="email" name="nome" placeholder="   E-mail" required/>
                        </div>
                        <div className="input-wrapper">
                            <input type="password"  name="senha" placeholder="   Senha" required/>
                        </div>
                        
                        <input type="submit" value="Entrar"/>
                        <div className="rec-senha">
                            <a href="">Esqueceu sua senha?</a>
                        </div>
                    </form> 

                    {/* /* <div className="container-rd">
                        <p>Acesso rapido com</p>
                        <div className="rede-social">
                            <a href="">google</a>
                            <a href="">facebook</a>
                        </div>
                    </div> */}
                </div> 
             </div>  {/* container */}
             </div>
        </body>
    );
}

export default Login;
