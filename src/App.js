import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import feedbackData from './data/FeedbackData'
import Feedbackstats from './components/FeedbackStats'
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid'

function App() {
const[feedback, setFeedback] = useState(feedbackData)

const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}
const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
}

    return (
        <>
          <Header />
          <div className="container">
              <FeedbackForm handleAdd={addFeedback}/>
              <Feedbackstats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
          </div>
        </>
    )
}

export default App