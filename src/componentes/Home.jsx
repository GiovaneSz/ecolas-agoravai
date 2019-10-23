import React from 'react';
import '../componentes/HomeDecore.scss';
import Silvio from './silvinho.jpg';


const Home = () => {
  return (
    <div className="Home">
      <header>
          <a href="">Home</a>
          <a href="">Login</a>
          <a href="">Escolas</a>
          <a href="">Cadastrar</a>
          
      </header>
      <nav>
          <div>
              <h2>Amor por mais educação</h2>
          </div>
      </nav>
      <section>
          <img src={Silvio} alt=""/>
          <div>
            <div id="div2">
              <p>Você costuma se revoltar com o tamanho da mordida do leão todo mês de abril? Pois aqui está uma boa
                  notícia: em vez de pagar seu imposto de renda ao governo, você pode doá-lo a entidades beneficentes e
                  projetos culturais. Mas, para isso, é preciso que as contribuições sejam feitas a instituições
                  específicas e ainda neste ano, na maioria dos casos.

                  Contam com a possibilidade de abatimento do imposto a pagar as contribuições às instituições que se
                  enquadram nas regras de doações com incentivos fiscais.

                  Assim sendo, as doações incentivadas só podem ser feitas aos: fundos municipais, estaduais, distrital e
                  nacional da criança e do adolescente, que se enquadram no Estatuto da Criança e do Adolescente (ECA)
                  fundos municipais, estaduais, distrital e nacional do idoso; projetos aprovados pelo Ministério da
                  Cultura e enquadrados na Lei de Incentivo à Cultura (Lei Rouanet); projetos aprovados pelo Ministério da
                  Cultura ou pela Agência Nacional de Cinema (Ancine) e enquadrados na Lei de Incentivo à Atividade
                  Audiovisual; projetos aprovados pelo Ministério do Esporte e enquadrados na Lei de Incentivo ao Esporte;
                  e projetos aprovados pelo Ministério da Saúde no âmbito do Programa Nacional de Apoio à Atenção da Saúde
                  da Pessoa com Deficiência (Pronas) ou do Programa Nacional de Apoio à Atenção Oncológica (Pronon).

                  Isto significa que, caso você queira aproveitar o benefício de abater o valor do imposto, será preciso
                  restringir-se a fazer doações aos projetos e fundos citados acima. Qualquer outra doação não poderá ser
                  deduzida do IR do ano que vem. 
              </p>
            </div>
          </div>
        <aside>
        <h2>Passo a passo para fazer sua doação</h2>
         <p></p> 

        </aside>
      </section>
       
      <footer>
          <div id="redes">
      
              <div id="img">
                  <a target="blank" href=""><img  src="facebook.png" alt=""/></a>
                  
                  <h3>Facebook</h3>
              </div>
              <div id="img">
                  <a target="blank" href=""><img src="instagram.png" alt=""/></a>
                  
                  <h3>Instagram</h3>
              </div>
              <div id="img">
                  <a target="blank" href=""><img src="whatsapp.png" alt=""/></a>
                  <h3>Whatsapp</h3>
              </div>



          </div>
      </footer>

    </div>
  );
}

export default Home;