import { useLocation } from 'react-router-dom';

export const usegetCurrentModuleName = ()=>{

    const { pathname } = useLocation()
    const moduleName = pathname?.split('/')[3]
    return moduleName
}