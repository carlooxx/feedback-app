import React, {useContext} from 'react';
import { useState } from 'react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import Rating from '../components/Rating'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const {addFeedback} = useContext(FeedbackContext)
    const[text, setText] = useState('')
    const[rating, setRating] = useState(10)
    const[message, setMessage] = useState('')
    const[btnDisabled, setBtnDisabled] = useState(true)
    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback ={
                text,
                rating
            }
            addFeedback(newFeedback)
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <Rating select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}></input>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div> }
        </form>
    </Card>
  );
}

export default FeedbackForm;
