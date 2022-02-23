import React from "react"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {

    return (
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
      </FeedbackProvider>
    )
}

export default App