"use client";
import GlobeICON from "./GlobeIcon";
import SearchICON from "./SearchIcon";
import style from '../styles/Header.module.css'
import { useState } from "react";
export default function Header() {
    interface LinksInterface{
        name: string;
        url: string;
    }
    const Links =[
        {name: 'Inicio', url: '/'},
        {name: 'Sobre-nós', url: '/sobre'},
        {name: 'Features', url: '/features'}
    ]

    const [link] = useState<LinksInterface[]>(Links);
    
    return(
        <header className={style.header}>
        <div>
          <GlobeICON/>
          <span className={style.logoText}>Uninter Commnity</span>
          <span className={style.logoTextSegundary}>Ciências da Computação</span>
        </div>
        {/**area de navegaçao de links */}
        <nav className={style.nav}>
          <ul className={style.navList}>
            {link.map((item, index) => (
            <li key={index} className={style.navItems}>
              <a className={style.navLinks} href={item.url}>
                <span className={style.navText}>{item.name}</span>
              </a>
            </li>
            ))}
          </ul>
          </nav>
          {/** Area de pesquisa
           * esses input irar pecorrer os titulos dos conteudos dos nossos guias
           */}
          <div>
            <input type="search" placeholder="search conetent" />
            <SearchICON/>
            <button>button search submit</button>
          </div>
        
      </header>
    )
}