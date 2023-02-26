import { useRefreshToken } from "@/hooks";
import { kwnowWhenPageReload } from "@/utils/knowWhenPageReload";
import { useEffect } from "react";
import { Aside, Body, Navbar } from "./components"
import "./style-dashboard.scss"
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from "@/redux/store";
import { updateSectionToReload } from "@/redux/baseStates/needToReload/needToReload";

function Dashboard() {
  const handleRefreshToken = useRefreshToken();
  
  const toReload = useSelector((store:AppStore)=>store.toReload)
  const dispatch = useDispatch()

  useEffect(()=>{
    if( kwnowWhenPageReload() === 'reload' ){
      //Si se detecta que se recraga la pagina vamos por el refresh token y limpiamos el local storage
      localStorage.clear()
      handleRefreshToken();
    }
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
      dispatch(updateSectionToReload(''))
    },500)
  }, [toReload])

  return (
    <div className="dashboard">
      <Navbar/>
      <section className="main">
        <Aside/>
        <Body/>
      </section>
    </div>
  )
}
export default Dashboard