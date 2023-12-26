import * as S from './Sidebar.Styles'
import PlayList_1 from '../../assets/img/class-music.png'
import PlayList_2 from '../../assets/img/el-music.png'
import PlayList_3 from '../../assets/img/rock.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { AutorizationContext } from '../../context/reg-context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar(props) {
  const { userData } = useContext(AutorizationContext)
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
    navigate('/login')
  }

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>
          {userData ? userData.username : ''}
        </S.SidebarPersonalName>
        <S.LogoutSvg onClick={logout} />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink to="/category/1">
              {props.isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg src={PlayList_1} alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/2">
              {props.isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg src={PlayList_2} alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/3">
              {props.isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg src={PlayList_3} alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
