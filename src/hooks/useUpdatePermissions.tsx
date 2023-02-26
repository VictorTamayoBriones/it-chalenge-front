import { ArrOfObjectsToSingleObject } from "@/utils"

export const useUpdatePermissions = () =>{

    const updatePermissions = (arrOfPermissions:  any[]) =>{
        const keys =[...new Set( arrOfPermissions?.map((item:any, i:number)=>{
            return item?.module_name
        }))].map((keyItem:any)=>{
            return {[keyItem]:arrOfPermissions
                    .map((permission:any)=> permission.module_name === keyItem && permission.action_name)
                    .filter(item=>item!=false)
                }
        })

        const objPermissions = ArrOfObjectsToSingleObject(keys)
        
        console.log(Object.entries(objPermissions).map(entry=>{
            return {[entry[0]]: entry[1]}
        }))

        
    }

    return updatePermissions
}