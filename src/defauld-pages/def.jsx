import * as S from './def.Styles'
import Menu from '../components/Menu/Menu'
import Sidebar from '../components/Sidbar/Sidebar'
import { SearchBar } from '../components/TrackList/SearchBar'

function DefaultPage({ children }) {
  return (
    <S.Wrapper>
      <S.Conteiner>
        <S.Main>
          <Menu />
          <S.MainCenterblock>
            <SearchBar />
            {children}
          </S.MainCenterblock>
          <Sidebar />
        </S.Main>
        <S.Footer />
      </S.Conteiner>
    </S.Wrapper>
  )
}

export default DefaultPage
