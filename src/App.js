import { useState } from "react"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import feedbackData from './data/FeedbackData'

function App() {
const[feedback, setFeedback] = useState(feedbackData)

    return (
        <>
          <Header />
          <div className="container">
              <FeedbackList feedback={feedback}/>
          </div>
        </>
    )
}

export default App