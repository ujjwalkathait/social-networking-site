import {Routes, Route} from 'react-router-dom'

import './global.css'


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*public routes*/}
        <Route path='/sign-in' element={<Signin}/>
        {/*private routes*/}
      </Routes>
    </main>
  )
}

export default App