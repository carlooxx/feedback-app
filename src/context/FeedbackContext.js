import React, {useState, createContext} from "react";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
const[feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'This item is from context 1',
        rating: 1
    },
    {
        id: 2,
        text: 'This item is from context 2',
        rating: 4
    },
    {
        id: 3,
        text: 'This item is from context 3',
        rating: 10
    },
])
const[feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false})
//delete feedback
const handleDelete = (id) => { 
    if(window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}
//add feedback
const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
}
//set item to be updated
const editFeedback = item => {
    setFeedbackEdit({
        item,
        edit: true
    })
}

    return (
        <FeedbackContext.Provider value={{feedback, handleDelete, addFeedback, editFeedback, feedbackEdit}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext