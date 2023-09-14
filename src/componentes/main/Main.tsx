import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType={
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
   // let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
        //específicas
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[]= [
        {
            id: 1,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            id: 2,
            titulo:'Filme Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/poster.png'
        },
        {
            id: 3,
            titulo:'Filme Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/dualipa.jpg'
        }
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){ 
        console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
    }
    return(
   <>
 <div className="campo_pesquisa">
   <p>Busque um filme:</p>
        <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme' onChange = {TrataTexto} />

        
(!texto)? <p>Resultados para: {texto} </p>

        

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