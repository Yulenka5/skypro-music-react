import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Bar.Styles'
import { useEffect, useRef, useState } from 'react'
import BarPlayerProgress from './BarPlayerProgress'
import VolumeProgress from './Volume'

function Bar(props) {
  if (!props.selectedTrack) {
    return null
  }

  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isTrackRepeat, setIsTrackRepeat] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(50)

  function formatDuration(durationInSeconds) {
    const seconds = Number(durationInSeconds)
    return (
      Math.floor(Math.round(seconds) / 60)
        .toString()
        .padStart(2, '0') +
      ':' +
      (Math.round(seconds) % 60).toString().padStart(2, '0')
    )
  }

  useEffect(() => {
    audioRef.current.play()
    setIsPlaying(true)
  }, [props.selectedTrack.track_file])

  useEffect(() => {
    const audio = audioRef.current

    function setAudioData() {
      setDuration(audio.duration)
    }

    function setTimeUpdate() {
      setCurrentTime(audio.currentTime)
    }

    audio.addEventListener('loadedmetadata', setAudioData)
    audio.addEventListener('timeupdate', setTimeUpdate)

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData)
      audio.removeEventListener('timeupdate', setTimeUpdate)
    }
  }, [audioRef])

  useEffect(() => {
    const audio = audioRef.current

    function handleTimeProgress() {
      setCurrentTime(audio.currentTime)
    }

    if (audio) {
      audio.addEventListener('timeupdate', handleTimeProgress)
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeProgress)
      }
    }
  }, [audioRef])

  useEffect(() => {
    const audio = audioRef.current

    function handleVolumeProgress() {
      setVolume(audio.cursor.volume)
    }

    if (audio) {
      audio.addEventListener('volumeupdate', handleVolumeProgress)
    }
    return () => {
      if (audio) {
        audio.removeEventListener('volumeupdate', handleVolumeProgress)
      }
    }
  }, [volume, audioRef])

  function handleVolumeChange(event) {
    const newVolume = event.target.value / 100
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  function handleProgressChange(event) {
    const audio = audioRef.current
    const newTime = event.target.value
    setCurrentTime(newTime)
    audio.currentTime = newTime
  }

  function handleStart() {
    audioRef.current.play()
    setIsPlaying(true)
  }

  function handleStop() {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  function handleRepeat() {
    const audio = audioRef.current
    audio.loop = true
    setIsTrackRepeat(true)
  }

  function handleNoRepeat() {
    const audio = audioRef.current
    audio.loop = false
    setIsTrackRepeat(false)
  }
  const toggleRepeat = isTrackRepeat ? handleNoRepeat : handleRepeat
  const togglePlay = isPlaying ? handleStop : handleStart

  return (
    <>
      <S.Audio
        controls
        ref={audioRef}
        src={props.selectedTrack.track_file}
        onChange={handleProgressChange}
        type="audio/mpeg"
      ></S.Audio>

      <S.Bar>
        <S.BarContent>
          <S.BarProgressTime>
            {formatDuration(currentTime)}/{formatDuration(duration)}
          </S.BarProgressTime>
          <BarPlayerProgress duration={duration} currentTime={currentTime} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={() => alert('Еще не реализовано')}>
                  <S.PrevSvg />
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={() => togglePlay()}>
                  {isPlaying ? (
                    <S.StopSvg name="stop" />
                  ) : (
                    <S.PlaySvg name="play" />
                  )}
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={() => alert('Еще не реализовано')}>
                  <S.NextSvg />
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={() => toggleRepeat()}>
                  <S.RepeatSvg toggleRepeat={toggleRepeat} />
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle onClick={() => alert('Еще не реализовано')}>
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
            <VolumeProgress
              volume={volume}
              handleVolumeChange={handleVolumeChange}
            />
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}

export default Bar
