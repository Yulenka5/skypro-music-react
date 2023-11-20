import * as S from './Logine.Styles'
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
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              className="password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              <a href="../index.html">Войти</a>
            </S.ModalBtnEnter>
            <S.ModalBtnSignUp>
              <a href="signup.html">Зарегистрироваться</a>
            </S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}

export default Login
