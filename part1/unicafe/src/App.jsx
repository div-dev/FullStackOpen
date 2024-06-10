import { useState } from 'react'

const Display = (props) =>{
  return (
    <div>
      {props.text} ={'>'} {props.value}
    </div>
  )
}

const Stats = ({good, bad, neutral}) =>{

  const total = good + bad +neutral
  const average = total !== 0 ? (good - bad)/total : 0
  const positive = total !== 0 ? (good/total)*100 : 0 
  console.log(total)
  return(
    <div>
      <div>Total {total} </div>
      <div>average {average} </div>
      <div>positive {positive} </div>
    </div>
  )
} 



const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={()=> setGood(good+1)} text='good'/>
      <Button handleClick={()=> setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={()=> setBad(bad+1)} text='bad'/>
      
      
      <h1>Statistics</h1>
      <Display text='good' value={good}/>
      <Display text='nuetral' value={neutral}/>
      <Display text='bad' value={bad}/>
      <Stats good={good} bad={bad} neutral={neutral}/>

      
    </div>
  )
}

export default App