import { CourseCard } from './components/CourseCard.jsx'
//import CourseCardClass from './components/CourseCardClass.jsx'
import './App.css'

function App() {
  const course= {
    title:'React Course',
    description:'Learn React',
    duration:'3 months',
    instructor:'John Doe',
  }

  return (
  <>
    <CourseCard course={course}/>
  </>
  )
}

export default App
