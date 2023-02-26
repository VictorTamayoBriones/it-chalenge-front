import { ArrOfObjectsToSingleObject } from "@/utils"
import { useServiceToAddUser } from './useServiceToAddUser';

export const useAddUser = ()=>{
    
    const serviceToAddUser = useServiceToAddUser()

    const addUser = (dataUser:any)=>{
        
        const cleanData = Object.entries(dataUser).map((field:any)=>{
            
            return field.map((item:any)=>{
                return item.trim()
            }) 

        })
        .filter((field:any)=> !field.includes('role_name') )
        .map(field=>({[field[0]]:field[1]}))
        
        const newUserData = ArrOfObjectsToSingleObject(cleanData)
        
        serviceToAddUser(newUserData)
    
    }

    return addUser
}