import { useEffect, useState } from 'react';
import * as S from './SidebarStyles';
import SpriteIcon from '../../assets/img/icon/sprite.svg';
import PlayList_1 from '../../assets/img/playlist01.png';
import PlayList_2 from '../../assets/img/playlist02.png';
import PlayList_3 from '../../assets/img/playlist03.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function Sidebar() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <S.MainSidebar className="sidebar">
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref={`${SpriteIcon}#logout`}></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg
                  src={PlayList_1}
                  alt="day's playlist"
                />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg
                  src={PlayList_2}
                  alt="day's playlist"
                />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg
                  src={PlayList_3}
                  alt="day's playlist"
                />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
