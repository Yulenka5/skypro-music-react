import * as S from './Bar.Styles'

function VolumeProgress(props) {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumesSvg />
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            name="range"
            min="0"
            max="100"
            onChange={props.handleVolumeChange}
            value={props.volume * 100}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}

export default VolumeProgress
