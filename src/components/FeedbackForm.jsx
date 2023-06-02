import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid'
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')


    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.length < 10) {
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (text.length > 10) {

            const newFeedback = {
                id: uuidv4(),
                text,
                rating
            }

            console.log(feedbackEdit.edit)
            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
                console.log('editing');
            } else {
                addFeedback(newFeedback)
            }

            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>

                <RatingSelect select={(rating) => { setRating(rating) }} />

                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>

                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm