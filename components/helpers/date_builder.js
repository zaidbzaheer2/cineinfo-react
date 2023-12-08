export const DateBuilderHelper = date_string =>{
    const date = new Date(date_string)
    const options = {year:'numeric', month:'short', day:'numeric'}
    const formattedDate = date.toLocaleDateString('en-US', options)
    return formattedDate
}