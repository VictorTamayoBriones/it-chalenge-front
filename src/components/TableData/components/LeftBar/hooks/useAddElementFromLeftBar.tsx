import { usePath } from "@/hooks"
import { useCreateElement } from '../../../../../hooks/createElement/createElement';
import { TrimValuesOfAnObject } from "@/utils/TrimValuesOfAnObject";

export const useAddElementFromLeftBar = () =>{

    const createELement = useCreateElement()
    const { PATH_NAME } = usePath()

    const addElement = (data: any)=>{
        const newData = TrimValuesOfAnObject(data)
        createELement(PATH_NAME, newData)
    }

    return addElement
}