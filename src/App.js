import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import feedbackData from './data/FeedbackData'
import Feedbackstats from './components/FeedbackStats'

function App() {
const[feedback, setFeedback] = useState(feedbackData)

const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}

    return (
        <>
          <Header />
          <div className="container">
              <Feedbackstats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
          </div>
        </>
    )
}

export default App