import DefaultPage from '../../defauld-pages/def'
import * as S from '../../components/TrackList/TrackList.Styles'
import Track from '../../components/Track/Track'

function MyPlaylist() {
  return (
    <DefaultPage>
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
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
      <Track />
    </DefaultPage>
  )
}

export default MyPlaylist
