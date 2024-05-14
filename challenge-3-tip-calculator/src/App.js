import { useState } from "react"
import { Bill } from "./Bill"
import { BillInput } from "./BillInput"
import { ResetButton } from "./ResetButton"
import { SatisfactionInput } from "./SatisfactionInput"

export default function App() {
  const [bill, setBill] = useState(0)
  const [yourSatisfaction, setYourSatisfaction] = useState(0)
  const [friendSatisfaction, setFriendSatisfaction] = useState(0)

  const avgSatisfaction = (yourSatisfaction +
    friendSatisfaction) / 2 / 100
  const tip = bill * avgSatisfaction

  function handleReset() {
    setBill(0)
    setYourSatisfaction(0)
    setFriendSatisfaction(0)
  }

  return (
    <>
      <div>
        <BillInput
          bill={bill}
          onBillChange={(val) => setBill(val)}
        />

        <SatisfactionInput
          satisfaction={yourSatisfaction}
          onSatisfactionChange={setYourSatisfaction}
        >
          How did you like the service?
        </SatisfactionInput>

        <SatisfactionInput
          satisfaction={friendSatisfaction}
          onSatisfactionChange={setFriendSatisfaction}
        >
          How did your friend like the service?
        </SatisfactionInput>
      </div>

      {tip !== 0 && <div>
        <Bill
          bill={bill}
          tip={tip}
        />

        <div>
          <ResetButton onReset={handleReset} />
        </div>
      </div>}
    </>
  )
}