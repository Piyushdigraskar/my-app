
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


const App =()=> {
  const expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount:'94.12$',
      date: new Date(2020, 7, 14),
      location: 'london',
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: '799.49$',
      date: new Date(2021, 2, 12) ,
      location: 'New york'
    },
       
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: '294.67$',
      date: new Date(2021, 2, 28),
      location: 'bouston',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: '450$',
      date: new Date(2021, 5, 12),
      location: 'india',
    },
  ]

  const addExpenseHandler = (expense)=>{
    console.log(expense);
  }
  return (
    <div className="App">
      <h2>Lets Start!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expense}></Expenses>
    </div>
  );
}

export default App;
