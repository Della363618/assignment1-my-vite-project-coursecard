import  {CourseCard1}  from './components/CourseCard1.jsx'
//import CourseCardClass from './components/CourseCardClass.jsx'
import './App.css'

function App() {
  const course= {
    title:'React Course',
    description:'Learn React',
    duration:'3 months',
    instructor:'John Doe',
    difficulty:'Beginner',
  }

  return (
  <>
    <CourseCard1 course={course}/>
  </>
  )
}

export default App
