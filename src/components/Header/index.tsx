import { useState } from 'react';
import Modal from 'react-modal';
import { Container, Content } from './styles';
import { Imgs } from '../../assets/index';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <img src={Imgs.logoImg} alt="dt-money-logo" loading="lazy" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
        
      </Content>
    </Container>
  )
}