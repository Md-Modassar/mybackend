const arr=[1,2,3,5,6,7]
    const n=7
    const sumodno=(n*(n+1))/2
    let sumofarr=0
    for(let i=0; i<arr.length; i++)
    {
        sumofarr +=arr[i]
    }
    let missingno=sumodno-sumofarr
    console.log(missingno)