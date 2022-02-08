import React from 'react';
import { useState } from 'react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

function FeedbackForm() {
    const[text, setText] = useState()
    const handleTextChange = (e) => {
        setText(e.target.value);
        console.log(text)
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}></input>
                <Button type='submit' version='secondary'>Send</Button>
            </div>
        </form>
    </Card>
  );
}

export default FeedbackForm;
