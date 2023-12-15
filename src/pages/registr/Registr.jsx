import logoModalIcon from '../../assets/img/logo_modal.png'
import * as S from './Registr.Styles'
import { AutorizationContext } from '../../context/reg-context'
import { useContext, useEffect, useState } from 'react'
import { getToken, registrUser } from '../../Api'
import { useNavigate } from 'react-router-dom'

function Registr() {
  const [error, setError] = useState('')
  const data = useContext(AutorizationContext)
  const navigate = useNavigate()
  const {
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    setToken,
    setUserData,
  } = data

  function handleReg(e) {
    e.preventDefault()
    if (!email) {
      setError('Введите почту')
      return
    } else if (!password) {
      setError('Введите пароль')
      return
    } else if (!repeatPassword) {
      setError('Повторите пароль')
      return
    }

    if (password !== repeatPassword) {
      setError('Пароль не совпадает')
      return
    }

    registrUser({ email, password })
      .then((response) => {
        console.log(response)
        setUserData(response.data)
        getToken({ email, password })
          .then((response) => {
            setToken(response.data)
            console.log(response.data)
            localStorage.setItem('token', JSON.stringify(response.data))
            navigate('/')
          })
          .catch((error) => { 
            setError(
              error.response?.data?.detail || 'произошла ошибка при входе',
            )
          })
      })
      .catch((error) => {
        setError(error.response?.data?.detail || 'произошла ошибка при входе')
      })
  }

  useEffect(() => {
    setError(null)
  }, [email, password])

  return (
    <S.Wrapper>
      <S.ContainerSingup>
        <S.ModlaBlock>
          <S.ModalFormLogin onSubmit={handleReg}>
            <S.ModalFormLink>
              <S.ModalLogo>
                <img src={logoModalIcon} alt="logo" />
              </S.ModalLogo>
            </S.ModalFormLink>
            <S.ModalInput
              className="login"
              type="email"
              autoComplete="username"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <S.ModalInput
              className="password-first"
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <S.ModalInput
              className="password-double"
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value)
              }}
            />
            <S.ModalBtnSingupEnt>Зарегистрироваться</S.ModalBtnSingupEnt>
          </S.ModalFormLogin>
        </S.ModlaBlock>
      </S.ContainerSingup>
    </S.Wrapper>
  )
}

export default Registr
