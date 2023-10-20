import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.log(options);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div className="main">
      <div className="full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="inputField">
            <InputBox
              label='From'
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="swap">
            <button className="swap-button" type="button" onClick={swap}>
              SWAP
            </button>
          </div>
          <div className="downside">
          <InputBox
              label='To'
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              // onAmountChange={(amount) => setAmount}
              amountDisable
            />
          </div>
          <div className="convert">
           <button type="submit" className="submit" >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button> 
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default App;
