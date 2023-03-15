import styled from "styled-components";
import test from "../assets/image/bg-quemsomos.png"
import dados from "../assets/image/bg-dados.png"

export const Container = styled.div`

    margin: auto;
    width: 90%;

    @media (min-width:780px) {
        width: 80%;
    }
`

export const Dados = styled.section`

    width: 100%;

    display: flex;
    flex-direction:column;
    position: relative;
    top: -20px;
    
   

    @media (min-width:780px) {
        width: 100%;
        flex-direction: row;
        
        div{
            flex: 1;
            padding: 45px;
            font-size: 1.3rem !important;
            text-align: center;
        }
    }
`

export const Sobre = styled.section`

    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    div{
        background-color: transparent;
    }

    @media (min-width:780px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }

`

export const Produtos = styled.section`

    margin: auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background-color: #F52369;
    padding:5%;
  
    img{
        border-radius: 20px;
    }

    @media (min-width:780px) {
        padding: 10%;
        flex-direction: row;
        justify-content: space-between;
        gap: 30px;
    
    }

`

export const ProdutoDescricao = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    gap: 20px;


    div{
        text-align: center;
    }

    @media (min-width:780px) {
        width: 100%;
        text-align:left;
        margin-left: 20px;
    }

`

export const Customizacao = styled.section`

    margin: auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding:5%; 
    
    background-image: url(${test});
    background-position:top left;

    @media (min-width:780px) {

        width: 100%;
        align-items: center !important;
        flex-direction: column;
        padding:10%; 
        gap: 10px ;


        img{ 
            display: block !important;
            width: 40% !important;
            margin: auto;
            border-radius:20px;
            margin-top: 100px;
            
        }
        
    }

`
export const Cards = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    

    div{
        background-color: #4A1976;
    }

    @media (min-width:780px) {
        width: 40% !important;
        flex-direction:column;

    }

`

export const Servicos = styled.section`

    display: flex;
    width: 100%;
    flex-direction:column;
    height: auto;
    align-items: center;
    justify-content: space-between;
    padding: 5%;

    @media (min-width:780px) {
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
        flex-direction: row;
    }

`

export const Certificacoes = styled.section`

    margin: auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding:5%;
    gap:30px;


    img{
        width: 50%;
    }


    @media (min-width:780px) {
        padding: 10%;
        flex-direction: row;
        justify-content: space-between;
        gap: 30px;

        img{
            width:20%
        }
    
    }

`



