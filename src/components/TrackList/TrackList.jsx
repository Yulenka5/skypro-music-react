import Track from '../Track/Track'
import Filter, { perfomer, year, genre } from '../Filter/Filter'
import { useState } from 'react'
import * as S from './TrackList.Styles'
import { SearchBar } from './SearchBar'
import SkeletonTrack from '../Skeleton/Skeleton'

function TrackList(props) {
  const [activeFilter, setActiveFilter] = useState(null)

  function changeActiveFilter(newFilter) {
    setActiveFilter(activeFilter === newFilter ? null : newFilter)
  }
  return (
    <S.MainCenterblock className="centerblock">
      <SearchBar />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <S.CenterblockFilter className="filter">
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <Filter
          filterName={'исполнителю'}
          isOpened={activeFilter === 'perfomer'}
          filterList={perfomer}
          action={() => changeActiveFilter('perfomer')}
        />
        <Filter
          filterName={'году выпуска'}
          isOpened={activeFilter === 'year'}
          filterList={year}
          action={() => changeActiveFilter('year')}
        />
        <Filter
          filterName={'жанру'}
          isOpened={activeFilter === 'genre'}
          filterList={genre}
          action={() => changeActiveFilter('genre')}
        />
      </S.CenterblockFilter>
      <S.CenterblockContent>
        <S.ContentTitle className="playlist-title">
          <S.ContentTitleCol>Трек</S.ContentTitleCol>
          <S.ContentTitleCol2>ИСПОЛНИТЕЛЬ</S.ContentTitleCol2>
          <S.ContentTitleCol3>АЛЬБОМ</S.ContentTitleCol3>
          <S.ContentTitleCol4>
            <S.WatchSvg />
          </S.ContentTitleCol4>
        </S.ContentTitle>
      </S.CenterblockContent>
      <p>{props.error}</p>
      {props.isLoading ? (
        <SkeletonTrack />
      ) : (
        props.trackList.map((e) => (
          <Track
            onClick={() => props.setSelectedTrack(e)}
            {...props}
            key={e.id}
            id={e.id}
            name={e.name}
            author={e.author}
            album={e.album}
            duration={e.duration_in_seconds}
            url={e.track_file}
          />
        ))
      )}
    </S.MainCenterblock>
  )
}

export default TrackList
