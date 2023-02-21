import { ArrToObjec } from "./ArrToObject"

export const TrimValuesOfAnObject = (anObject: any) =>{
    
    const trimNewObject = Object.entries(anObject)
    .map((item:any)=>{
        if(typeof(item[1]) === 'string'){
            if(item[0] === 'email'){
                return {[item[0]]:item[1].trim()}    
            }
            return {[item[0]]:item[1].trim().toLowerCase()}
        }else{
            return {[item[0]]:item[1]}
        }
    })
    const newObj = ArrToObjec(trimNewObject)

    return newObj
}