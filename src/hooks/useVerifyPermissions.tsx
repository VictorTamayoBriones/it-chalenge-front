import { usePermissions } from './usePermissions';
export const useVerifyPermissions = ()=>{
    const { allPermissions } = usePermissions();

    let permissionIsMissing:any={}

    Object.entries(allPermissions).forEach(permiso=>{
        //Debemos evaluar si el usuario puede crear o actualizar un usuario
        if( permiso[0] === 'users' ){
            if( permiso[1].includes('create') || permiso[1].includes('update')  ){

                //si el usuario si puede modificar otros usuarios entonces necesita poder leer roles
                //Debemos verificar si es que el usuario puede leer roles
                
                if( Object.keys(allPermissions).includes('roles') ){
    
                    if(!allPermissions.roles?.includes('read')){
                        //Aqui mandamos la alerta de que el usuario actual necesita un permiso que no tiene
                        permissionIsMissing={success: false,msg: 'you need to contact your admin to be assigned the permission to read roles to continue'}
                        
                    }
                    
                }else{
                    permissionIsMissing={success: false,msg: 'you need to contact your admin to be assigned the permission to read roles to continue'}
                    
                }
            }    
        }

        if( permiso[0] === 'actions' ){

            if( permiso[1].includes('create') || permiso[1].includes('update') ){
                if( Object.keys(allPermissions).includes('modules') ){
    
                    if(!allPermissions.modules?.includes('read')){
                        //Aqui mandamos la alerta de que el usuario actual necesita un permiso que no tiene
                        permissionIsMissing={success: false,msg: 'you need to contact your admin to be assigned the permission to read modules to continue'}
                        
                        
                    }
                    
                }else{
                    permissionIsMissing={success: false,msg: 'you need to contact your admin to be assigned the permission to read modules to continue'}
                    
                } 
            }
            
        }
        
    })

    return permissionIsMissing
}