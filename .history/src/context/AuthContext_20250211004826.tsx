import { createContext, useContext, useEffect, useState} from 'react'


export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: '',
}

const INITIAL_USER = {
    user: INITIAL_USER
}

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext