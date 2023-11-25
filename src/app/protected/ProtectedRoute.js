"use client"

import { useRouter } from 'next/navigation';
import React from 'react'


function ProtectedRoute({children}) {
    
    const navigate = useRouter()
    let user
    if (typeof localStorage !== 'undefined') {
        user = localStorage.getItem('user');
      }
    
    if(user){
          
          return navigate.push('/login')
    }
    
    return children
}

export default ProtectedRoute  
