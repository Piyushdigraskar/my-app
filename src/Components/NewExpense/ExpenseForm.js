import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');

    // const [userInput, setUserInput] = useState(
    //     {
    //         setEnteredTitle:'',
    //         setEnteredAmount:'',
    //         setEnteredDate:'',
    //         setEnteredLocation:'',
    //     }
    // );

    const NewTitleHandeler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, setEnteredTitle:event.target.value};
        // });
    }
    const NewAmountHandeler = (event) => {
        setEnteredAmount(event.target.value);
        //   setUserInput((prevState)=>{
        //     return {...prevState, setEnteredAmount:event.target.value};
        // });
    }
    const NewDateHandeler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, setEnteredDate:event.target.value};
        // });
    }
    const NewLocationHandeler = (event) => {
        setEnteredLocation(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, setEnteredLocation:event.target.value};
        // });
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            location: enteredLocation
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={NewTitleHandeler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={NewAmountHandeler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019/01/01' max='2022/12/31' onChange={NewDateHandeler} />
                </div>
                <div className='new-expense__control'>
                    <label>Location</label>
                    <input type="text" value={enteredLocation} onChange={NewLocationHandeler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
}
export default ExpenseForm;