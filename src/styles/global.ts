import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root { //definindo variaveis com cores
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33CC95;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) { // quando o user estiver com uma tela até 1080p aplique font-size
      font-size: 93.75%; // equivalente a 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; // hackzinho para deixar a fonte com uma melhor visualização
  }

  body, input, textarea, button { // definindo font para essas tag pois não herdam do bady
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer; //define que todos os buttons terá cursosr pointer
  }

  [disabled] { // define essa estilização parat toda tag que estiver disabled
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background-color: var(--background);
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;

    filter: brightness(0.8);
  }
`;