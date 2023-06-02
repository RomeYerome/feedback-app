// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)

    const avg = feedback.reduce((accumulator, currentItem) => accumulator + currentItem.rating, 0) / feedback.length

    return (
        <div className="feedback-stats">
            <h4>
                {`${feedback.length} ${feedback.length > 1 ? 'Reviews' : 'Review'}`}
            </h4>
            <h4>Average Rating: {isNaN(avg) ? 0 : avg.toFixed(1).replace(/.0$/, '')}</h4>
        </div>
    )
}


export default FeedbackStats