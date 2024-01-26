import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItems(props) {
    
    
    return (
            //<ExpenseDate/> //we can also write it as self closing
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}></ExpenseDetails>
        </div>
    );
}

export default ExpenseItems;