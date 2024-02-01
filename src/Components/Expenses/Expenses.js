import './Expenses.css';
import ExpenseItems from "./ExpenseItem";
import Card from '../UI/Cards';
import ExpensesFilter from './ExpenseFilter';
const Expenses = (props)=>{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const expenseItems =[];

  for(let i = 0;i<props.item.length;i++){
    expenseItems.push(
      <ExpenseItems key={i} title={props.item[i].title} amount={props.item[i].amount} date={props.item[i].date} location={props.item[i].location}></ExpenseItems>
    )
  }
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseItems}</Card>
    </div>
  );
}

export default Expenses;