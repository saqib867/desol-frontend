'use client'

import { useRouter } from 'next/navigation'
import React from 'react'


function ProtectedRoute({children}) {
    
    const navigate = useRouter()

    const user =localStorage.getItem('user')
    if(user){
          return children
    }
    
  return navigate.push('/login')
}

export default ProtectedRoute
