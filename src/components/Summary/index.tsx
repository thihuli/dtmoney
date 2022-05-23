import { Container } from "./styles";
import { Imgs } from '../../assets/index';
import { useContext } from "react";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
  const data = useContext(TransactionsContext);

  console.log(data)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Imgs.income} alt="entradas" loading="lazy" />
        </header>
        <strong> R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Imgs.outcome} alt="saida" loading="lazy" />
        </header>
        <strong> - R$400,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Imgs.total} alt="total" loading="lazy" />
        </header>
        <strong> R$600,00</strong>
      </div>
    </Container>
  )
}