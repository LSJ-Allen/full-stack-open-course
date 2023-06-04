import { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad, all, average, positive} = props
  if(good===0 && bad===0 && neutral===0){
    return(
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good}/>
        <StatisticLine text={"netural"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine text={"average"} value={average} />
        <StatisticLine text={"positive"} value={positive + '%'} />
      </tbody>
    </table>
    </>
  )
}

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text} {value}</td></tr>



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveRate, setPositiveRate] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedPositive = positive + 1
    const updatedTotal = total + 1
    const updatedTotalScore = totalScore + 1

    setGood(updatedGood);
    setPositive(updatedPositive);
    setTotal(updatedTotal);
    setTotalScore(updatedTotalScore);
    setAverage(updatedTotalScore/updatedTotal);
    setPositiveRate(updatedPositive/updatedTotal*100)
  }

  const handleNeutralClick = () =>{
    const updatedNeutral = neutral + 1
    const updatedTotal = total + 1

    setNeutral(updatedNeutral);
    setTotal(updatedTotal);
    setAverage(totalScore/updatedTotal);
    setPositiveRate(positive/updatedTotal*100)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedTotal = total + 1
    const updatedScore = totalScore - 1

    setBad(updatedBad);
    setTotal(updatedTotal);
    setTotalScore(updatedScore);
    setAverage(updatedScore/updatedTotal);
    setPositiveRate(positive/updatedTotal*100)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={handleGoodClick}/>
      <Button text={"neutral"} handleClick={handleNeutralClick}></Button>
      <Button text={"bad"} handleClick={handleBadClick}></Button>
      <Statistics good={good} neutral={neutral} bad={bad} all={total} 
      average={average} positive={positiveRate}/>
    </div>
  )
}

export default App
