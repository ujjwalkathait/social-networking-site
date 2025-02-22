import {Routes, Route} from 'react-router-dom'

import './global.css'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*public routes*/}
        <Route element={<AuthLayout />}>
        <Route pa`th='/sign-in' element={<SigninForm />}/>
        <Route pa`th='/sign-in' element={<SignupForm />}/>

        </Route>

        {/*private routes*/}
        <Route index element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App