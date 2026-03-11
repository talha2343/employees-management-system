import React from 'react'

const Header = (props) => {

 const LogoutUser = () => {
   // Logout logic here
    localStorage.setItem("loggedInUser", null);
    props.changeUser(null)
 }

  return (
    <div className='flex items-center justify-between'>
            <h1 className='text-lg font-medium'>Hello <br /> <span className='text-2xl font-bold'>
              {props.data ? props.data.firstName : 'Admin'}👋
              </span> </h1>
            <button onClick={LogoutUser} className='active:scale-95 py-2 px-5 rounded bg-red-600'>Logout</button>
        </div>
  )
}

export default Header
