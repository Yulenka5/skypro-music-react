import Bar from './components/Bar/Bar'
import Menu from './components/Menu/Menu'
import Sidebar from './components/Sidbar/Sidebar'
import TrackList from './components/TrackList/TrackList'
import * as S from './AppMain.Styles'

function App() {
  return (
    <S.Wrapper>
      <S.Conteiner>
        <S.Main>
          <Menu />
          <TrackList />
          <Sidebar />
        </S.Main>
        <Bar />
        <S.Footer></S.Footer>
      </S.Conteiner>
    </S.Wrapper>
  )
}
export default App
