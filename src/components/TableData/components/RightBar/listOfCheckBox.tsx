import { useGetPermissionsById, useGetActionsByModuleId } from '@/hooks';
import { toCapitalizefirstLetter } from '@/utils'
import { Checkbox, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { ContextCheckBoxes } from './context/ContextCheckBoxes';
import { v4 } from 'uuid';

interface Props {
    module: string
}

function ListOfCheckBox({module}:Props) {

    const { id } = useParams()

    const { actions, permissions, mountPermission, mountActions, handleCheckBoxChange, isLoading, unMountCheckBoxes } = useContext(ContextCheckBoxes)
    
    useEffect(()=>{
        mountActions()
        mountPermission(module)
    }, [module])

    useEffect(()=>{
        unMountCheckBoxes()
    }, [id])

    return (
      <>
      {
        actions ? actions.length > 0 ? isLoading ?

        actions.map(action=>{
            if(action?.action_name){
                console.log()
                const currentPermission = permissions.filter((permission:any) =>permission.action_name.includes(action.action_name))[0]
                
                return(
                    <li className={`itemTableData checkGroup`} key={v4()} >
                        <Checkbox name={`${currentPermission?.permission_id}/${action.action_id}`} onChange={(e)=>handleCheckBoxChange(e)} isChecked={currentPermission} >{action?.action_name ? `${toCapitalizefirstLetter(action?.action_name)} ${module} ` : ''} </Checkbox>
                        <span className="desc-item">{action?.description ? action?.description : "without description"}</span>
                    </li>
                ) 
                  
            }
        }): <div className="spiner-checkboxes"><Spinner color='teal' size='xl' /></div> 
          
        : <p>Dont have permissions yet</p> 
        : <p>Dont have permissions yet</p>
      }
      </>
    )
}

export default ListOfCheckBox