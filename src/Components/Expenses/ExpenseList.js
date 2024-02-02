import './ExpenseList.css';
import ExpenseItems from './ExpenseItem';

const ExpenseList = props => {



    if (props.items.length !== 1) {
        return <ul className='expenses-list__fallback'>

            {
                props.items.map((expense) => (
                    <ExpenseItems
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        location={expense.location}
                    />
                ))
            }

        </ul>
    }
    return <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItems
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                location={expense.location}
            />
        ))}
        {props.items.length === 1 && (
        <h2>Only single Expense here. Please add more...</h2>
      )}
    </ul>
}

export default ExpenseList;