import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from '../Track/Track.Styles'

function SkeletonTrack() {
  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <Skeleton
                width={55}
                height={55}
                baseColor="#202020"
                highlightColor="#444"
              />
              <S.NoteSvg />
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <Skeleton width={270} baseColor="#202020" highlightColor="#444" />

              <S.TrackTitleLink>
                <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <Skeleton width={270} baseColor="#202020" highlightColor="#444" />

            <S.TrackAuthorLink></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <Skeleton width={170} baseColor="#202020" highlightColor="#444" />

            <S.TrackAlbumLink></S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg />
            <S.TrackTimeText></S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}
export default SkeletonTrack
