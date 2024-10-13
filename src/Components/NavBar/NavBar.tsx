import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function NavBar() {
  let{userData}=useContext(AuthContext)
  return (
    <>
      <div className='mx-3'>
    <h3>welcome {userData?.firstName}</h3>
      {/* {userData?.email} */}
    </div>
    <hr/>
    </>
  
  )
}
