import {Routes, Route} from 'react-router-dom'

import './global.css'
import SigninForm from './_auth/forms/SigninForm'


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*public routes*/}
        <Route path='/sign-in' element={<SigninForm />}/>

        {/*private routes*/}
        <Route index element
      </Routes>
    </main>
  )
}

export default App