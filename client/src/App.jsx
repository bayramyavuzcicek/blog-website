import './app.css'
import TopBar from "./components/topBar/TopBar";
import Home from "./components/Pages/home/Home";
import Single from './components/Pages/single/Single';
import Write from './components/Pages/write/Write';

function App() {
  return (
    <div className="app">
      <TopBar/>
      <Write/>
    </div>
  );
}

export default App;
