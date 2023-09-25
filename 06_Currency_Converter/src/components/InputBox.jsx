import {  useId } from "react";
import React from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    currencyType = [],
    selectCurrency = "usd",
    onCurrencyChange,
    currencyDisabaled = false,
    amountDisabled = false,
    className = "",
}) {
    let ref = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex 
        ${className}`}>
            <div className="w-1/2">
                <label htmlFor={ref} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={ref}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => (onAmountChange && onAmountChange(Number(e.target.value)))}
                    disabled={amountDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => (onCurrencyChange && onCurrencyChange(e.target.value))}
                    disabled={currencyDisabaled}
                >

                    {currencyType.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
