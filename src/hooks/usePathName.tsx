import { useLocation } from 'react-router-dom';
export const usePath = () =>{
    
    const { pathname } = useLocation()

    const PANTH_BASE = pathname.split('/').map((part:string, i:number)=>i <=3 ? part : '').filter(item=>item != '').join().replaceAll(',', '/')
    const PATH_NAME= pathname.split('/')[3]

    return {
        PANTH_BASE,
        PATH_NAME
    }
}