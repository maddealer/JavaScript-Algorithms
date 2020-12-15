const fibonaci = (n)=>{

    let fiboArr =[0,1]

    if(n<=2) return 1

    for(let i =2; i<=n;i++){
        let fiboNum = fiboArr[i-1]+fiboArr[i-2]
        fiboArr.push(fiboNum)
    }

    return fiboArr[n]
}

console.log(fibonaci(12))