import './ExpenseItem.css';
import Card from './Cards';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItems(props) {
    
    
    return (
            //<ExpenseDate/> //we can also write it as self closing
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}></ExpenseDetails>
        </Card>
    );
}

export default ExpenseItems;