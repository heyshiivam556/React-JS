
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    currentCurrency = 'usd',

}){

    return(
        <>
        <div className="w-80 h-32 bg-white rounded-2xl backdrop-blur-md flex flex-col  text-amber-950 p-2 m-2">
<div className="h-1/2 w-1/2 flex flex-col ">
    <label className="text-sm text-left text-amber-900 mb-1 pl-3">{label}</label>
    <input  type="number"
            value = {amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            className="bg-gray-300 font-bold rounded-xl p-1.5 pl-3 outline-none dec" />
</div>
<div className="options h-1/2 flex flex-col items-end pr-4">
<p className="text-sm text-amber-900 text-right mb-1 pr-1 ">Type</p>
    <select className="w-20 bg-gray-200 rounded-md outline-none p-1 text-center" name="" id=""
            value={currentCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}> 
        {/* first we are checking if onCurrency change is true or not then we get the changed value */}
        
        {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
                {currency}
            </option>
        ))}

    </select>
</div>
        </div>
        </>
    )
}
export default InputBox