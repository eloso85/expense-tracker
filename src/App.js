import React from 'react';

import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransction from './components/AddTransction';
import { GlobalProvider } from './content/GobalState';



function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList/>
       <AddTransction />
     </div>
    </GlobalProvider>
  );
}

export default App;
