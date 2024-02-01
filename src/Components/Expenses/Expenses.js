import './Expenses.css';
import ExpenseItems from "./ExpenseItem";
import Card from '../UI/Cards';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
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