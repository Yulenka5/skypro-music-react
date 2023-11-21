import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.Styles'

function Track(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [trackTime, setTrackTime] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

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
              {isLoading ? (
                <Skeleton
                  width={55}
                  height={55}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.NoteSvg />
              )}
            </S.TrackTitleImage>
            <S.TrackTitleText>
              {isLoading ? (
                <Skeleton
                  width={270}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.TrackTitleLink>
                  <S.TrackTitleSpan>{props.name}</S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            {isLoading ? (
              <Skeleton width={270} baseColor="#202020" highlightColor="#444" />
            ) : (
              <S.TrackAuthorLink>{props.author}</S.TrackAuthorLink>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <Skeleton width={450} baseColor="#202020" highlightColor="#444" />
            ) : (
              <S.TrackAlbumLink>{props.album}</S.TrackAlbumLink>
            )}
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
