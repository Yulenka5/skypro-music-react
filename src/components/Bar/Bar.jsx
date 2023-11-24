import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Bar.Styles'

function Bar(props) {
  if (!props.selectedTrack) {
    return null
  }

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PrevSvg />
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlaySvg />
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.NextSvg />
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.RepeatSvg />
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.ShuffleSvg />
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.NoteSvg />
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  {props.isLoading ? (
                    <Skeleton
                      width={90}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <S.TrackPlayAuthorLink>
                      {props.selectedTrack.author}
                    </S.TrackPlayAuthorLink>
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {props.isLoading ? (
                    <Skeleton
                      width={90}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <S.TrackPlayAlbumLink>
                      {props.selectedTrack.album}
                    </S.TrackPlayAlbumLink>
                  )}
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.PlayLikeSvg />
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.PlayDisLikeSvg />
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumesSvg />
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default Bar
