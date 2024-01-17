import { Outlet,Navigate } from 'react-router-dom'



const AuthLayout = () => {
  const isAuthenticated = false;


  return (
    <>
    {isAuthenticated ? (<Navigate to="/"></Navigate>) : 
    (<>
        <Outlet></Outlet>
    </>)}
    </>
  )
}

export default AuthLayout