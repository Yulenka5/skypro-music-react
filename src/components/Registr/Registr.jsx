import '../Registr/Registr'
import LogoModal from '../../assets/img/logo_modal'
import * as S from './Registr.Styles'

function Registr() {
  <S.Wrapper>
    <S.ContainerSingup>
      <S.ModlaBlock>
        <S.ModalFormLogin>
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
            className="password-first"
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalInput
            className="password-double"
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <S.ModalBtnSingupEnt>
            <a href="../index.html">Зарегистрироваться</a>
          </S.ModalBtnSingupEnt>
        </S.ModalFormLogin>
      </S.ModlaBlock>
    </S.ContainerSingup>
  </S.Wrapper>
}

export default Registr
