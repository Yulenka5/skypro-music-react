import logoModalIcon from '../../assets/img/logo_modal.png'
import * as S from './Registr.Styles'
import { AutorizationContext } from '../../context/reg-context'
import { useContext, useEffect, useState } from 'react'
import { getToken, registrUser } from '../../Api'
import { Link, useNavigate } from 'react-router-dom'

function Registr() {
  const data = useContext(AutorizationContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {
    email,
    password,
    repeatPassword,
    setToken,
    setUserData,
    setError,
  } = data

  function handleReg(e) {
    e.preventDefault()
    setIsLoading(true)
    if (!email) {
      setError('Введите почту')
      setIsLoading(false)
      return
    } else if (!password) {
      setError('Введите пароль')
      setIsLoading(false)
      return
    } else if (!repeatPassword) {
      setError('Повторите пароль')
      setIsLoading(false)
      return
    }

    if (password !== repeatPassword) {
      setError('Пароль не совпадает')
      setIsLoading(false)
      return
    }

    registrUser({ email, password })
      .then((response) => {
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
          .finally(() => setIsLoading(false))
      })
      .catch((error) => {
        setError(error.response?.data?.detail || 'произошла ошибка при входе')
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    data.setError(null)
    setIsLoading(false)
  }, [data.email, data.password])

  return (
    <S.Wrapper>
      <S.ContainerSingup>
        <S.ModlaBlock>
          <S.ModalFormLogin onSubmit={handleReg}>
            <S.ModalFormLink>
              <Link to="/">
                <S.ModalLogo>
                  <img src={logoModalIcon} alt="logo" />
                </S.ModalLogo>
              </Link>
            </S.ModalFormLink>
            <S.ModalInput
              className="login"
              type="email"
              autoComplete="username"
              name="login"
              placeholder="Почта"
              value={data.email}
              onChange={(e) => {
                data.setEmail(e.target.value)
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
                data.setPassword(e.target.value)
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
                data.setRepeatPassword(e.target.value)
              }}
            />
            {data.error && <S.Error>{data.error}</S.Error>}
            <S.ModalBtnSingupEnt disabled={isLoading}>
              Зарегистрироваться
            </S.ModalBtnSingupEnt>
          </S.ModalFormLogin>
        </S.ModlaBlock>
      </S.ContainerSingup>
    </S.Wrapper>
  )
}

export default Registr
