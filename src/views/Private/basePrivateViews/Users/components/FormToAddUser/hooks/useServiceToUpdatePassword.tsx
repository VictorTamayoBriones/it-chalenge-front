import { AlertModel } from '@/components';
import { updateAlert } from '@/redux/baseStates/Alert/AlertSlice';
import { HEADER_TOKEN } from '@/services';
import { usePatchService } from '@/services/PATCH/patchService';
import { useDispatch } from 'react-redux';

export const useServiceToUpdatePassword = ()=>{
    const patchService = usePatchService()
    const dispatch = useDispatch()

    const serviceToUpdatePasswords =  async (data:any, id:string)=>{
        return await patchService(`/users/${id}/update/passwords`, data, HEADER_TOKEN())
            .then((res)=>{
                if(res.msg != 'Updated password successfully' ){

                    const alert:AlertModel = {
                        isVisible: true,
                        status: 'error',
                        title: 'Bad behavior',
                        description: res.msg
                    }
                    
                    dispatch(updateAlert(alert))
                    return res
                }
                return res
            })
    }

    return serviceToUpdatePasswords
}