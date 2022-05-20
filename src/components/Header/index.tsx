import { Container, Content } from './styles';
import { Imgs } from '../../assets/index';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Imgs.logoImg} alt="dt-money-logo" loading="lazy" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}