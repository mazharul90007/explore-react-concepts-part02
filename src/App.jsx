
import './App.css'
import Counter from './Counter'
import Employees from './Employees'
import Player from './Player'
import Users from './Users'

function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => alert('Button 02 Clicked')
  const addFive = (num) => alert(num + 5)
  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Employees></Employees>
      <Users></Users>


      <Counter></Counter>
      <Player></Player>
      {/* <button onClick={handleClick}>Click Me</button>
      <br />
      <button onClick={handleClick2}>Click 02</button>
      <br />
      <button onClick={()=>alert('Third Button Clicked')}>Click 03</button>
      <button onClick={()=>addFive(9)}>Button 04</button> */}

    </>
  )
}

export default App
