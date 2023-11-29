import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.Styles'

function Track(props) {
  const [trackTime, setTrackTime] = useState(0)

  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = durationInSeconds % 60
    setTrackTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
  }

  useEffect(() => {
    formatDuration(props.duration)
  }, [])

  return (
    <S.ContentPlaylist>
      <S.PlaylistItem onClick={props.onClick}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.NoteSvg />
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink>
                <S.TrackTitleSpan>{props.name}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink>{props.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink>{props.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg />
            <S.TrackTimeText>{trackTime}</S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}

export default Track
