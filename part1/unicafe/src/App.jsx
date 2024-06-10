import { useState } from 'react'



const StatisticsLine = ({value , text}) =>{
  if (value !== 0 ){
  return (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
  )
}
}

const Stats = ({good, bad, neutral}) =>{

  const total = good + bad +neutral
  const average = total !== 0 ? (good - bad)/total : 0
  const positive = total !== 0 ? (good/total)*100 : 0 
  if(good !==0 || bad !==0 || neutral!==0){
  return(
    <div>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={total}/>
      <StatisticsLine text="average" value={average}/>
      <StatisticsLine text="positive" value={positive}/>
    </div>
  )
}else return <div>No FeedBack given</div>
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
      <Stats good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App