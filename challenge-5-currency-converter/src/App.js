// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(100)
  const [from, setFrom] = useState('EUR')
  const [to, setTo] = useState('USD')
  const [output, setOutput] = useState(null)

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)

        if (!res.ok) throw new Error('Failed to fetch data')

        const data = await res.json()
        setOutput(data.rates[to])
      } catch (err) {
        console.error(err.message)
      }
    }

    if (from === to) return setOutput(amount)
    fetchData()
  })

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(+e.target.value)} />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
