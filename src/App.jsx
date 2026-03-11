import React, { use, useEffect, useState } from 'react'
import Loingin from './conmponint/Auth/Loingin'
import AdminDashbord from './conmponint/Dashboard/AdminDashbord'
import EmploayDashbord from './conmponint/Dashboard/EmploayDashbord'
import { useContext } from 'react'
import { AuthContexts } from './context/AuthContext'


const App = () => {

const [userData,setUserData] = useContext(AuthContexts);
  const [user, setUser] = useState(null)
  const [loggedInUserdata , setLoggedInUserdata] = useState(null)


 useEffect(() => {
  const loggedInUser =  localStorage.getItem("loggedInUser")
  if (loggedInUser) {
    const userdata = JSON.parse(loggedInUser)
    if (userdata) {
      setUser(userdata.role)
    setLoggedInUserdata(userdata.data)  

    }
  }
 }, [])

const HandlerLogin = (email,password) =>{
if (email == "admin@example.com" && password == 123 ) {
  setUser("admin")
  localStorage.setItem("loggedInUser", JSON.stringify({ role : "admin"}));
}else if (userData) {
   const employee = userData.find((e) => e.email === email && e.password === password)
   if (employee) {
     setUser("employee")
     setLoggedInUserdata(employee)
     localStorage.setItem("loggedInUser", JSON.stringify({ role : "employee" ,data : employee}));
   }
}else{
  alert("invaled information")
}}    


  return (
    <>
    {!user ? <Loingin HandlerLogin={HandlerLogin} /> : ""}
    {user == "admin" ? <AdminDashbord changeUser={setUser} /> : (user == "employee" ? <EmploayDashbord changeUser={setUser} data={loggedInUserdata} /> : "")}
    </>
  )
}

export default App
