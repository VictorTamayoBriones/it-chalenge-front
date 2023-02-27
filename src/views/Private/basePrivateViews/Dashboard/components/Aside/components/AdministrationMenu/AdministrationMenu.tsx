import { usePermissions } from '@/hooks';
import { toCapitalizefirstLetter } from '@/utils';
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { IconChevronDown } from '@tabler/icons';
import { NavLink } from 'react-router-dom';
import { Icons } from '../../../../../../../../assets/icons/icons.config';
import { PRIVATE_ROUTES } from '../../../../../../../../models/routes';
import "./style.scss"

function AdministrationMenu() {


    const { allPermissions } = usePermissions()
    const modulesToShow = Object.keys(allPermissions).filter(permission => permission != 'permissions' && permission != 'actions').sort((a,b)=> a === 'searches' ? -1 : 0)

    return (
        <Menu>
            <MenuButton className='buttonMenu' as={Button} rightIcon={<IconChevronDown/>} colorScheme="blue" >
                Administration
            </MenuButton>

            <MenuList>
            {
                modulesToShow.map((module)=>{
                    const CurrentIcon = Object.entries(Icons)?.filter(entri => entri?.includes(module))[0] && Object.entries(Icons)?.filter(entri => entri?.includes(module))[0][1]
                    const currentRoute = Object.entries(PRIVATE_ROUTES)?.filter(route=> route[0] === module.toUpperCase())[0]
                    // console.log(currentRoute)
                    return(
                        <MenuItem>
                            <NavLink key={`module of ${module}`} to={currentRoute ? currentRoute[1]: PRIVATE_ROUTES.DEFAULT} className={({ isActive }) => isActive ? 'activeLinkAdministration' : 'unActiveLinkAdministration'} > { CurrentIcon ? <CurrentIcon/> : <Icons.default/>} <p>{ toCapitalizefirstLetter(module === 'searches' ? 'search' : module)}</p> </NavLink>
                        </MenuItem>
                    )
                })
            }
            </MenuList>

        </Menu>
    )
}

export default AdministrationMenu