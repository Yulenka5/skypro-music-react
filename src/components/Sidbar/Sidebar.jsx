import * as S from './Sidebar.Styles'
import PlayList_1 from '../../assets/img/class-music.png'
import PlayList_2 from '../../assets/img/el-music.png'
import PlayList_3 from '../../assets/img/rock.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Sidebar(props) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.LogoutSvg />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink to="/Category/1">
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
            <S.SidebarLink to="/Category/2">
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
            <S.SidebarLink to="/Category/3">
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
