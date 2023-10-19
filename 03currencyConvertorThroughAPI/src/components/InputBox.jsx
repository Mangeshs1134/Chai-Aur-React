import React , {useId} from "react";

function InputBox ({
    label ,
    amount ,
    onAmountChange ,
    onCurrencyChange ,
    currencyOptions ,
    selectCurrency = "",
    amountDisable = false ,
    currencyDisable = false ,
    className = "" ,

}) {

    const amountInputId = useId()

    return(

    <div className="background">

        <div className={`upside ${className}`}>
            <label htmlFor={amountInputId}>
                {label}
            </label>
            <input type="number" placeholder="amount" disabled={amountDisable} value={amount} 
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}    name="" id="" />
        </div>
        <div className="downside">

        </div>

    </div>
    )
    
}

export default InputBox ;