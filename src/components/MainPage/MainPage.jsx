import Menu from "./Menu/Menu"
import TrackList from "./TrackList/TrackList"
import Sidebar from "./Sidbar/Sidebar"
import * as S from "./MainPage.Styles"

function MainPage () {
    return (
        <S.Wrapper>
      <S.Conteiner>
        <S.Main>
          <Menu />
          <TrackList />
          <Sidebar />
        </S.Main>
        <S.Footer/>
      </S.Conteiner>
    </S.Wrapper>
    )
}

export default MainPage