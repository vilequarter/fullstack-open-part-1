import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header name={'give feedback'}/>
      <Button text={'good'} onClick={() => setGood(good + 1)}/>
      <Button text={'neutral'} onClick={() => setNeutral(neutral + 1)}/>
      <Button text={'bad'} onClick={() => setBad(bad + 1)}/>

      <Header name={'statistics'}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if(total === 0){
    return <div>No feedback given</div>
  }

  return(
    <table>
      <tbody>
        <StatisticLine text={'good'} value={good}/>
        <StatisticLine text={'neutral'} value={neutral}/>
        <StatisticLine text={'bad'} value={bad}/>
        <StatisticLine text={'all'} value={total}/>
        <StatisticLine text={'average'} value={average}/>
        <StatisticLine text={'positive'} value={positive + '%'}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )
}