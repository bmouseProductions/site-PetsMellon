import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 90%;

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export const Dados = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -20px;

  @media (min-width: 1200px) {
    width: 100%;
    flex-direction: row;

    div {
      flex: 1;
      padding: 45px;
      font-size: 1.3rem !important;
      text-align: center;
    }
  }
`;

export const Sobre = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100% !important;
  }

  div {
    background-color: transparent;
  }

  @media (min-width: 500px) {
    img {
      width: 50% !important;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-between;

    img {
      width: 40% !important;
    }
  }
`;

export const Produtos = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f52369;
  padding: 5%;

  img {
    border-radius: 20px;
  }

  @media (min-width: 1200px) {
    padding: 10%;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const ProdutoDescricao = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;

  div {
    text-align: center;
  }

  @media (min-width: 1200px) {
    width: 100%;
    text-align: left;
    margin-left: 20px;
  }
`;

export const Customizacao = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    width: 100% !important;
  }

  @media (min-width: 500px) {
    img {
      width: 50% !important;
    }
  }

  @media (min-width: 1200px) {
    width: 100%;
    flex-direction: row;
    gap: 10px;
    padding: 5%;

    img {
      width: 50% !important;
    }
  }
`;
export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    background-color: #4a1976;
  }

  @media (min-width: 780px) {
    width: 40% !important;
    flex-direction: column;
  }
`;

export const Servicos = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: auto;
  align-items: center;
  justify-content: space-between;
  padding: 5%;

  @media (min-width: 1200px) {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
    flex-direction: row;
  }
`;

export const Certificacoes = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
  gap: 30px;

  img {
    width: 40%;
  }

  @media (min-width: 1200px) {
    padding: 10%;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;

    img {
      width: 20%;
    }
  }
`;

export const Contatos = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;

  @media (min-width: 1200px) {
    margin: auto;
    width: 100%;
    margin-top: 30px;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;

    div{
        flex: 1;
    }

    img {
      width: 100% !important;
    }
  }

`;
export const Parceiro = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;

  @media (min-width: 1200px) {
    margin: auto;
    width: 100%;
    margin-top: 30px;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;

    div{
        flex: 1;
    }

    img {
      width: 100% !important;
    }
  }

`;

export const Blogs = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;

  @media (min-width: 1200px) {
    margin: auto;
    width: 50%;
    margin-top: 30px;

    img {
      width: 100% !important;
    }
  }
`;
export const Item = styled.section`
  :hover {
    background-color: #ff9200 !important;
  }

  p,
  a:hover {
    color: white !important;
  }
`;

export const Patense = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  background-color: #4a1976;

  div > div {
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    margin: auto;
    width: 50%;
    margin-top: 30px;

    img {
      width: 30% !important;
    }

    div > div {
      position: relative;
      top: 60px;
      width: 15%;
    }

    div > div {
      height: 200px !important;
      border-radius: 30px !important;

      img {
        width: 70% !important;
      }
    }

    div > div > div {
      background-color: #f58525;
    }
  }
`;
export const Clientes = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f52369;
  padding: 5%;

  img {
    border-radius: 20px;
  }

  @media (min-width: 1200px) {
    gap: 30px;
  }
`;

export const ClientesCards = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  background-color: #4a1976;

  p {
    font-size: 1rem !important;
  }

  @media (min-width: 1200px) {
    margin: auto;
    width: 50%;
    margin-top: 30px;

    img {
      width: 30% !important;
    }

    div > div {
      position: relative;
      top: 60px;
      width: 30%;
    }

    div > div {
      border-radius: 30px !important;
      display: flex;
      align-items: left;
      justify-content: center;
      flex-direction: column;

      p {
        font-size: 0.9rem !important;
      }
    }

    @media (min-width: 1400px) {
      div > div {
        p {
          font-size: 1.1rem !important;
        }
      }
    }
  }
`;


export const BtnUp = styled.a`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:left;
    right: 100%;
    -webkit-filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%)); 
    filter: drop-shadow(0px 0px 3px rgba(0,0,0,0.44));
    padding-bottom: 20px;
    background-color:#f58525 !important;

`
