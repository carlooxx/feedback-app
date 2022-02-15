import React from 'react'
import { useState } from 'react'
import feedbackData from '../data/FeedbackData'
import {v4 as uuidv4} from 'uuid'
import Feedbackstats from '../components/FeedbackStats'
import FeedbackForm from "../components/FeedbackForm"
import FeedbackList from "../components/FeedbackList"
import AboutIconLink from '../components/AboutIconLink'

function Home() {
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
      <FeedbackForm handleAdd={addFeedback}/>
      <Feedbackstats />
      <FeedbackList handleDelete={handleDelete}/>
      <AboutIconLink />
    </>
  )
}

export default Home