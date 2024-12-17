import styled from "styled-components";

export const Customizacao = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  /*  align-items: center; */
  justify-content: center;
  width: 100%;
  padding: 5%;

  @media (min-width: 780px) {
    width: 100%;
    /* align-items: center !important; */
    flex-direction: column;
    gap: 10px;
  }

  ol {
    font-size: 25px;
    font-weight: bold;
  }

  span {
    font-weight: bold;
    font-size: 25px;
  }
`;
