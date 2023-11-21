import Menu from '../../components/Menu/Menu'
import TrackList from '../../components/TrackList/TrackList'
import Sidebar from '../../components/Sidbar/Sidebar'
import * as S from './MainPage.Styles'

function MainPage() {
  return (
    <S.Wrapper>
      <S.Conteiner>
        <S.Main>
          <Menu />
          <TrackList />
          <Sidebar />
        </S.Main>
        <S.Footer />
      </S.Conteiner>
    </S.Wrapper>
  )
}

export default MainPage
