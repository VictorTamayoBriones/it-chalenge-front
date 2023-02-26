import { createContext } from 'react';

interface ContextTableDataState {
    dataOfTableData: any,
    updateData: (data:any)=>void,
}

export const ContextTableData = createContext( {} as ContextTableDataState )