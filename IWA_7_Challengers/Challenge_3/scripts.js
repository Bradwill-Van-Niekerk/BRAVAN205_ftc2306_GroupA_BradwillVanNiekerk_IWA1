const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const sarahOwed = parseFloat(sarahBalance * -1).toFixed(2)//Math.abs(sarahBalance)

const leoOwed = parseFloat(leoBalance * -1).toFixed(2)
function splitintoArray (num){
    return String(num).split('').map(Number)
}
const owed = parseFloat(sarahOwed)+ parseFloat(leoOwed)
const tolalOwed = splitintoArray(owed)
const leo = `${leoName} ${leoSurname .trim()} (Owed R${leoBalance})`
const sarah = `${sarahName .trim()} ${sarahSurname} (Owed R${sarahBalance})`
const total = `Total amount owed: `
const result = leo +"\n"+ sarah + "\n"+"\n" + divider +"\n"+ total + "R" +tolalOwed[0] +tolalOwed[1]+" "+tolalOwed[2] +tolalOwed[3] + tolalOwed[4] +"\n"+ divider

console.log(result)
