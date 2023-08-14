const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const sarahOwed = parseFloat(sarahBalance)
const leoOwed = parseFloat(leoBalance) 
const owed = "R" + (sarahOwed + leoOwed)*-1
const leo = `${leoName} ${leoSurname .trim()} (Owed R${leoBalance})`
const sarah = `${sarahName .trim()} ${sarahSurname} (Owed R${sarahBalance})`
const total = `Total amount owed: `
const result = leo +"\n"+ sarah + "\n"+"\n" + divider +"\n"+ total + owed +"\n"+ divider

console.log(result)