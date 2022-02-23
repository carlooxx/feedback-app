import React, {useState, createContext, useEffect} from "react";
import {v4 as uuidv4} from 'uuid'
import axios from "axios";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
const[feedback, setFeedback] = useState([])
const[feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false})

useEffect(() => {
    fetchFeedback()
},[])

//fetch feedback
const fetchFeedback = async () => {
    const response = await axios.get("http://localhost:5000/feedback?_sort=id&_order=desc");
    const data = await response.data;

    setFeedback(data)
}

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
const updateFeedback = (id, updatedItem) => {
    setFeedback(
        feedback.map((item) => (item.id === id ? {...item, ...updatedItem} : item))
    )
}

    return (
        <FeedbackContext.Provider value={{feedback, handleDelete, addFeedback, editFeedback, feedbackEdit, updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext