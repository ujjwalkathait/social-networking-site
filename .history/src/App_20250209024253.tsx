import {Routes, Route} from 'react-router-dom'

import './global.css'
import SigninForm from './_auth/forms/SigninForm'
import { Home } from './_root/pages'


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*public routes*/}
        <Route path='/sign-in' element={<SigninForm />}/>
        <Route path='/sign-in' element={<SigniForm />}/>

        {/*private routes*/}
        <Route index element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App