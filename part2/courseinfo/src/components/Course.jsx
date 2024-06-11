import { Header } from "./Header"
import { Content } from "./content"

const Course = ({course}) => {
    const total = course.parts.reduce((sum , part) => sum + part.exercises , 0) 
    return (
      <>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <h3>Total of {total} exercises</h3>
      </>
    )
  }
  
  export default Course