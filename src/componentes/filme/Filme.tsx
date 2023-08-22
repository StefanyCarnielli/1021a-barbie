import Imagem from "./../../assets/img/barbie.png"
import './Filme.css'
function Filme(){
    return(
        <div className="filme-content">
            <img src={Imagem} alt="" />
            <div className="text-barbie">
                <h1>Barbie</h1>
              

            </div>
        </div>
    )
}

export default Filme