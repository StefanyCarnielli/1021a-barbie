import './Header.css'
import LinkNav from '../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div className='logo-header'><img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Barbie_Logo.svg"/>
  </div>
            <nav>
                <ul>
                    <li><LinkNav url="/" texto='Home'/> </li>
                    <li><LinkNav url="/noticias" texto='Notícia'/></li>
                    <li><LinkNav url="/sobre" texto='Sobre'/></li>
                    <li><LinkNav url="/contato" texto='Contato'/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header