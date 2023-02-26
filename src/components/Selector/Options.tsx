import { toBeSingular, toCapitalizefirstLetter } from '@/utils';
import { useContext, useEffect } from 'react';
import { ContextSelector } from './context/ContextSelector';
interface Props{
    show: string
}

function Options({show}:Props) {

    const { data, getData } = useContext(ContextSelector)

    useEffect(()=>{
        getData(show)
    }, [])
    
  return (
    data && data.length > 0 ?
        
        data?.map((item:any)=>{
            return(
                <option key={item.id} value={item.id}>{ toBeSingular(show) } - {item.name} </option>
            )
        })    
      
    : ''
  )
}
export default Options