import { useState } from "react"
import { ContextTableData } from "./ContextTableData"

interface Props{
    children:JSX.Element
}

export const ProviderTableData = ({children}:Props)=>{

    const [dataOfTableData, setDataOfTableData]=useState<any>({})

    const updateData = (data:any)=>setDataOfTableData(data)

    return(
        <ContextTableData.Provider value={{dataOfTableData, updateData}} >
            {children}
        </ContextTableData.Provider>
    )
}