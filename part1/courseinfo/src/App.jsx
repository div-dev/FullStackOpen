const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
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

const Content = (props) =>{
  console.log(props)
  return(
    <div>
      <Part props={props.parts[0]}/>
      <Part props={props.parts[1]} />
      <Part props={props.parts[2]} />
    </div>
  )
}

const Total = (props)=>{
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises +props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', exercises:10 },
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises:14},
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )

}

export default App
