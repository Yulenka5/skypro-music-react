import '../Login/Login'
import LogoModal from '../../assets/img/logo_modal'
import * as S from './Login.Styles'

function Login() {
  <S.Wrapper>
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin action="#">
          <a href="../">
            <S.ModalLogo>
              <img src={LogoModal} alt="logo" />
            </S.ModalLogo>
          </a>
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
}

export default Login
