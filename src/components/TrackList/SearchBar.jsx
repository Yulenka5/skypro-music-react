import * as S from './TrackList.Styles'


export function SearchBar() {
  return (
    <S.CenterblockSearch className="search">
      <S.SearchSvg />
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  )
}
