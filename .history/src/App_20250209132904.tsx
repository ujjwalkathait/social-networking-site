import {Routes, Route} from 'react-router-dom'

import './global.css'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*public routes*/}
        <Route element=>

        </Route>
        <Route path='/sign-in' element={<SigninForm />}/>
        <Route path='/sign-in' element={<SignupForm />}/>

        {/*private routes*/}
        <Route index element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App