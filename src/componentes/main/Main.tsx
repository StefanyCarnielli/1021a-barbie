import Filme from './../filme/Filme'
import './Main.css'
export default function Main(){
    let textodigitado = 'Barbie'
    function TrataTexto(){
        console.log("Digitado")
        textodigitado = "BARBIE"
    }
    return(
   <>
 <div className="campo_pesquisa">
   <p>Busque um filme:</p>
        <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme' onChange = {TrataTexto} />
        <p>Digitado:</p>
    </div>

    
        <main className="content-main">
            <Filme titulo='Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.png'
            />
        
        <Filme titulo='Filme Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/poster.png'
            />
                <Filme titulo='Filme Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/dualipa.jpg'
            />




</main>
        </>
    )
}