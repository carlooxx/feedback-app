import React from 'react'
import Feedbackstats from '../components/FeedbackStats'
import FeedbackForm from "../components/FeedbackForm"
import FeedbackList from "../components/FeedbackList"
import AboutIconLink from '../components/AboutIconLink'

function Home() {
  return (
    <>
      <FeedbackForm />
      <Feedbackstats />
      <FeedbackList />
      <AboutIconLink />
    </>
  )
}

export default Home