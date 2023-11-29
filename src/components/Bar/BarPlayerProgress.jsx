import * as S from './BarPlayerProgress.Styles'

function BarPlayerProgress(props) {
  return (
    <S.ProgressInput
      type="range"
      min="0"
      max={props.duration}
      value={props.currentTime}
      step={0.01}
      onChange={props.handleProgressChange}
      $color="#B672FF"
    />
  )
}

export default BarPlayerProgress
