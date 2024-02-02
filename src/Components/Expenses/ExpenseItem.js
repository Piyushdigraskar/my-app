import React from 'react';
import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Cards';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItems = (props)=> {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const clickHandeler = ()=>{
        setTitle('Updated');
        console.log(title);
    }
    const amountHandeler = ()=>{
        setAmount('100$')
        console.log(amount);
    }
    const deleteHandeler = ()=>{
        console.log("Deleted")
    }
    return (
            //<ExpenseDate/> //we can also write it as self closing
        <li>
            <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={title} location={props.location} amount={amount}></ExpenseDetails>
            <button onClick={clickHandeler}>Click Here</button>
            <button onClick={amountHandeler}>Initial Price</button>
            <button onClick={deleteHandeler}>Delete</button>
        </Card>
        </li>
    );
}

export default ExpenseItems;