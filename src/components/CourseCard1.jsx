//assignment2 

import './CourseCard.css'
import React, {useState} from 'react'

export const CourseCard1 = ({ course}) => {
    const { title, description, duration, instructor, difficulty} = course;
    const [showReviewInput, setShowReviewInput] = useState(true);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [enrollCount,setEnrollCount] = useState(0);
    const enrollButtonText= difficulty === "Beginner" ? "Start Learning Now!" : "Enroll";

   
    const handleToggleEnroll =()=> {
        setIsEnrolled(!isEnrolled)
        setEnrollCount(enrollCount + 1)
    }

    const handleToggleReviewInput = () => {
        setShowReviewInput (!showReviewInput)
    }
    return (
        <div className='course-card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{duration}</p>
            <p>{instructor}</p>
            {/* //enroll button  */}
            <button onClick={handleToggleEnroll}>{enrollButtonText}</button>
            {/* review button  */}
            <p>'you have enrolled: {enrollCount}'</p>
            {isEnrolled && 
            <div>
                {showReviewInput && <input type="text" placeholder="write your review" />}
                <button onClick={handleToggleReviewInput}>Submit your review</button>
            </div> }

        </div>
    )
}