import { createContext, useState } from 'react'

export const AutorizationContext = createContext()

export function UserContext({ children }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [token, setToken] = useState(null)
  const [userData, setUserData] = useState(null)

  const value = {
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    token,
    setToken,
    userData,
    setUserData,
  }
  return (
    <AutorizationContext.Provider value={value}>
      {children}
    </AutorizationContext.Provider>
  )
}
