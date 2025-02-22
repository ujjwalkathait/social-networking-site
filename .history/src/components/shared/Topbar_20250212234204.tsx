import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <section className='topbar'>
        <div className='flex-between py-4 px-5'>
            <Link to="/" className="flex gap-3 items-center">
                
            </Link>
        </div>
    </section>
  )
}

export default Topbar