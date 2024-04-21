import { useState } from 'react'

import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencies = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center"
    
    >
      <h1 className='text-white text-4xl'>Currency Converter</h1>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // to display on screen itself (since we are not sending the result to any database as default behaviour is to send the form data to any database, etc.)
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount= {amount}

                onAmountChange = {(amt) => setAmount(amt)}
                onCurrencyChange = {(currency) => setFrom(currency)}
                currencyOptions = {currencies}
                selectCurrency = {from}


              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}                
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount = {convertedAmount}
                onCurrencyChange = {(currency) => setTo(currency)}
                currencyOptions = {currencies}
                selectCurrency = {to}
                amountDisable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
