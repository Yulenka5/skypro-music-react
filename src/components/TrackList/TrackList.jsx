import Track from "../Track/Track";
import SpriteIcon from "../../assets/img/icon/sprite.svg";
import Filter from "../Filter/Filter";
import { useState } from "react";


function TrackList () {

  const [activeFilter, setActiveFilter] = useState(null);

  function changeActiveFilter (newFilter) {
setActiveFilter(activeFilter === newFilter ? null : newFilter);

  }

    return (
        <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref={`${SpriteIcon}#icon-search`}></use>
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <Filter 
              filterName={'исполнителю'} 
              isOpened={activeFilter==='perfomer'} 
              filterList={'исполнитель'}
              action={()=>changeActiveFilter ('perfomer')}/>
              <Filter 
              filterName={'году выпуска'} 
              isOpened={activeFilter==='year'} 
              filterList={'год выпуска'}
              action={()=>changeActiveFilter ('year')}/>
              <Filter 
              filterName={'жанру'} 
              isOpened={activeFilter==='genre'} 
              filterList={'жанру'}
              action={()=>changeActiveFilter ('genre')}/>
            </div>
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref={`${SpriteIcon}#icon-watch`}></use>
                  </svg>
                </div>
              </div>
              </div>
              <Track />
              </div>
    )
}

export default TrackList;