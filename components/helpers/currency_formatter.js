export const CurrencyFormatter = currency_integer =>{
    const formattedNumber = currency_integer.toLocaleString('en-US', {style:'currency', currency:'USD'})
    return formattedNumber
}