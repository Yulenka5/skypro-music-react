import { useEffect, useState } from 'react';
import SpriteIcon from '../../assets/img/icon/sprite.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Track() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="content__playlist playlist">
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? (
                <Skeleton
                  width={55}
                  height={55}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref={`${SpriteIcon}#icon-note`}></use>
                </svg>
              )}
            </div>
            <div className="track__title-text">
              {isLoading ? (
                <Skeleton
                  width={270}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <a className="track__title-link" href="http://">
                  Guilt <span className="track__title-span"></span>
                </a>
              )}
            </div>
          </div>
          <div className="track__author">
            {isLoading ? (
              <Skeleton width={270} 
              baseColor="#202020" 
              highlightColor="#444" />
            ) : (
              <a className="track__author-link" href="http://">
                Nero
              </a>
            )}
          </div>
          <div className="track__album">
            {isLoading ? (
              <Skeleton width={450} 
              baseColor="#202020" 
              highlightColor="#444" />
            ) : (
              <a className="track__album-link" href="http://">
                Welcome Reality
              </a>
            )}
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref={`${SpriteIcon}#icon-like`}></use>
            </svg>
            <span className="track__time-text">4:44</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track
