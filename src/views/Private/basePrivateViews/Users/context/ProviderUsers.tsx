import { useGetAllUsers } from '@/hooks';
import { useState, useEffect } from 'react';
import { ContextUser } from "./ContextUser"
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '@/redux/store';
import { updateIsLoading } from '@/redux/baseStates/CircleProgressIndicator/CircleProgressIndicator';

interface Props{
    children: JSX.Element
}

export const ProviderUser = ({children}:Props) =>{

    const getAllUsers = useGetAllUsers()

    const needReload = useSelector((store:AppStore)=>store.toReload)

    const [allUsers, setAllUsers] = useState<any[]>([]);
    const [userToUpdate, setUserToUpdate]=useState<any>({})

    const [searchInput, setSearchInput]=useState<string>('')

    const [isUpdatingPassword, setIsUpdatingPassword]=useState<boolean>(false)
    const dispatch = useDispatch()

    const handleIsUpdatingPassword = (status: boolean, data?:{})=>{
        if(data){
            setUserToUpdate(data)
        }
        setIsUpdatingPassword(status)
    }

    const [isCreating, setIsCreating]=useState<boolean>(false)
    const handleIsCreating = (status: boolean) => setIsCreating(status)

    const [isEditing, setIsEditing]=useState<boolean>(false)

    const handleIsEditing = (status: boolean, data?:any) => {
        
        if(data){
            setUserToUpdate(data)
        }
        
        setIsEditing(status)

    }

    const handleChangeSearchInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        handleFilter(searchInput)
        setSearchInput(e.target.value)
    }

    const handleFilter = (filter:string) =>{
        
        setAllUsers(allUsers.filter(user => user?.email?.includes(filter.toLowerCase())))
    }

    const mountUsers = async () =>{
        dispatch(updateIsLoading(true))
        await getAllUsers()
            .then(res=>{
                if(res.success){
                    dispatch(updateIsLoading(false))
                    setAllUsers(res.data)
                }
            })
    }

    useEffect(()=>{
        (async ()=>{
            await mountUsers()
        })();
    }, [])

    useEffect(()=>{

        if(searchInput === ''){
            
            mountUsers()
        }
        
    },[searchInput])

    useEffect(()=>{
        if(needReload === 'users'){
            mountUsers()
        }
    }, [needReload])
    
    return(
        <ContextUser.Provider value={{  allUsers, searchInput, handleChangeSearchInput, 
                                        isCreating, handleIsCreating, mountUsers, 
                                        isEditing, handleIsEditing, userToUpdate,
                                        isUpdatingPassword, handleIsUpdatingPassword
                                    }} >
            {children}
        </ContextUser.Provider>
    )
}