import { useState } from 'react'
import Logo from '../../assets/img/logo.png'
import * as S from './Menu.Styles'
import { Link } from 'react-router-dom'

function Menu() {
  const [isOpened, setIsOpened] = useState(false)

  function onBurgerClick() {
    setIsOpened(!isOpened)
    console.log(isOpened)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImage src={Logo} alt="Logo" />
        </Link>
      </S.NavLogo>
      <S.NavBurger onClick={onBurgerClick}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {isOpened && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/">
                <S.MenuLink>Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/favorites">
                <S.MenuLink>Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/login">
                <S.MenuLink>Войти</S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Menu
