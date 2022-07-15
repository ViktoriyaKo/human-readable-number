module.exports = function toReadable(number) {  
    let arrowUnit = ['zero',"one","two","three","four","five","six","seven","eight","nine",'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
    let arrowDozen = ['0','one','twenty','thirty',"forty","fifty","sixty","seventy",'eighty','ninety']; 
    let numberDozen = Math.floor(number / 10)
    let numberUnit = (numberDozen * 10 - number) * (-1);
    let numberHundred = number.toString().slice(0,1)
    let numberDozenOther = number.toString().slice(1,2)
    let numberUnitOther = number.toString().slice(2,3)
    let numberCheck = number.toString().slice(1,3)

    if(number < 20) {
        return arrowUnit[number];
    } else if ((number < 100) && ((number % 10) !== 0)) {
        return `${arrowDozen[numberDozen]} ${arrowUnit[numberUnit]}`
    } else if ((number < 100) && ((number % 10) === 0)) {
        return `${arrowDozen[numberDozen]}`
    } else if (number < 1000 && number % 10 !== 0 && +numberCheck >= 20 && ((number % 100) !== 0)) {
        return `${arrowUnit[+numberHundred]} hundred ${arrowDozen[+numberDozenOther]} ${arrowUnit[+numberUnitOther]}`
    } else if (number < 1000 && number % 10 === 0 && +numberCheck >= 20 && ((number % 100) !== 0))  {
      return `${arrowUnit[+numberHundred]} hundred ${arrowDozen[+numberDozenOther]}`
    } else if (+numberCheck <= 20 && ((number % 100) !== 0)) {
      return `${arrowUnit[+numberHundred]} hundred ${arrowUnit[+numberCheck]}`
    } else if (number < 1000 && ((number % 100) === 0)) {
        return `${arrowUnit[+numberHundred]} hundred`
    }
}
