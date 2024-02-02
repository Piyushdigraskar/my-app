import './Expenses.css';
import ExpenseItems from "./ExpenseItem";
import Card from '../UI/Cards';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpense, SetFilteredExpense] = useState(props.items);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    const filteredExpense = props.items.filter((expense)=>expense.date.getFullYear().toString() === selectedYear);
    SetFilteredExpense(filteredExpense);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpense.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;