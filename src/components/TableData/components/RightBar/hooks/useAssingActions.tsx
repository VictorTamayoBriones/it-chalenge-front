import { HEADER_TOKEN, usePostService } from '@/services';
export const useAssingActions = () =>{

    const postService = usePostService()

    const assingAction = async(role_id: string, action_id: string, description: '')=>{
        
        const data = {
            role_id: role_id,
            actions_id: action_id,
            description: description
        }

        await postService('/permissions/assing/actions', data, HEADER_TOKEN())
    }

    return assingAction
}