import {useEffect, useState} from 'react'

export function useGetFromStore(store:any, callback:any){
  const result = store(callback)
  const [state, setState] = useState()
  useEffect(()=>{
    setState(result)
  },[result])
  return state
}