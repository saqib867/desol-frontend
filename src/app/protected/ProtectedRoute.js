'use client'

import { useRouter } from 'next/navigation'
import React from 'react'


function ProtectedRoute({children}) {
    
    const navigate = useRouter()
    let user
    if (typeof localStorage !== 'undefined') {
        user = localStorage.getItem('user');
      }
    
    if(user){
          return children
    }
    
  return navigate.push('/login')
}

export default ProtectedRoute  
