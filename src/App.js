
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import { useState } from 'react';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: 'london',
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) ,
    location: 'New york'
  },
     
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: 'bouston',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location: 'india',
  },
]
const App =()=> {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <h2>Lets Start!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
