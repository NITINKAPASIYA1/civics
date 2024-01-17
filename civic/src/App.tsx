import SignUp from './auth/forms/SignupFrom'
import SignIn from './auth/forms/SigninForm'
// import Rootarea from './root/Rootarea'
import './globals.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './auth/AuthLayout'
import Rootarea from './root/Rootarea'
import Home from './root/pages/Home'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public Routes */}
        <Route element={<AuthLayout></AuthLayout>}>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/login-in' element={<SignIn />}></Route>
        </Route>

        {/* private Routes */}
        <Route element={<Rootarea/>}>
          <Route  index element={<Home/>}></Route>

        </Route>
      </Routes>
    </main>
  )
}

export default App
