import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// a compenent in react is just a javascript function

function ExpenseItem(props) {
    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description"><h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
    )
    }

export default ExpenseItem;