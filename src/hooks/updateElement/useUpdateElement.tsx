import { HEADER_TOKEN } from '@/services';
import { usePutService } from '@/services/PUT/putService';
import { useDispatch } from 'react-redux';
import { updateSectionToReload } from '@/redux/baseStates/needToReload/needToReload';
import { usePath } from '../usePathName';
import { TrimValuesOfAnObject } from '@/utils/TrimValuesOfAnObject';

export const useUpdateElement = ()=>{
    const putService  = usePutService()
    const dispatch = useDispatch()
    const { PATH_NAME } = usePath()

    const updateElement = async (nameOfModuleFromUpdate: string, id:string, data:any)=>{
        const url = `/${nameOfModuleFromUpdate}/${id}`
        const trimData = TrimValuesOfAnObject(data)

        return await putService(url, trimData, HEADER_TOKEN())
            .then(res=>{
                if(res.success){
                    dispatch(updateSectionToReload(PATH_NAME))
                    return res
                }
            })
    }

    return updateElement
}