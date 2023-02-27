import { usePermissions } from '../../../../../../../../hooks/usePermissions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../../../../../../redux/store';
import { useRefreshToken } from '@/hooks';
import AdministrationMenu from '../AdministrationMenu/AdministrationMenu';

function AsideBody() {
    
    const toReload = useSelector((store:AppStore)=>store.toReload)
    const handleRefreshToken = useRefreshToken()

    useEffect(()=>{
        if(toReload === 'modules'){
            handleRefreshToken()
        }
    },[toReload])

  return (
    <section className='asideBody' >
        <p className='title-section' >Modules</p>
        <AdministrationMenu/>
        {/* {
            modulesToShow.map((module)=>{
                const CurrentIcon = Object.entries(Icons)?.filter(entri => entri?.includes(module))[0] && Object.entries(Icons)?.filter(entri => entri?.includes(module))[0][1]
                const currentRoute = Object.entries(PRIVATE_ROUTES)?.filter(route=> route[0] === module.toUpperCase())[0]
                // console.log(currentRoute)
                return(
                    
                    <NavLink key={`module of ${module}`} to={currentRoute ? currentRoute[1]: PRIVATE_ROUTES.DEFAULT} className={({ isActive }) => isActive ? 'activeClassName' : 'testNavLink'} > { CurrentIcon ? <CurrentIcon/> : <Icons.default/>} <p>{ toCapitalizefirstLetter(module === 'searches' ? 'search' : module)}</p> </NavLink>
                )
            })
        } */}
    </section>
  )
}
export default AsideBody