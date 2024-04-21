import React, {useId} from 'react'


function InputBox({
  label,  // from or to
  amount, // amount from the user
  onAmountChange, // when amount is changed this function will be called
  onCurrencyChange, // when currency type is changed, this function will be called
  currencyOptions = [], // all currency types (from API)
  selectCurrency = "USD", // selected currency from currencyOptions (by default, USD)
  amountDisable = false,  // amount entry will be allowed for 'From' but not for 'To'

  className = "" // to take any styling from the user (if required)
}) {
  const amountInputId = useId(); // will generate a unique string to be used as ID for binding elements. Here we will bind label and input elements
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} 
        className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount} 
          disabled = {amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} >
          {
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;