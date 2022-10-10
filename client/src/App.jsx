import './app.css'
import TopBar from "./components/topBar/TopBar";
import Home from "./components/Pages/home/Home";

function App() {
  return (
    <div className="app">
      <TopBar/>
      <Home/>
    </div>
  );
}

export default App;
