
//这个不会；

import React from 'react'

class CourseCardClass extends React.Component(course) {
    render () {
        <div className='course-card'>
            <div className='card-body'>
                <div className='card-image'>
                    <img src={courseImage} alt="courseImage" />
                </div>
                <div className="card-title">
                    <h3>{course.title}</h3>
                </div>
                <div className="card-main">
                    <p>{course.description}</p>
                    <p>{course.duration}</p>
                    <p>{course.instructor}</p>
                </div>
                <div className="card-footer">
                    <p>Online</p>
                </div>
            </div>
        </div>

    }
} 
    

export default CourseCardClass