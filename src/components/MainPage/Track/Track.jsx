import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.Styles'

function Track() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
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
              <S.NoteSvg/>
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
                <S.TrackTitleLink href="http://">
                  Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            {isLoading ? (
              <Skeleton width={270} baseColor="#202020" highlightColor="#444" />
            ) : (
              <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <Skeleton width={450} baseColor="#202020" highlightColor="#444" />
            ) : (
              <S.TrackAlbumLink href="http://">
                Welcome Reality
              </S.TrackAlbumLink>
            )}
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg/>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}

export default Track
