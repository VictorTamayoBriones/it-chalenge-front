import { usePath, usePermissions } from "@/hooks";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { ContextTableData } from '../../../../context/ContextTableData';
import { Button, IconButton, Tooltip } from "@chakra-ui/react";
import { toCapitalizefirstLetter } from "@/utils";
import { Icons } from "@/assets";
import { ContextCenterBar } from '../../context/ContextCenterBar';
import { useDispatch } from 'react-redux';
import { updateDataAlert } from "@/redux/baseStates/AlertToDelete/AlertToDeleteSlice";

function Header() {
  const { id } = useParams();
  const { dataOfTableData:{centerBar, leftBar} } = useContext(ContextTableData)
  const { permissionsByModuleName } = usePermissions()
  let permissions = permissionsByModuleName(centerBar?.title?.split(' ')[0]?.toLowerCase())
  const { PATH_NAME } = usePath()
  const { isCreating, handleIsCreating, isEditing, handleIsEditing, handleSetFileToUpdate } = useContext(ContextCenterBar)
  
  const dispatch = useDispatch()

  useEffect(()=>{
    if(PATH_NAME.includes('roles')){
      permissions = permissionsByModuleName('roles') 
    }
  }, [])

  const FILE_SELECTED = leftBar?.childs && leftBar?.childs?.filter((item:any) => item.id === id)[0]

  const handleDelete = (id:string, name:string)=> {
    dispatch(updateDataAlert({status:true, title:`Delete ${name}`, body: "Are you sure? You can't undo this action afterwards.", toDelete:{id, section:PATH_NAME} }))
  }

  const handleEdit = () =>{
    handleIsEditing(!isEditing)
    handleSetFileToUpdate(FILE_SELECTED)
  }

  const handleCreating = ()=>{
    handleIsCreating(!isCreating)
    handleSetFileToUpdate(FILE_SELECTED)
  }
  
  return (
    <section>
        {
          id ?
          <>
            <p>{ toCapitalizefirstLetter( centerBar?.title ? centerBar?.title : '') }</p>
            {
              
              PATH_NAME.includes('roles')&&
              <>
              {
                permissions.includes('update')&&
                <Tooltip label={`Update ${centerBar?.title?.split(' ')[2]?.toLowerCase()} ${centerBar?.title?.split(' ')[3]?.toLowerCase()}`} >
                  <IconButton aria-label={isEditing ? 'Cancel' : `Add ${centerBar?.title}`} variant="ghost" size="xs" onClick={()=>handleEdit()} transform={isEditing ? "rotate(45deg)" : ''} colorScheme={isEditing ? 'red' : 'teal'} >{ isEditing ? <Icons.PLUS/> : <Icons.EDIT/>}</IconButton>
                </Tooltip>
              }
              {
                !isEditing &&
                permissions.includes('delete')&&
                <Tooltip label={`Delete ${centerBar?.title?.split(' ')[2]?.toLowerCase()} ${centerBar?.title?.split(' ')[3]?.toLowerCase()}`} >
                  <IconButton aria-label="delete" variant="ghost" size="xs" onClick={()=>handleDelete(id,`${centerBar?.title?.split(' ')[2]?.toLowerCase()} ${centerBar?.title?.split(' ')[3]?.toLowerCase()}` )} transform={isCreating ? "rotate(45deg)" : ''} colorScheme="red">{<Icons.DELETE/>}</IconButton>
                </Tooltip>
              }
              </>
            }
            {
              !PATH_NAME.includes('roles') &&
              <>
              
              {
                !isEditing &&
                permissions.includes('create') ?
                <Tooltip label={isCreating ? 'Cancel' : `Add ${centerBar?.title}`} >
                  <IconButton aria-label={isCreating ? 'Cancel' : `Add ${centerBar?.title}`}  variant="ghost" size="xs" onClick={()=>handleCreating()} transform={isCreating ? "rotate(45deg)" : ''} colorScheme={isCreating ? 'red' : 'teal'}>{<Icons.PLUS/>}</IconButton>
                </Tooltip>
                : ''
              }
              {
                !isCreating &&
                !PATH_NAME.includes('roles') &&
                permissions.includes('update') ?
                <Tooltip label={`Update ${centerBar?.title?.split(' ')[2]?.toLowerCase()} ${centerBar?.title?.split(' ')[3]?.toLowerCase()}`} >
                  <IconButton aria-label={isEditing ? 'Cancel' : `Add ${centerBar?.title}`} variant="ghost" size="xs" onClick={()=>handleEdit()} transform={isEditing ? "rotate(45deg)" : ''} colorScheme={isEditing ? 'red' : 'teal'} >{ isEditing ? <Icons.PLUS/> : <Icons.EDIT/>}</IconButton>
                </Tooltip>
                : ''
              }
              {
                !isCreating &&
                !isEditing &&
                permissions.includes('delete')&&
                <Tooltip label={`Delete ${centerBar?.title?.split(' ')[2]?.toLowerCase()} ${centerBar?.title?.split(' ')[3]?.toLowerCase()}`} >
                  <IconButton aria-label="delete" variant="ghost" size="xs" onClick={()=>handleDelete(id,`${centerBar?.title?.split(' ')[2]?.toLowerCase()} ${centerBar?.title?.split(' ')[3]?.toLowerCase()}` )} transform={isCreating ? "rotate(45deg)" : ''} colorScheme="red">{<Icons.DELETE/>}</IconButton>
                </Tooltip>
              }
              </>
            }
          </> :
          <span className="message-span" >In comming</span>
        }
    </section>
  )
}
export default Header