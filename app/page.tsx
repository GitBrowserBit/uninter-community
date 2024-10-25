import EatStraw from "@/components/eatStraw";
import style from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={style.fundo}>
      
          <header className={style.header}>
            <div>logo</div>
            {/**area de navegaçao de links */}
            <nav className={style.nav}>
              <ul className={style.ul}>
                <li className={style.li}>
                  <a href="/" className={style.a}>
                    <span>Links</span>
                  </a>
                </li>
                <li className={style.li}>
                  <a href="/" className={style.a}>
                    <span>Links</span>
                  </a>
                </li>
                <li className={style.li}>
                  <a href="/" className={style.a}>
                    <span>Links</span>
                  </a>
                </li>
                <li className={style.li}>
                  <a href="/" className={style.a}>
                    <span>Links</span>
                  </a>
                </li>
              </ul>
              {/** Area de pesquisa
               * esses input irar pecorrer os titulos dos conteudos dos nossos guias
               */}
              <div className={style.search}>
                <input type="search" placeholder="search content" className={style.searchinput}/>
                <button className={style.botaosearch}>botao search </button>
              </div>
            </nav>
          </header>
          {/**tag main onde ficarar nosso conteudo */}
          <main>
            {/**aqui é o container iniciar com uma imagem
             * onde pode ser os boas vindas e tera botoes q irar consultar sobre o site e iniciar o guiar
             */}
            <div className={style.boasvindas}>
              <h1 className={style.headerh1}>Bem-vindo ao Uninter Community</h1>
              <span>
                One stop solution for your services! Order any service anytime
              </span>
              <button>Sobre nos</button>
              <button>Iniciar</button>
            </div>
            {/**
             * aqui terar uns conteudos inicial comou About us ("sobre nos" sobre o site)
             * featues como uns dos assuntos importante ou uma apresentação
             */}
        
        <div className="minContentInicial">
          <div>
            <img src="#" alt="image component" />
          </div>
          <div>
            {
              // sobre nos, sobre o site
            }
            <div>
              <i>icon</i>
              <span>sobre o site</span>
            </div>
            <div>
              <h1>
                titulo sobre o site
              </h1>
              <p>
                Phasellus dictum ipsum nec rutrum tristique. Aliquam a mauris
                lacinia, condimentum tellus a, mattis nisl. Sed hendrerit
                viverra elit tempus venenatis. Morbi vel faucibus odio. Nunc
                vulputate convallis scelerisque. Mauris sollicitudin elit eget
                ante pharetra, nec suscipit nisl sagittis. Suspendisse euismod a
                augue pretium dignissim. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Sed do eiusmod
                tempor incididunt dolore magna aliqua. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Sed do eiusmod tempor incididunt dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Sed do eiusmod tempor incididunt
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Sed do eiusmod
                tempor incididunt dolore magna aliqua. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Sed do eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
          </div>
          {
            //Features onde tera algumas informações do site
          }
          <div>
            <span>Features #01</span>
            <h1>Excellent Reputation</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Sed do eiusmod tempor incididunt
              dolore magna aliqua.
            </p>
            <button>Get in Touch</button>
            <div>
              <img src="#" alt="Imagen component" />
            </div>
          </div>
          <div>
            <span>Features #03</span>
            <h1>Tons Of Options</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Sed do eiusmod tempor incididunt
              dolore magna aliqua.
            </p>
            <button>Booking</button>
            <div>
              <img src="#" alt="Imagen component" />
            </div>
          </div>
        </div>
        {
          //Area dos cards onde ficarar os possiveis assuntos com regras links e outras orientações
        }
        <div className="CardsContent">
          <div>
            <h1>(Tours) - Elevate Your Travel Experience</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              perferendis deleniti illum necessitati voluptates ipsum, ratione
              dolorum veritatis minus mollitia placeat.
            </span>
          </div>
          {
            //cards
          }
          <div>
            <div>
              <img src="#" alt="image component" />
              <h1>Australia</h1>
              <span>Lorem inpsum....</span>
              <a href="/">Read more</a>
            </div>
            <div>
              <img src="#" alt="image component" />
              <h1>Australia</h1>
              <span>Lorem inpsum....</span>
              <a href="/">Read more</a>
            </div>
            <div>
              <img src="#" alt="image component" />
              <h1>Australia</h1>
              <span>Lorem inpsum....</span>
              <a href="/">Read more</a>
            </div>
            <div>
              <img src="#" alt="image component" />
              <h1>Australia</h1>
              <span>Lorem inpsum....</span>
              <a href="/">Read more</a>
            </div>
            <div>
              <button>See More</button>
            </div>
          </div>

          {
            //sobre os Criadores
            //assuntos tals como sua função no desenvolvimento e etc
          }
          <div>
            <div>
              <div>
                <h1>Our Clients Feedback</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore perferendis deleniti illum necessitati voluptates
                  ipsum, ratione dolorum veritatis minus mollitia placeat.
                </p>
              </div>
              <div>
                <img src="#" alt="imagem profile component" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem Ipsum is simply dummy text of the printing and Quis
                  suspendisse typesetting ipsum dolor sit amet, consectetur.
                </p>
                {
                  //esse span indicar sua função q vc execeu no projeto
                }
                <span>desenvolverdor frontend</span>
              </div>
              <div>
                <img src="#" alt="imagem profile component" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem Ipsum is simply dummy text of the printing and Quis
                  suspendisse typesetting ipsum dolor sit amet, consectetur.
                </p>
                {
                  //esse span indicar sua função q vc execeu no projeto
                }
                <span>desenvolverdor frontend</span>
              </div>
              <div>
                <img src="#" alt="imagem profile component" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem Ipsum is simply dummy text of the printing and Quis
                  suspendisse typesetting ipsum dolor sit amet, consectetur.
                </p>
                {
                  //esse span indicar sua função q vc execeu no projeto
                }
                <span>desenvolverdor frontend</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/**
       * footer do site
       */}
      <footer>
        <div>
          <div>
            <span>logo</span>
            <p>...</p>
            <input type="search" />
            <button>search</button>
          </div>
          <div>
            <h1>outros serviços</h1>
            <ul>
              <li><a href="#">links</a></li>
              <li><a href="#">links</a></li>
              <li><a href="#">links</a></li>
              <li><a href="#">links</a></li>
            </ul>
          </div>
          <div>
            <h1>colaborações ou a estruturas do site</h1>
            <ul>
              <li><a href="#">links</a></li>
              <li><a href="#">links</a></li>
              <li><a href="#">links</a></li>
              <li><a href="#">links</a></li>
            </ul>
          </div>
          <div>
            <h1>contatos dos desenvolvedores</h1>
            <ul>
              <li><span>contato</span></li>
              <li><span>contato</span></li>
              <li><span>contato</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
