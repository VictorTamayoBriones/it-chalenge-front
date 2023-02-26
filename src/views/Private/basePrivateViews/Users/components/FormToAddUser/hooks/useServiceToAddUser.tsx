import { HEADER_TOKEN, usePostService } from "@/services"

export const useServiceToAddUser = ()=>{
    
    const postService = usePostService()

    const serviceToAddNewUser = (data:any)=>{
        return postService('/users/create', data, HEADER_TOKEN())
    }

    return serviceToAddNewUser
}