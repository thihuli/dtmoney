import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { api } from "../services/api";

type TransactionsProps = {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
}

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>;

type TransactionContextData = {
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context
};