import './app.css'
import TopBar from "./components/topBar/TopBar";
import Home from "./components/Pages/home/Home";
import Single from './components/Pages/single/Single';

function App() {
  return (
    <div className="app">
      <TopBar/>
      <Single/>
    </div>
  );
}

export default App;
