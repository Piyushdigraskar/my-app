import './Expenses.css';

import Card from '../UI/Cards';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import { useState } from 'react';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpense, SetFilteredExpense] = useState(props.items);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    const filteredExpense = props.items.filter((expense) => expense.date.getFullYear().toString() === selectedYear);
    SetFilteredExpense(filteredExpense);
  };
  



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpense}/>
        <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;