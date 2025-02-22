import Lottery from './Lottery'
import './App.css'
import { sum } from './Helper'

function App() {
  // If sum of el of ticket is equal to 15
  function winCondition(ticket) {
    return sum(ticket) == 15;
  }

  // If very num of ticket is equal
  // function winCondition(ticket) {
  //   return ticket.every((res) => res === ticket[0]);
  // }

  // If first digit of ticket is equal to 0
  // function winCondition(ticket) {
  //   return ticket[0] === 0;
  // }

  return (
    <>
      <Lottery n={3} win={winCondition} />
    </>
  )
}

export default App
