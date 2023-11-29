import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Bar.Styles'
import { useRef, useState } from 'react'
import BarPlayerProgress from './BarPlayerProgress'

function Bar(props) {
  if (!props.selectedTrack) {
    return null
  }

  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  function handleStart() {
    audioRef.current.play()
    setIsPlaying(true)
  }

  function handleStop() {
    audioRef.current.pause()
    setIsPlaying(false)
  }


  const togglePlay = isPlaying ? handleStop : handleStart

  return (
    <>
      <S.Audio
        controls
        ref={audioRef}
        src={props.selectedTrack.track_file}
        type="audio/mpeg"
      ></S.Audio>

      <S.Bar>
        <S.BarContent>
          <BarPlayerProgress
          />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={() => alert('в работе')}>
                  <S.PrevSvg />
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={() => togglePlay()}>
                  {isPlaying ? (
                    <S.StopSvg name="stop" />
                  ) : (
                    <S.PlaySvg name="play" />
                  )}
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={() => alert('в работе')}>
                  <S.NextSvg />
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.RepeatSvg />
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle onClick={() => alert('в работе')}>
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
    </>
  )
}

export default Bar
