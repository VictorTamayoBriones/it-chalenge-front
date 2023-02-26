export const ArrOfObjectsToSingleObject = (arr:any[])=>{
    let newArr:any={};
    
    arr.forEach(item=>{
        newArr={...newArr, ...item}
    })

    return newArr
}