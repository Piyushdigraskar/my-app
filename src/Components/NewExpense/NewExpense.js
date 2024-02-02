//import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        isEditing(false);
    }
    const startEditingHandler = ()=>{
        setIsEditing(true)
    }
    const stoptEditingHandler = ()=>{
        setIsEditing(false)
    }
    if(!isEditing){
        return <div className='new-expense'>
            <button type='button' onClick={startEditingHandler}>Add New Expense</button>
        </div>
    }
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stoptEditingHandler}/>
            
        </div>
    );
}
export default NewExpense;