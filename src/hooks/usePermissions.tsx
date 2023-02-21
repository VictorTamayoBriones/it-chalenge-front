import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';


export const usePermissions = () =>{

    const { permissions } = useSelector((store:AppStore)=>store.user)
    const { pathname } = useLocation()

    let allPermissions = permissions

    const permissionsOfCurrentPath = Object.entries(permissions).filter(permission => permission.includes(pathname.split('/')[3]));
    let currentPermissions = permissionsOfCurrentPath[0] ? permissionsOfCurrentPath[0][1] : []

    const modulePermissions = Object.entries(permissions).filter(permission => permission.includes('permissions'));
    let permissionsOfPermissions = modulePermissions[0] ? modulePermissions[0][1] : []

    const moduleActions = Object.entries(permissions).filter(permission => permission.includes('actions'))
    let permissionsOfActions = moduleActions[0] ? moduleActions[0][1] : []

    const permissionsByModuleName = (moduleName:string) =>{
        const permissionsSearched = Object.entries(permissions).filter(permission => permission.includes(moduleName))
        let finalPermissions = permissionsSearched[0] ? permissionsSearched[0][1] : []
        return finalPermissions
    }

    return {
        allPermissions,
        currentPermissions,
        permissionsOfPermissions,
        permissionsOfActions,
        permissionsByModuleName
    }

}