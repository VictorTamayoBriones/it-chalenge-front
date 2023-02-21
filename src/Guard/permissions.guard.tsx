import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/models';
import { Navigate, Outlet, useOutlet } from 'react-router-dom';
import { usePermissions } from '../hooks/usePermissions';

export const PermissionGuard = ()=>{

    const outlet = useOutlet()
    const { allPermissions } = usePermissions()

    let outletPath = outlet?.props.children.props.match.route.path?.split('/')[0]
    let hasPermission = Object.entries(allPermissions).filter(permission=> permission.includes(outletPath))

    let nextRoute = Object.entries(PRIVATE_ROUTES).filter(route=> !route.includes('private'))
    .map(permission => {
        return Object.keys(allPermissions).map(item =>{            
            if( item === permission[0].toLowerCase() || item === 'searches' ){
                return permission[0]
            }
        })

    })
    .filter(route => route.some(item=>item != undefined)).flat()
    .sort((a,b)=> a === 'SEARCHES' ? -1 : 0).filter(path => path != undefined)[0]?.toLowerCase()
    
    return hasPermission.length > 0 ? <Outlet/> : <Navigate to={ nextRoute ? ( nextRoute === 'find' ? 'searches' : nextRoute ) : `/${PUBLIC_ROUTES.LOGIN}`} />
}