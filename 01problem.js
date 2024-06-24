function multiplesOf3Or5(number) {
    let i = 0
    let sum = []
    while ( i <= number ) {
        if (i % 5 == 0 || i % 3 ==0) {
            sum.push(i)
        }
        i++
    }
    //?Usando for of
    // let sumOfAllNumbers = 0
    // for (let n of sum) {
    //     sumOfAllNumbers += n
    // }
    // console.log(sumOfAllNumbers)

    //?Usando reduce

    const sumOfAllNumbers = sum.reduce((acc, actualValue) => acc + actualValue, 0)
    console.log(typeof(sumOfAllNumbers))

    
  }
  
multiplesOf3Or5(1000)
