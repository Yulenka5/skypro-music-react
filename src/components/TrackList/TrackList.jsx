import Track from '../Track/Track';
import SpriteIcon from '../../assets/img/icon/sprite.svg';
import Filter, { perfomer, year, genre } from '../Filter/Filter';
import { useState } from 'react';
import * as S from './TrackListStyles';

function TrackList () {

  const [activeFilter, setActiveFilter] = useState(null);

  function changeActiveFilter (newFilter) {
setActiveFilter(activeFilter === newFilter ? null : newFilter);

  }
    return (
        <S.MainCenterblock className="centerblock">
            <S.CenterblockSearch className="search">
              <S.SearchSvg>
                <use xlinkHref={`${SpriteIcon}#icon-search`}></use>
              </S.SearchSvg>
              <S.SearchText
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </S.CenterblockSearch>
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <S.CenterblockFilter className="filter">
              <S.FilterTitle>Искать по:</S.FilterTitle>
              <Filter 
              filterName={'исполнителю'} 
              isOpened={activeFilter==='perfomer'} 
              filterList={perfomer}
              action={()=>changeActiveFilter ('perfomer')}/>
              <Filter 
              filterName={'году выпуска'} 
              isOpened={activeFilter==='year'} 
              filterList={year}
              action={()=>changeActiveFilter ('year')}/>
              <Filter 
              filterName={'жанру'} 
              isOpened={activeFilter==='genre'} 
              filterList={genre}
              action={()=>changeActiveFilter ('genre')}/>
            </S.CenterblockFilter>
            <S.CenterblockContent>
              <S.ContentTitle className="playlist-title">
                <S.ContentTitleCol className="col01">Трек</S.ContentTitleCol>
                <S.ContentTitleCol className="col02">ИСПОЛНИТЕЛЬ</S.ContentTitleCol>
                <S.ContentTitleCol className="col03">АЛЬБОМ</S.ContentTitleCol>
                <S.ContentTitleCol className="col04">
                  <S.PlaylistTitleSvg alt="time">
                    <use xlinkHref={`${SpriteIcon}#icon-watch`}></use>
                  </S.PlaylistTitleSvg>
                </S.ContentTitleCol>
              </S.ContentTitle>
              </S.CenterblockContent>
              <Track />
              </S.MainCenterblock>
    )
}

export default TrackList;