// exercise: Transaction analysis



const transactions = [
    {id:1, description: 'play5', amount: -1000},
    {id:2, description: 'Fiona Vet', amount: -500},
    {id:1, description: 'Work', amount: 20000},
    {id:1, description: 'bag actions', amount: 10000},
]

//1.Calcula el saldo total

const totalBalance = transactions.reduce((acc,transactions)=>acc+transactions.amount,0)
console.log('Total del balance',totalBalance)

//2. Encuentra la transacción más grande

const masGrande = transactions.reduce((maxTransaction, transaction)=>{
    return Math.abs(transaction.amount) >   Math.abs(maxTransaction.amount) ? transaction :maxTransaction
},transactions[0])

console.log('largest transaction: ', masGrande)

//3. Filter Purchase Transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount<0)
console.log(purchaseTransactions)

//4. Find a transaction by description with method find


const specificTrasaction = transactions.find(transaction => transaction.description === 'play5')
console.log('La trasacción es: ',specificTrasaction)

//5. Find the index of a transaction by amount

const specificTrasactionIndex = transactions.findIndex(transaction => transaction.amount===20000)
console.log(specificTrasactionIndex)

//6 Update Transaction Descriptions 

transactions.forEach(transaction => {
    if(transaction.amount<0){
        transaction.description = `Expense: ${transaction.description}`
    }else{
        transaction.description = `Income: ${transaction.description}`
    }
})

console.log('Updated Transactions: ', transactions)
