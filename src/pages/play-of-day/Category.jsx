import { useParams } from 'react-router-dom'
import * as S from '../../components/TrackList/TrackList.Styles'
import Track from '../../components/Track/Track'
import DefaultPage from '../../defauld-pages/def'

function PlayOfDay() {
  const { id } = useParams()

  return (
    <DefaultPage>
      <S.CenterblockH2>
        {id === '1'
          ? 'Классическая музыка'
          : id === '2'
          ? 'Электронная музыка'
          : id === '3'
          ? 'Рок'
          : id === '4'
          ? '100 танцевальных хитов' 
          : id === '5'
          ? 'Инди заряд'
          : id === '6' 
          ? 'Плейлист дня'
          : ''
          }
      </S.CenterblockH2>
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

export default PlayOfDay
