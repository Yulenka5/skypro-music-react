import * as S from './Login.Styles'
import { loginUser } from '../../Api'
import logoModalIcon from '../../assets/img/logo_modal.png'
import { useContext, useState, useEffect } from 'react'
import { AutorizationContext } from '../../context/reg-context'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const data = useContext(AutorizationContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    setIsLoading(true)

    const { email, password, setToken, setUserData, setError } = data

    if (!email) {
      setError('Введите почту')
      setIsLoading(false)
      return
    } else if (!password) {
      setError('Введите пароль')
      setIsLoading(false)
      return
    }

    loginUser({ email, password })
      .then((response) => {
        setUserData(response.data)
        getToken({ email, password })
          .then((response) => {
            setToken(response.data)
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
  }, [data.email, data.password])

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleLogin}>
            <S.ModalFormLink>
              <Link to="/login">
                <S.ModalLogo>
                  <img src={logoModalIcon} alt="logo" />
                </S.ModalLogo>
              </Link>
            </S.ModalFormLink>
            <S.ModalInput
              className="login"
              autoComplete="username"
              type="email"
              name="login"
              placeholder="Почта"
              value={data.email}
              onChange={(event)=>{
                data.setEmail(event.target.value)
              }}
            />
            <S.ModalInput
              className="password"
              autoComplete="current-password"
              type="password"
              name="password"
              placeholder="Пароль"
              value={data.password}
              onChange={(event)=>{
                data.setPassword(event.target.value)
              }}
            />
            {data.error && <S.Error>{data.error}</S.Error>}
            <S.ModalBtnEnter disabled={isLoading}>Войти</S.ModalBtnEnter>
            <Link to="/registr">
              <S.ModalBtnSignUp>Зарегистрироваться</S.ModalBtnSignUp>
            </Link>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}

export default Login
