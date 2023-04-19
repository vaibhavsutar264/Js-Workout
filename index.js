const express = require('express')
const app = express()

app.use(express.json())

app.get("/",(req, res)=>{
    const userInput = [5,8,9,12,11,13,14,15,16,17,18,19,20,21]
    let totalPrimeNumbers = []
    let isNotPrime = false
    function primeCheck(userInput){
       for (let j = 2; j < 10; j++) {
        if(userInput%j == 0){
            isNotPrime = true
        }
       }
       if(isNotPrime == false){
        totalPrimeNumbers.push(userInput)
       }
        isNotPrime = false
    }

    for (let i = 1; i < userInput.length; i++) {
        primeCheck(userInput[i])
        
    }

   res.status(200).json({
    success: true,
    primeNumber : JSON.stringify(totalPrimeNumbers)
   })
})

app.listen(4000,()=>{
    console.log("server running on 4000")
})