import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// a compenent in react is just a javascript function
//to update state in react you need to define the original element and then also the new updated element
//and call it where it should replace the old element
function ExpenseItem(props) {
const [title, setTitle] = useState(props.title);
console.log('ExpenseItem evaluated by React');

 const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
 };

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description"><h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    )
    }

export default ExpenseItem;
