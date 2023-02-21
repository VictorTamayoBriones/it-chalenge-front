import { AlertModel } from '@/components'
import { IAuthData } from '@/models/resAuthData';
import { configureStore } from '@reduxjs/toolkit'
import AlertSlice from './baseStates/Alert/AlertSlice';
import User from './baseStates/user/User';
import AsideMenuSlice from './baseStates/AsideMenu/AsideMenuSlice';
import CircleProgressIndicatorSlice  from './baseStates/CircleProgressIndicator/CircleProgressIndicator';
import AlertToDeleteSlice from './baseStates/AlertToDelete/AlertToDeleteSlice';
import SelectorSlice from './baseStates/Selector/SelectorSlice';
import NeddToReloadSlice from './baseStates/needToReload/needToReload';



export interface AppStore{
    alert: AlertModel,
    user: IAuthData,
    asideMenu: boolean,
    isLoading: boolean,
    alertToDelete: {
        status: boolean
        title:string,
        body: string,
        toDelete:{
            id:string,
            section: string
        }
    }
    selectorData: string,
    toReload: string,
}

export const store = configureStore<AppStore>({
    reducer:{
        alert: AlertSlice,
        user: User,
        asideMenu: AsideMenuSlice,
        isLoading: CircleProgressIndicatorSlice,
        alertToDelete: AlertToDeleteSlice,
        selectorData: SelectorSlice,
        toReload: NeddToReloadSlice,
    }
})