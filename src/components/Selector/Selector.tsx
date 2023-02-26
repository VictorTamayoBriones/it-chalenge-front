import { toBeSingular } from "@/utils"
import { Select } from "@chakra-ui/react"
import { ProviderSelector } from "./context/ProviderSelector"
import Options from "./Options"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectordata } from "@/redux/baseStates/Selector/SelectorSlice";
import { AppStore } from '../../redux/store';
import { useState, useEffect } from 'react';

interface Props{
  show: 'modules' | 'roles',
  showValueById?: string
}

function Selector({show, showValueById}:Props) {

  const dispatch = useDispatch()
  const selectorData = useSelector((store:AppStore)=>store.selectorData)


  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{  
    dispatch(updateSelectordata(e.target.value))
  }

  useEffect(()=>{
    if(showValueById){
      dispatch(updateSelectordata(showValueById))
    }
  },[])

  return (
    <ProviderSelector>
      <Select value={selectorData} onChange={handleChange} placeholder={ `Select a ${toBeSingular(show)}` } mb="25px" >
        <Options show={show} />
      </Select>
    </ProviderSelector>
  )
}
export default Selector