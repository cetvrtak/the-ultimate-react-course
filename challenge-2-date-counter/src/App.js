import { useState } from 'react'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  let date = new Date()
  date.setDate(date.getDate() + count)

  function handleStepDecrease() {
    if (step > 1) setStep((s) => s - 1)
  }
  function handleStepIncrease() {
    setStep((s) => s + 1)
  }

  function handleCountDecrease() {
    setCount((s) => s - step)
  }
  function handleCountIncrease() {
    setCount((s) => s + step)
  }

  return (
    <>
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepIncrease}>+</button>
      </div>

      <div>
        <button onClick={handleCountDecrease}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountIncrease}>+</button>
      </div>

      <p>
        <span>{Math.abs(count)} days {count >= 0 ? 'from today is' : 'ago was'} </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  )
}