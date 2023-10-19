import "../src/App.css";
import Bar from "./components/Bar/Bar";
import Menu from "./components/Menu/Menu";
import Player from "./components/Player/Player";
import Sidebar from "./components/Sidbar/Sidebar";
import TrackList from "./components/TrackList/TrackList";

function App() {
    return (
        <div className="wrapper">
      <div className="container">
        <main className="main">
            <Menu />
            <TrackList />
            <Player />
            <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
        </div>
        </div>
        
    );
}
export default App;