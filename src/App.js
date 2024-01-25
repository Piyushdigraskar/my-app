
import './App.css';
import ExpenseItems from './Components/ExpenseItem';

function App() {
  const expense = [
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
  const expenseItems =[];
  for(let i = 0;i<expense.length;i++){
    expenseItems.push(
      <ExpenseItems title={expense[i].title} amount={expense[i].amount} date={expense[i].date} location={expense[i].location}></ExpenseItems>
    )
  }
  return (
    <div className="App">
      <h2>Lets Start!</h2>
      {expenseItems}
    
    </div>
  );
}

export default App;
