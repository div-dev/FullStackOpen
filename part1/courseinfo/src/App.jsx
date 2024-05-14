
const Header = ({course}) =>{
  console.log(course.name)
  return(
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = (props)=>{
  return(
    <div>
      <p>{props.props.name} {props.props.exercises}</p>
    </div>
  )
}

const Content = ({course}) =>{
  console.log(course)
  return(
    <div>
      <Part props={course.parts[0]}/>
      <Part props={course.parts[1]} />
      <Part props={course.parts[2]} />
    </div>
  )
}

const Total = ({course})=>{
  const total = course.parts[0].exercises+course.parts[1].exercises +course.parts[2].exercises
  return(
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }
  


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )

}

export default App
