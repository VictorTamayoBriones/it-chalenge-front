import { PRIVATE_ROUTES } from '@/models';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './basePrivateViews/Dashboard';
import FourOFourn from '../FourOFourn/FourOFourn';
import { PermissionGuard } from '@/Guard';

import { DEFAULT } from '../DEFAULT';
import { Modules, Profile, Roles, Users } from './basePrivateViews';


function Private() {
  return (
    <Routes>
      
      <Route path="/" element={ <Navigate to={ PRIVATE_ROUTES.DASHBOARD } /> } />

      <Route path={ `${PRIVATE_ROUTES.DASHBOARD}/*` } element={ <Dashboard/> }>

          {/* Rutas de los elementos a renderizar en el dashboard */}
          <Route element={ <PermissionGuard/> } >
            <Route path="" element={ <Navigate to={ PRIVATE_ROUTES.MODULES } /> }/> {/*Esat ruta hace que por defecto al entrar el usuario sea redirijido al Find*/}
          </Route>

          {/* Modules Routes */}
          <Route element={ <PermissionGuard/> } >
          
            <Route path={ PRIVATE_ROUTES.MODULES } element={ <Modules/> }/>
           
            <Route path={ `${PRIVATE_ROUTES.MODULES}/:id/*` } element={ <Modules/> }>
              <Route path={ `:idContent` } element={ <Modules/> }/>
            </Route>
          
          </Route>

          {/* Roles Routes */}
          <Route element={ <PermissionGuard/> } >
            <Route path={ PRIVATE_ROUTES.ROLES } element={ <Roles/> }/>

            <Route path={ `${PRIVATE_ROUTES.ROLES}/:id/*` } element={ <Roles/> }>
              <Route path={ `:idContent` } element={ <Modules/> }/>
            </Route>
          
          </Route>

          <Route element={ <PermissionGuard/> } >
            <Route path={ PRIVATE_ROUTES.USERS } element={ <Users/> }/>
            <Route path={ `${PRIVATE_ROUTES.USERS}/:id` } element={ <Users/> }/>
          </Route>

          {/* Profile Routes */}
          <Route path={PRIVATE_ROUTES.PROFILE} element={<Profile/>}/>

          <Route path={`${PRIVATE_ROUTES.PROFILE}/${PRIVATE_ROUTES.UPDATE_OWN_PASSWORD}`} element={<Profile/>} />

          <Route path={PRIVATE_ROUTES.DEFAULT} element={ <DEFAULT/> } />  

          <Route path="*" element={ <FourOFourn/> } />     
        
      
      
      </Route>

      <Route path="*" element={ <FourOFourn/> } /> 
    </Routes>
  )
}
export default Private