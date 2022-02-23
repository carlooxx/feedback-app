import React, {useState, createContext, useEffect} from "react";
import axios from "axios";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const[isLoading, setIsLoading] = useState(true)
const[feedback, setFeedback] = useState([])
const[feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false})

useEffect(() => {
    fetchFeedback()
},[])

//fetch feedback
const fetchFeedback = async () => {
    const response = await axios.get("/feedback?_sort=id&_order=desc");
    const data = await response.data;

    setFeedback(data)
    setIsLoading(false)
}

//delete feedback
const handleDelete = async (id) => { 
    if(window.confirm('Are you sure you want to delete?')) {
        await axios.delete(`/feedback/${id}`)
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}
//add feedback
const addFeedback = async (newFeedback) => {
    const response = await axios.post('/feedback', newFeedback)
    const data = await response.data
    setFeedback([data, ...feedback])
}
//set item to be updated
const editFeedback = item => {
    setFeedbackEdit({
        item,
        edit: true
    })
}
const updateFeedback = async (id, updatedItem) => {
    const response = await axios.put(`/feedback/${id}`, updatedItem)
    const data = await response.data;
    setFeedback(
        feedback.map((item) => (item.id === id ? {...item, ...data} : item))
    )
}

    return (
        <FeedbackContext.Provider value={{feedback, handleDelete, addFeedback, editFeedback, feedbackEdit, updateFeedback, isLoading}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext