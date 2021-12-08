import "./App.css";
import SwitchComponent from "./components/SwitchComponent";

function App() {
  return (
    <div className="App">
      <img
        src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="chuckwp"
        className="chuckwallpaper"
      ></img>
      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png"
        alt="minichuck"
        className="chuckimg"
      ></img>
      <SwitchComponent />
    </div>
  );
}

export default App;
