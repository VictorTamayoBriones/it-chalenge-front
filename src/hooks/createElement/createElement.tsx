import { HEADER_TOKEN } from '@/services';
import { TrimValuesOfAnObject } from '@/utils/TrimValuesOfAnObject';
import { usePostService } from '../../services/POST/postService';
import { useDispatch } from 'react-redux';
import { updateSectionToReload } from '@/redux/baseStates/needToReload/needToReload';
import { usePath } from '../usePathName';

export const useCreateElement = ()=>{
    const postService  = usePostService()
    const dispatch = useDispatch()
    const { PATH_NAME } = usePath()

    const createElement= async (nameOfModuleToCreate: string, data:any)=>{
        const url = `/${nameOfModuleToCreate}/create`
        const newData = TrimValuesOfAnObject(data)

        return await postService(url, newData, HEADER_TOKEN())
        .then(res=>{
            if(res.success){
                dispatch(updateSectionToReload(PATH_NAME))
                return res
            }
        })
    }

    return createElement
}