'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import {useEffect} from 'react'


function ProtectedRoute({children}) {
    
    const navigate = useRouter()
    let user
    if (typeof localStorage !== 'undefined') {
        user = localStorage.getItem('user');
      }

    useEffect(()=>{

 
        if(user){
            return children
      }
      
    return navigate.replace('/login')
    },[user])
    
   
}

export default ProtectedRoute  
