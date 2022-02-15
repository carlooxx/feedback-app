import React, {useState, createContext} from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
const[feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'This item is from context',
        rating: 4
    }
])

    return (
        <FeedbackContext.Provider value={{feedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext