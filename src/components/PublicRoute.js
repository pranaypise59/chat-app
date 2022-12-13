import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoute = ({children, ...routProps}) => {
    const profile = false;

    if(profile){
        return <Redirect to='/'/>
    }
  return (
    <Route {...routProps} >
        {children}
    </Route>
  )
}

export default PublicRoute