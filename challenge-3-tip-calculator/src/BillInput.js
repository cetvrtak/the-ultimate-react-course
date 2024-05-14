export function BillInput({ bill, onBillChange }) {
    return (
        <div>
            <span>How much was the bill?</span>
            <input
                type="number"
                value={bill}
                onChange={(e) => onBillChange(+e.target.value)}>
            </input>
        </div>
    );
}
