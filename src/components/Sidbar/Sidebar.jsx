import { useEffect, useState } from 'react';
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
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref={`${SpriteIcon}#logout`}></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <img
                  className="sidebar__img"
                  src={PlayList_1}
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <img
                  className="sidebar__img"
                  src={PlayList_2}
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <img
                  className="sidebar__img"
                  src={PlayList_3}
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
