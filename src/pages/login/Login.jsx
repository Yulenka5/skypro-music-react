import * as S from './Login.Styles'
import logoModalIcon from '../../assets/img/logo_modal.png'

function Login() {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <S.ModalFormLink>
              <S.ModalLogo>
                <img src={logoModalIcon} alt="logo" />
              </S.ModalLogo>
            </S.ModalFormLink>
            <S.ModalInput
              className="login"
              autoComplete="username"
              type="email"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              className="password"
              autoComplete="current-password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              Войти
            </S.ModalBtnEnter>
            <S.ModalBtnSignUp>
              Зарегистрироваться
            </S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}

export default Login
