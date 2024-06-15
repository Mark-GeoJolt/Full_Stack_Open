import { useState } from 'react'

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="all" value={props.all}/>
        <StatisticsLine text="average" value={(props.good - props.bad)/props.all} />
        <StatisticsLine text="positive" value={props.good/props.all * 100} text2="%"/>
      </tbody>
    </table> 
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value} {props.text2}</td>
      </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" onClick={() => setBad(bad + 1)}/>
      <h1>statistics</h1>

      {(good === 0 && neutral === 0 && bad === 0) 
        ? <p>No feedback given</p>
        : (
          <>
            <Statistics text="good" good={good} neutral={neutral} bad={bad} all={all}/>
          </>
        )
      }
    </div>
  )
}

export default App
