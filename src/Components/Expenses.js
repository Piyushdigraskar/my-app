import './Expenses.css';
import ExpenseItems from "./ExpenseItem";
import Card from './Cards';
function Expenses(props){
    const expenseItems =[];
  for(let i = 0;i<props.item.length;i++){
    expenseItems.push(
      <ExpenseItems title={props.item[i].title} amount={props.item[i].amount} date={props.item[i].date} location={props.item[i].location}></ExpenseItems>
    )
  }
  return (
    <Card className="expenses">{expenseItems}</Card>
  );
}

export default Expenses;