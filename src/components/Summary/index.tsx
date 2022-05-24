import { Container } from "./styles";
import { Imgs } from '../../assets/index';
import { useTransactions } from '../../hooks/useTransactions';
import { setCurrency } from "../../utils/setCurrency";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions?.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount;
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Imgs.income} alt="entradas" loading="lazy" />
        </header>
        <strong>
          {setCurrency(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Imgs.outcome} alt="saida" loading="lazy" />
        </header>
        <strong> - {setCurrency(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Imgs.total} alt="total" loading="lazy" />
        </header>
        <strong>{setCurrency(summary.total)}
        </strong>
      </div>
    </Container>
  )
}