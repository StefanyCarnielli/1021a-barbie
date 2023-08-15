import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div className='logo-header'><img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Barbie_Logo.svg"/>
  </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header