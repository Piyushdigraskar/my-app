import './ExpenseItem.css';
import Card from '../UI/Cards';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItems = (props)=> {
    
    const clickHandeler = ()=>{
        console.log("Clicked")
    }
    const deleteHandeler = ()=>{
        console.log("Deleted")
    }
    return (
            //<ExpenseDate/> //we can also write it as self closing
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}></ExpenseDetails>
            <button onClick={clickHandeler}>Click Here</button>
            <button onClick={deleteHandeler}>Delete</button>
        </Card>
    );
}

export default ExpenseItems;