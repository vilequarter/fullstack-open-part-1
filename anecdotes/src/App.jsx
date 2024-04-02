import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  const [mostVotes, setMostVotes] = useState(0)

  const onRandom = () => {
    let newNumber = (Math.floor(Math.random() * 8));
    while(newNumber === selected){
      newNumber = (Math.floor(Math.random() * 8));
    }
    setSelected(newNumber);
  }

  const onVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    if(newVotes[selected] > newVotes[mostVotes]){
      setMostVotes(selected);
    }
  }

  return (
    <div>
      <Heading text={'Anecdote of the Day'}/>
      <strong>{anecdotes[selected]}</strong>
      <br/>
      <div>Has {votes[selected]} votes</div>
      <Button text={'vote'} onClick={onVote}/>
      <Button text={'new anecdote'} onClick={onRandom}/>
      <Heading text={'Anecdote with the Most Votes'}/>
      <strong>{anecdotes[mostVotes]}</strong>
      <br/>
      <div>Has {votes[mostVotes]} votes</div>
    </div>
  )
}

export default App

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Heading = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}