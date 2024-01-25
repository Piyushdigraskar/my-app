import './ExpenseItem.css';

function ExpenseItems() {
    const expenseDate = new Date(2024, 2, 14);
    const expenseTitle = 'Car Insurance';
    const expensePrice = '$234.1';
    const locationOfExpenditure = 'London';
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item-description'>
                <h2>{expenseTitle}</h2>
                <h2>{locationOfExpenditure}</h2>
                <div className='expense-item-price'>{expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItems;