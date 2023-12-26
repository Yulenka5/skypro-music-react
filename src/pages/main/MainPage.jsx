import Menu from '../../components/Menu/Menu'
import TrackList from '../../components/TrackList/TrackList'
import Sidebar from '../../components/Sidbar/Sidebar'
import * as S from './MainPage.Styles'

function MainPage(props) {

  return (
    <S.Wrapper>
      <S.Conteiner>
        <S.Main>
          <Menu />
          <TrackList
            trackList={props.trackList}
            setSelectedTrack={props.setSelectedTrack}
            error={props.error}
            isLoading={props.isLoading}
          />
          <Sidebar isLoading={props.isLoading}/>
        </S.Main>
        <S.Footer />
      </S.Conteiner>
    </S.Wrapper>
  )
}

export default MainPage
