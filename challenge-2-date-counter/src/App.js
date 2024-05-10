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
  function handleCountInput(s) {
    setCount(s)
  }
  function handleStepSlider(s) {
    setStep(s)
  }
  function resetState() {
    setStep(1)
    setCount(0)
  }

  return (
    <>
      <div>
        <input type='range' min='0' max='10' value={step} onChange={(e) => (handleStepSlider(+e.target.value))} />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={handleCountDecrease}>-</button>
        <input type='number' value={count} onChange={(e) => (handleCountInput(+e.target.value))} />
        <button onClick={handleCountIncrease}>+</button>
      </div>

      <p>
        <span>{Math.abs(count)} days {count >= 0 ? 'from today is' : 'ago was'} </span>
        <span>{date.toDateString()}</span>
      </p>

      {(count !== 0 || step !== 1) && <div>
        <button onClick={resetState}>Reset</button>
      </div>}
    </>
  )
}