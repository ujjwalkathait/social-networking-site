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
          <Route path='/sign-in' element={<SigninForm />}/>
          <Route path='/sign-in' element={<SignupForm />}/>
        </Route>

        {/*private routes*/}
        <Route element={<RouteLayout />}>

        </Route>
        <Route index element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App