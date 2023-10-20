import "../src/App.css";
import Bar from "./components/Bar/Bar";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidbar/Sidebar";
import TrackList from "./components/TrackList/TrackList";

function App() {
    return (
        <div className="wrapper">
      <div className="container">
        <main className="main">
            <Menu />
            <TrackList />
            <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
        </div>
        </div>
        
    );
}
export default App;